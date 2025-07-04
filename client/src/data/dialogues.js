// Dialogue data for all NPCs in the portfolio game
const dialogues = {
    introduction: [
        "Hello! Welcome to my interactive portfolio!",
        "I'm Jake, a passionate software developer with a love for creating engaging digital experiences.",
        "I've been coding for several years and specialize in web development, game development, and interactive applications.",
        "My journey started with curiosity about how websites work, and has grown into a deep passion for creating solutions that make people's lives easier.",
        "Feel free to explore the town and talk to the NPCs to learn more about my background, skills, and projects!",
        "Each building contains someone with different information about my professional journey."
    ],
    
    reference1: [
        "Greetings! I'm here to share a professional reference for Jake.",
        "I worked with Jake on several web development projects over the past two years.",
        "Jake consistently delivered high-quality code and showed excellent problem-solving skills.",
        "His ability to work with modern frameworks like React, Vue, and Angular is impressive.",
        "Jake also has a great eye for user experience and always considers the end user in his development process.",
        "I would highly recommend Jake for any software development position. He's reliable, skilled, and a pleasure to work with.",
        "His technical skills are matched by his communication abilities and teamwork."
    ],
    
    reference2: [
        "Hello there! I'm another professional reference for Jake.",
        "I had the pleasure of working with Jake on a complex full-stack application.",
        "Jake's expertise in backend development using Node.js and Python is outstanding.",
        "He has a deep understanding of database design and API development.",
        "What impressed me most was Jake's ability to debug complex issues and optimize performance.",
        "Jake is also great at mentoring junior developers and sharing knowledge with the team.",
        "Any company would be lucky to have Jake on their development team!"
    ],
    
    experience: [
        "Welcome! Let me tell you about Jake's work experience.",
        "Jake has 4+ years of professional software development experience.",
        "He started as a Junior Developer at TechStart Solutions, where he worked on e-commerce platforms.",
        "After 18 months, he was promoted to Mid-Level Developer and took on more complex projects.",
        "Jake then moved to InnovateTech as a Senior Developer, leading a team of 5 developers.",
        "His recent role at CloudSoft involved architecting scalable web applications and microservices.",
        "Jake has experience with agile methodologies, CI/CD pipelines, and cloud deployment.",
        "He's worked on projects ranging from small business websites to enterprise-level applications."
    ],
    
    organizations: [
        "Greetings! I'm here to share Jake's involvement in professional organizations.",
        "Jake is an active member of the local Software Developers Association.",
        "He regularly attends meetups and conferences to stay current with technology trends.",
        "Jake has volunteered as a mentor for Code for Good, teaching programming to underserved communities.",
        "He's also a contributor to several open-source projects on GitHub.",
        "Jake participated in the annual Hackathon for Social Good, where his team won second place.",
        "He's a member of the IEEE Computer Society and the Association for Computing Machinery (ACM).",
        "Jake believes in giving back to the developer community through knowledge sharing and mentorship."
    ],
    
    certificates: [
        "Hello! Let me share Jake's educational background and certifications.",
        "Jake holds a Bachelor's degree in Computer Science from State University.",
        "He graduated Magna Cum Laude with a 3.8 GPA and was on the Dean's List for 3 semesters.",
        "Jake has earned several industry certifications including AWS Certified Developer Associate.",
        "He's also certified in Google Cloud Platform and Microsoft Azure fundamentals.",
        "Jake completed advanced courses in React, Node.js, and Python through various online platforms.",
        "He holds certifications in Agile Project Management and Scrum Master.",
        "Jake regularly updates his skills through continuous learning and professional development courses."
    ],
    
    projects: [
        "Welcome to the projects showcase! Let me tell you about Jake's notable projects.",
        "Project 1: E-commerce Platform - A full-stack online store with React frontend and Node.js backend.",
        "This project handles 10,000+ daily users and includes payment integration, inventory management, and analytics.",
        "Project 2: Task Management App - A collaborative project management tool built with Vue.js and Firebase.",
        "The app features real-time collaboration, file sharing, and automated workflow management.",
        "Project 3: IoT Dashboard - A React-based dashboard for monitoring and controlling IoT devices.",
        "This project involved WebSocket connections, real-time data visualization, and mobile responsiveness.",
        "Project 4: Social Media Analytics Tool - A Python-based application for analyzing social media trends.",
        "Jake also created this interactive portfolio game using Phaser 3 to showcase his skills in a unique way!",
        "All projects demonstrate Jake's ability to work with modern technologies and deliver user-focused solutions."
    ],
    
    final: [
        "Congratulations! You've explored Jake's entire portfolio.",
        "Thank you for taking the time to learn about Jake's background, skills, and experience.",
        "Jake is passionate about creating innovative solutions and would love to contribute to your team.",
        "If you're interested in discussing opportunities or learning more, please don't hesitate to reach out!",
        "You can find Jake's contact information and links to his work on his traditional portfolio website.",
        "This interactive experience was just one way to showcase creativity and technical skills.",
        "Thank you for playing, and I hope you enjoyed this unique approach to a professional portfolio!",
        "The game will now return to the beginning. Feel free to explore again or share with others!"
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = dialogues;
} else {
    window.dialogues = dialogues;
}
