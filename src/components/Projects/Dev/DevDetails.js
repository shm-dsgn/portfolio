import Img1 from "../../../assets/bg.png";
import Img2 from "../../../assets/ytpd.png";
import Img3 from "../../../assets/pt.png";
import Img4 from "../../../assets/ba.png";

export const DevDetails = [
  {
    title: "Blog App",
    content:
      "A simple blog app that lets users create blog posts with images, view them, edit them and delete them (MERN Stack)",
    githubLink: "https://github.com/shm-dsgn/blogApp",
    liveLink: "https://shm-blog-app.onrender.com/",
    photo: Img4,
    tags: [
      "mongodb",
      "expressjs",
      "reactjs",
      "nodejs",
      "react-router",
      "aws-s3",
      "multer",
      "jwt",
      "bcrypt",
      "react-quill",
      "tailwindcss",
    ],
  },
  {
    title: "Brain Games",
    content:
      "A collection of games within a web application that aims to evaluate a user's memory, vocabulary, as well as their response and reflex time.",
    githubLink: "https://github.com/shm-dsgn/brain-games",
    liveLink: "https://shm-brain-games.netlify.app/",
    photo: Img1,
    tags: [
      "reactjs",
      "react-router",
      "react-hooks",
      "firebase-auth",
      "firestore",
    ],
  },
  {
    title: "YT Playlist Duration Calculator",
    content:
      "An extension to calculate & shows the total duration of the YouTube playlist in the popup of the extension.",
    githubLink: "https://github.com/shm-dsgn/yt-playlist-duration",
    liveLink:
      "https://chrome.google.com/webstore/detail/youtube-playlist-duration/bpojpijaddmjkblcbkhnhhgjecmfmgil",
    photo: Img2,
    tags: ["chrome-extension", "youtube-playlist", "javascript", "manifestv3"],
  },
  {
    title: "My Portfolio Website",
    content:
      "My portfolio website to showcase my experience, works and skills.",
    githubLink: "https://github.com/shm-dsgn/portfolio",
    liveLink: "https://shm-dsgn.me/",
    photo: Img3,
    tags: ["reactjs", "react-router"],
  },
];
