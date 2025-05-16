require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
const commentRouter = require('./routes/commentRoutes');
const connectionRouter = require('./routes/connectionRoutes');
const { server, app, io } = require('./server');

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.ORIGIN,
  credentials: true,
}));
app.use(cookieParser());
app.set("io", io); 

// Routes
app.get('/', (req, res) => {
  res.status(200).json({ message: "API working.", success: true });
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);
app.use("/api/connections", connectionRouter);


// Start server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


