const mongoose = require("mongoose");
const Connection = require("../models/connectionModel");
const User = require("../models/userModel"); 

const sendInvite = async (req, res) => {
    try {
        const { senderId, receiverId } = req.body;

        // Validate ObjectIds
        if (!mongoose.Types.ObjectId.isValid(senderId) || !mongoose.Types.ObjectId.isValid(receiverId)) {
            return res.status(400).json({ message: "Invalid user IDs.", success: false });
        }

        // Prevent sending invite to self
        if (senderId === receiverId) {
            return res.status(400).json({ message: "Cannot send invite to yourself.", success: false });
        }

        const sender = await User.findById(senderId);
        const receiver = await User.findById(receiverId);

        if (!sender || !receiver) {
            return res.status(404).json({ message: "User not found.", success: false });
        }

        // Check if an invite already exists
        const existingConnection = await Connection.findOne({
            $or: [
                { sender: senderId, receiver: receiverId },
                { sender: receiverId, receiver: senderId }
            ]
        });

        if (existingConnection) {
            return res.status(400).json({ message: "Invite already exists.", success: false });
        }

        const newConnection = new Connection({
            sender: senderId,
            receiver: receiverId,
            status: "pending"
        });

        await newConnection.save();

        return res.status(200).json({ message: "Invite sent successfully.", success: true, connection: newConnection });

    } catch (error) {
        console.error("Error in sendInvite:", error);
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again later.",
        });
    }
};

const changeStatus = async (req, res) => {
  try {
    
    const {status,connectionId} = req.body;

    // Validate connectionId
    if (!mongoose.Types.ObjectId.isValid(connectionId)) {
      return res.status(400).json({ message: "Invalid connection ID.", success: false });
    }

    // Find connection
    const connection = await Connection.findById(connectionId);
    if (!connection) {
      return res.status(404).json({ message: "Connection not found.", success: false });
    }

    // Check if already accepted
    if (connection.status === "accepted") {
      return res.status(400).json({ message: "Invite already accepted.", success: false });
    }

    // Update connection status
    connection.status = status;

    // Find sender and receiver
    const [sender, receiver] = await Promise.all([
      User.findById(connection.sender),
      User.findById(connection.receiver)
    ]);

    if (!sender || !receiver) {
      return res.status(404).json({ message: "Sender or receiver not found.", success: false });
    }

    // Add connection to both users if not already present
    if (!sender.connections.includes(connection._id)) {
      sender.connections.push(connection._id);
    }

    if (!receiver.connections.includes(connection._id)) {
      receiver.connections.push(connection._id);
    }

    // Save all
    await Promise.all([
      connection.save(),
      sender.save(),
      receiver.save()
    ]);

    return res.status(200).json({
      message: "Status Changed successfully.",
      success: true,
      connection,
    });

  } catch (error) {
    console.error("Error in acceptInvite:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};


const getInvitation = async (req, res) => {
    try {
        

     const connections = await Connection.find({receiver:req.userId}).populate({
        path:'sender',
        select:"fullName profilePhoto headline"
     })
     return res.status(200).json(connections)

    } catch (error) {
        console.error("Error in sendInvite:", error);
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again later.",
        });
    }
};




module.exports = {
    sendInvite,
    changeStatus,
    getInvitation
};
