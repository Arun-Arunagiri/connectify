const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const JWT_SECRET = 'pP7kLz8!sM9vB2fG3dEwQ7yU5tV1aX@#'; // Replace with a strong secret for JWT

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/connectify", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], required: true }
});

// Message Schema
const messageSchema = new mongoose.Schema({
    admin_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    yes_count: { type: Number, default: 0 },
    no_count: { type: Number, default: 0 },
    replies: [{
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        vote: { type: String, enum: ['yes', 'no'], required: true },
        reply_message: { type: String, required: true },
        timestamp: { type: Date, default: Date.now }
    }],
    created_at: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Message = mongoose.model('Message', messageSchema);

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send('Access denied. No token provided.');

    jwt.verify(token.split(' ')[1], JWT_SECRET, (err, user) => {
        if (err) return res.status(403).send('Invalid token.');
        req.user = user;
        next();
    });
}

// Register a new user (admin or regular user)
// app.post('/register', async (req, res) => {
//     const { username, password, role } = req.body;

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ username, password: hashedPassword, role });

//     try {
//         await user.save();
//         res.status(201).send('User registered');
//     } catch (err) {
//         res.status(400).send('User registration failed');
//     }
// });

app.post('/register', async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const user = new User({
            username,
            email,
            password: hashedPassword,
            role,
        });

        // Save the user to the database
        await user.save();

        // Send a success response
        res.status(201).send('User registered successfully');
    } catch (err) {
        console.error(err);
        res.status(400).send('User registration failed');
    }
});
// Login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).send('Invalid username or password.');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid username or password.');

    const token = jwt.sign({ _id: user._id, role: user.role }, JWT_SECRET);
    res.status(200).json({ token });
});

// Admin posts a message
app.post('/message', authenticateToken, async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).send('Access denied.');

    const { message } = req.body;
    const newMessage = new Message({ admin_id: req.user._id, message });

    try {
        await newMessage.save();
        res.status(201).send('Message posted successfully');
    } catch (err) {
        res.status(400).send('Failed to post message');
    }
});

// User replies to a message (yes/no with reply)
app.post('/message/:id/reply', authenticateToken, async (req, res) => {
    if (req.user.role !== 'user') return res.status(403).send('Access denied.');

    const { vote, reply_message } = req.body;
    const messageId = req.params.id;

    const message = await Message.findById(messageId);
    if (!message) return res.status(404).send('Message not found.');

    const reply = {
        user_id: req.user._id,
        vote,
        reply_message
    };

    message.replies.push(reply);
    if (vote === 'yes') {
        message.yes_count += 1;
    } else if (vote === 'no') {
        message.no_count += 1;
    }

    try {
        await message.save();
        res.status(200).send('Reply added');
    } catch (err) {
        res.status(400).send('Failed to add reply');
    }
});

// Admin views replies for a single message
app.get('/message/:id/replies', authenticateToken, async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).send('Access denied.');

    const messageId = req.params.id;
    const message = await Message.findById(messageId).populate('replies.user_id', 'username');

    if (!message) return res.status(404).send('Message not found.');

    res.status(200).json({
        message: message.message,
        replies: message.replies
    });
});

app.get('/messages/recent', authenticateToken, async (req, res) => {
    try {
        const messages = await Message.find()
            .sort({ created_at: -1 }) // Sort by created_at in descending order
            .limit(10); // Limit to the 10 most recent messages

        res.status(200).json(messages);
    } catch (err) {
        res.status(500).send('Error retrieving messages: ' + err.message);
    }
});

app.get('/',(req,res)=>{
    res.status(200).send('Success')
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
