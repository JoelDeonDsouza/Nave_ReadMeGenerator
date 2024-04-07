import {
  AiFillCodeSandboxCircle,
  AiFillEdit,
  AiFillMeh,
  AiFillGithub,
} from "react-icons/ai";

export const templates = [
  {
    id: 1,
    name: "Basic",
    icon: AiFillCodeSandboxCircle,
    content: `# Project Name
  
  ## Description
  
  [Description about the project]

  ![App Screenshot](https://i.ibb.co/7rNWTkp/not-found.jpg)

  ## Installation

  \`\`\`bash
  git clone https://link-to-project
  \`\`\`
  
  \`\`\`bash
  npm install
  \`\`\`
  
  ## Usage
  
  To start the server, run:
  
  \`\`\`bash
  npm start
  \`\`\`
  `,
  },
  {
    id: 2,
    name: "Editable",
    icon: AiFillEdit,
    content: `# 🚀 Start editing`,
  },
  {
    id: 3,
    name: "Portfolio",
    icon: AiFillMeh,
    content: `# [Your Name]'s Portfolio
  
  ## Welcome to my portfolio!

  ## Contact Information

  Feel free to reach out to me!

  - **Email:** [Your Email Address]

  - **LinkedIn:** [Your LinkedIn Profile]

  - **Personal Website:** [Your Website]`,
  },
  {
    id: 4,
    name: "Repository",
    icon: AiFillGithub,
    content: `# Project Name
  
## Description
  
  [Description about the project]

![App Screenshot](https://i.ibb.co/P4qryjv/not-found-2384304-1280.jpg)

## Tech Stack

  **Client:** [Frameworks]
  
  **Server:** [Programming Language]
  
## Installation

  \`\`\`bash
  git clone https://link-to-project
  \`\`\`
  
  \`\`\`bash
  npm install
  \`\`\`
  
  ## Usage
  
  To start the server, run:
  
\`\`\`bash
  npm start
\`\`\`

## API Endpoints
  
  - \`GET /api/users\`: Get all users
  - \`GET /api/users/:id\`: Get user by ID
  - \`POST /api/users\`: Create a new user
  - \`PUT /api/users/:id\`: Update user by ID
  - \`DELETE /api/users/:id\`: Delete user by ID
  `,
  },
];
