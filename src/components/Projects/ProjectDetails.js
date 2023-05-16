import Img1 from "../../assets/bg.png";
import Img2 from "../../assets/ytpd.png";
import Img3 from "../../assets/pt.png";

export const ProjectDetails = [
  {
    title: "Brain Games",
    content:
      "A collection of games within a web application that aims to evaluate a user's memory, vocabulary, as well as their response and reflex time.",
    githubLink: "https://github.com/shm-dsgn/brain-games",
    liveLink: "https://shm-brain-games.netlify.app/",
    photo: Img1,
    tags: ["reactjs", "firebase-auth", "firestore", "react-router", "react-hooks"],
  },
  {
    title: "YT Playlist Duration Calculator",
    content:
      "An extension to calculate & shows the total duration of the YouTube playlist in the popup of the extension.",
    githubLink: "https://github.com/shm-dsgn/yt-playlist-duration",
    liveLink:
      "https://chrome.google.com/webstore/detail/youtube-playlist-duration/bpojpijaddmjkblcbkhnhhgjecmfmgil",
    photo: Img2,
    tags: [
      "chrome",
      "youtube-playlist",
      "javascript",
      "manifestv3",
      "extension",
    ],
  },
  {
    title: "My Portfolio Website",
    content:
      "My portfolio website to showcase my experience, works and skills.",
    githubLink: "",
    liveLink: "",
    photo: Img3,
    tags: ["reactjs", "react-router"],
  },
];
