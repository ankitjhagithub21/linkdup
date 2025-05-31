# 🔗 LinkedUp

LinkedUp is a full-stack LinkedIn clone built with **React.js**, **Node.js**, and modern tools/libraries. It replicates core features of LinkedIn, enabling users to connect, share posts, and interact socially with other users.

## 🚀 Tech Stack

### 💻 Frontend
- **React.js**
- **Tailwind CSS**
- **React Router DOM**
- **React Redux**
- **Zod** (form validation)
- **useContext** (state management)
- **Socket.IO Client**

### 🛠 Backend
- **Node.js**
- **Express.js**
- **Socket.IO**
- **JWT (jsonwebtoken)** (authentication)
- **Cookie-parser**
- **Multer** (file uploads)
- **Cloudinary** (image storage)

---

## ✨ Features

### 👤 Authentication & Authorization
- User **registration** and **login** with secure JWT-based authentication
- Protected routes using middleware
- Cookie-based session handling

### 🧑‍💼 Profile Management
- Edit profile:
  - Profile picture
  - Cover image
  - Name
  - About section

### 🤝 Connections
- **Send invites** to connect with other users
- **Accept/Reject** invites
- Real-time **invite notifications** via Socket.IO

### 📝 Posts & Interaction
- Upload new posts (with text & images)
- Like others’ posts
- Comment on posts
- Real-time updates on new posts and interactions

### 📡 Real-Time Features
- Live updates for:
  - New invites
  - New likes/comments on posts
  - Accept/reject status of invites

---

## 📁 Project Structure (Simplified)

```
linkedup/
├── client/               # React Frontend
│   ├── components/
│   ├── pages/
│   ├── redux/
│   └── ...
├── server/               # Express Backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── ...
```

---

## 🖼️ Screenshots
![image](https://github.com/user-attachments/assets/aecedb67-a650-4879-9237-09efe27476a1)

![image](https://github.com/user-attachments/assets/b81d48aa-85de-421d-bd63-66e8a19129e7)

![image](https://github.com/user-attachments/assets/60cf7d07-6aba-4bbb-849a-82b23bf5c0ed)

![image](https://github.com/user-attachments/assets/5138192c-89cd-43a2-b98b-d1382c6ceca4)

![image](https://github.com/user-attachments/assets/c3aca731-bc97-4efd-8a47-70f80077f786)


## 🌐 Deployment

You can deploy the app using platforms like:
- **Frontend**: Vercel / Netlify
- **Backend**: Render / Railway / Hostinger / Heroku
- **Database**: MongoDB Atlas
- **Media**: Cloudinary

---

## 🛆 Installation & Usage

1. **Clone the repository**

```bash
git clone https://github.com/your-username/linkedup.git
cd linkedup
```

2. **Set up environment variables**

Create `.env` files in `client/` and `server/` directories for storing API keys, DB URIs, and Cloudinary configs.

3. **Install dependencies**

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

4. **Run the app**

```bash
# In /server
npm run dev

# In /client (separate terminal)
npm run dev
```

---

## 🧪 Future Enhancements
- Real-time chat system
- Notifications tab
- Search users and posts
- Share post functionality


