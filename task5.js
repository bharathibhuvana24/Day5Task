const resume = {
    "name": "Bagya Lakshmi",
    "summary": "Experienced software developer with a strong background in full-stack development, specializing in MERN stack. Passionate about building scalable web applications and improving user experience.",
    "contact": {
      "email": "bharathibhuvana24@gmail.com",
      "phone": "+1-234-567-890",
      "address": "234, dfsdf, vellore"
    },
    "skills": [
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "HTML",
      "CSS",
      "RESTful APIs",
      "Git"
    ],
    "education": [
      {
        "degree": "Bachelor of Electronic and Communication Engineering",
        "institution": "Anna University",
        "graduationYear": 2017
      }
    ],
    "projects": [
      {
        "name": "Camera Rental Platform",
        "description": "Developed a full-featured camera rental platform using MERN stack, allowing users to rent cameras and accessories online.",
        "technologies": ["React", "Node.js", "Express.js", "MongoDB"]
      },
      {
        "name": "E-commerce Website",
        "description": "Built an e-commerce website with a custom shopping cart and payment gateway integration.",
        "technologies": ["React", "Node.js", "Express.js", "MongoDB"]
      }
    ],
    "certifications": [
      {
        "name": "Certified JavaScript Developer",
        "issuingOrganization": "Tech Certification Board",
        "issueDate": "2021-05"
      }
    ],
    "languages": [
      "English",
      "Tamil"
    ]
  };
  
  // Using for loop to iterate over skills
  for (let i = 0; i < resume.skills.length; i++) {
    console.log("Skill:");
    console.log(resume.skills[i]);
  }

  // Using for...in loop to iterate over contact details
  for (let key in resume.contact) {
    console.log(` ${key}:`);
    console.log(` ${key}: ${resume.contact[key]} `);
  }

  // Using forEach loop to iterate over projects array
    resume.projects.forEach(project => {
    console.log("Project:");
    console.log(`Project Name: ${project.name}, Description: ${project.description}`);
  });

  // Using for...of loop to iterate over experience array
for (let projects of resume.projects) {
    console.log("Project:");
    console.log(`Project Name: ${projects.name}, Description: ${projects.description}`);
  }
  
  
  