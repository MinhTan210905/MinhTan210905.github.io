/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

/* seo */
const seo = {
  title: "Bùi Minh Tân | Portfolio",
  description: "Portfolio cá nhân của Bùi Minh Tân - Sinh viên Song ngành CNTT & Sư phạm Tin học HCMUE.",
  og: {
    title: "Bùi Minh Tân Portfolio",
    type: "website",
    url: "https://minhtan210905.github.io/"
  }
};

/* Greeting */
const greeting = {
  username: "MinhTan210905",
  title: "Xin chào, mình là Bùi Minh Tân",
  subTitle:
    "AI EdTech Architect & Fullstack Developer. Mình đam mê sử dụng công nghệ Web (React, Node.js) và Trí tuệ Nhân tạo (Generative AI) để kiến tạo các nền tảng giáo dục thông minh, cá nhân hóa trải nghiệm học tập.",
  resumeLink: "",
  displayGreeting: true
};

/* Social Media Links */
const socialMediaLinks = {
  github: "https://github.com/MinhTan210905",
  linkedin: "https://linkedin.com/in/tan-minh-lm10",
  gmail: "tan210905@gmail.com",
  display: true
};

/* Skills Section */
const skillsSection = {
  title: "What I do",
  subTitle: "KẾT HỢP CÔNG NGHỆ THÔNG TIN VÀ SƯ PHẠM ĐỂ TẠO RA GIÁ TRỊ GIÁO DỤC",
  skills: [
    emoji(
      "⚡ Xây dựng ứng dụng Fullstack Web với ReactJS, Node.js, Express và PHP CodeIgniter."
    ),
    emoji(
      "⚡ Tích hợp Trí tuệ nhân tạo (Generative AI, LLMs, NLP) vào nền tảng EdTech (RAG, Gemini API)."
    ),
    emoji(
      "⚡ Tối ưu hóa quy trình quản lý giáo dục thông qua các nền tảng Low-code/No-code (Mendix, AppSheet)."
    )
  ],
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true
};

/* Education Section */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Trường Đại học Sư phạm TP. Hồ Chí Minh (HCMUE)",
      logo: "",
      subHeader:
        "Song ngành: Cử nhân Công nghệ Thông tin & Cử nhân Sư phạm Tin học",
      duration: "2023 - Nay",
      desc: "Tham gia NCKH cấp khoa. Áp dụng tư duy Creative Technologist để giải quyết bài toán giáo dục."
    }
  ]
};

/* Projects Section (mapped to bigProjects) */
const bigProjects = {
  title: "Dự án Nổi bật",
  subtitle: "MỘT SỐ DỰ ÁN TIÊU BIỂU MÀ MÌNH ĐÃ VÀ ĐANG PHÁT TRIỂN",
  projects: [
    {
      projectName: "Khám Phá TP.HCM (Thành phố em yêu)",
      projectDesc:
        "Website đa phương tiện tương tác hỗ trợ học sinh tiểu học (NCKH #328). Tích hợp chatbot AI thông minh. Công nghệ: ReactJS, Node.js, Express, MySQL, Gemini API",
      footerLink: []
    },
    {
      projectName: "No-code Attendance App",
      projectDesc:
        "Ứng dụng điểm danh lớp học. Đã xuất bản bài báo khoa học trên TNU Journal of Science and Technology. Công nghệ: AppSheet, Google Sheets",
      footerLink: []
    },
    {
      projectName: "EV Routing System",
      projectDesc: "Hệ thống tìm đường trạm sạc xe điện tối ưu. Công nghệ: Python, Streamlit, A*/Dijkstra",
      footerLink: []
    },
    {
      projectName: "Discrete Math Chatbot",
      projectDesc:
        "Chatbot AI (NLP) hỗ trợ sinh viên giải đáp kiến thức môn Toán rời rạc. Công nghệ: Python, NLP",
      footerLink: []
    }
  ],
  display: true
};

/* Achievement Section (mapped to certifications) */
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Thành tích, chứng chỉ và những cột mốc đáng nhớ trong hành trình học tập.",
  achievementsCards: [
    {
      title: "Mendix Rapid Developer Certification",
      subtitle: "Mendix Academy",
      image: "",
      footerLink: []
    },
    {
      title: "Learning Microsoft 365 Copilot for Work (2024)",
      subtitle: "LinkedIn Learning",
      image: "",
      footerLink: []
    },
    {
      title: "Introduction to Large Language Models",
      subtitle: "Google Cloud",
      image: "",
      footerLink: []
    },
    {
      title: "Introduction to Generative AI",
      subtitle: "Google Cloud",
      image: "",
      footerLink: []
    }
  ],
  display: true
};

/* Contact Section */
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Kết nối để cùng thảo luận về AI, EdTech và xây dựng các nền tảng giáo dục đột phá!",
  number: "0394952938",
  email_address: "tan210905@gmail.com"
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  display: false
};

const workExperiences = {
  display: false,
  experience: []
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

const blogSection = {
  display: false,
  blogs: []
};

const talkSection = {
  display: false,
  talks: []
};

const podcastSection = {
  display: false,
  podcast: []
};

const resumeSection = {
  display: false,
  title: "Resume",
  subtitle: "Feel free to download my resume"
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  seo,
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
