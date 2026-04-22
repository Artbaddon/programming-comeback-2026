const fs = require('fs');

const startDate = new Date(2026, 3, 21); // April 21, 2026
const endDate = new Date(2026, 11, 31); // Dec 31, 2026

const richData = {
  "Promises & Async/Await": {
    pq: ["What is callback hell and how do Promises solve it?", "What is the difference between .then() and await?"],
    ct: ["Promise states (Pending, Fulfilled, Rejected)", "Chaining .then() and .catch()", "The async keyword and returning Promises", "Using try/catch with async/await"],
    res: ["[JS.info: Promises](https://javascript.info/promise-basics)", "[MDN: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)"],
    ex: ["Convert a callback-based delay into a Promise.", "Chain two async operations.", "Refactor the chain to use async/await."],
    starterCode: `const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];\nconst posts = [{userId: 1, title: 'Hello'}];\n\n// 1. Create a function delay(ms) that returns a Promise\n// 2. Create getSessionUser() that simulates an API call (resolves users[0] after 1s)\n// 3. Create getUserPosts(userId) that simulates fetching posts\n\nasync function init() {\n  // TODO: Orchestrate the fetching here using await\n}`,
    rec: ["Explain the 3 states of a Promise.", "What happens if you forget the 'await' keyword?"]
  },
  "Fetch API & REST": {
    pq: ["What is a RESTful API?", "How does the Fetch API work?"],
    ct: ["The window.fetch() method", "Handling Response objects (res.json())", "HTTP Methods (GET, POST, PUT, DELETE)", "Sending Headers and JSON bodies"],
    res: ["[JS.info: Fetch](https://javascript.info/fetch)", "[MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)"],
    ex: ["Fetch data from JSONPlaceholder.", "Create a new post using POST.", "Handle network errors."],
    starterCode: `const API_URL = 'https://jsonplaceholder.typicode.com/posts';\n\n// TODO: 1. Write an async function that fetches posts from API_URL and logs the first 3.\n// TODO: 2. Write a function that creates a new post { title: 'Look!', body: 'A post', userId: 1 }\n// Ensure you set the correct 'method' and 'headers' (Content-Type: application/json).\n`,
    rec: ["Why does fetch() not reject on 404?", "How do you parse a JSON response?"]
  },
  "DOM Manipulation": {
    pq: ["What is the DOM?", "How do you select and modify an element?"],
    ct: ["document.querySelector", "textContent vs innerHTML", "classList (add, remove, toggle)", "Creating and appending elements"],
    res: ["[JS.info: DOM Tree](https://javascript.info/dom-nodes)", "[MDN: Manipulating the DOM](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)"],
    ex: ["Select a specific element.", "Create a list dynamically.", "Toggle a CSS class."],
    starterCode: `// Assume this HTML exists:\n// <div id="app">\n//   <h1 id="title">Welcome</h1>\n//   <ul id="list"></ul>\n// </div>\n\nconst itemsData = ['Apple', 'Banana', 'Cherry'];\n\n// TODO: 1. Select the #title and change its text to 'Shopping List'\n// TODO: 2. Loop through itemsData, createElement('li'), set text, and append to #list\n// TODO: 3. Add a class 'highlight' to the #app div\n`,
    rec: ["What is the difference between innerHTML and textContent?", "Why use documentFragment?"]
  },
  "Events & Bubbling": {
    pq: ["How does the browser handle user interactions?", "What is Event Bubbling?"],
    ct: ["addEventListener()", "The Event object (e.target, e.preventDefault())", "Event Bubbling vs Capturing", "Event Delegation"],
    res: ["[JS.info: Intro to Events](https://javascript.info/events)", "[JS.info: Event Delegation](https://javascript.info/event-delegation)"],
    ex: ["Attach a click listener.", "Use Event Delegation on a parent.", "Stop an event from bubbling."],
    starterCode: `// Assume this HTML:\n// <ul id="nav">\n//   <li><button data-id="1">Home</button></li>\n//   <li><button data-id="2">About</button></li>\n// </ul>\n\n// TODO: 1. Attach ONE event listener to #nav (Event Delegation)\n// TODO: 2. Inside the listener, check if e.target is a button.\n// TODO: 3. Log the 'data-id' attribute of the clicked button.\n`,
    rec: ["Explain Event Delegation.", "What does e.stopPropagation() do?"]
  },
  "Web Storage (Local/Session)": {
    pq: ["How can we save data in the browser?", "What is the difference between Local and Session storage?"],
    ct: ["localStorage vs sessionStorage", "setItem(), getItem(), removeItem()", "JSON.stringify() and JSON.parse() serialization"],
    res: ["[JS.info: LocalStorage](https://javascript.info/localstorage)", "[MDN: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)"],
    ex: ["Save complex data to localStorage.", "Retrieve and parse the data.", "Clear specific keys."],
    starterCode: `const userSettings = {\n  theme: 'dark',\n  fontSize: 16,\n  isLoggedIn: true\n};\n\n// TODO: 1. Save userSettings to localStorage under key 'appSettings'\n// TODO: 2. Retrieve 'appSettings' and parse it back to a JS object\n// TODO: 3. Log the theme value\n// TODO: 4. Clear the 'appSettings' from storage\n`,
    rec: ["Why must we stringify objects before saving?", "When does sessionStorage expire?"]
  },
  "React Components & JSX": {
    pq: ["What is JSX?", "How do functional components work?"],
    ct: ["Function Components", "JSX Syntax Rules", "Returning multiple elements (Fragments)", "Embedding JS expressions"],
    res: ["[React.dev: Describing UI](https://react.dev/learn/describing-the-ui)", "[React.dev: Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)"],
    ex: ["Create a Profile component.", "Pass variables into JSX.", "Use fragments."],
    starterCode: `// Assume we are in a React file (e.g., App.jsx)\n\nconst user = {\n  firstName: 'Jane',\n  lastName: 'Doe',\n  imageUrl: 'https://placekitten.com/100/100'\n};\n\n// TODO: 1. Create a <Profile /> component that renders the user's full name in an <h1>\n// TODO: 2. Render an <img> tag using user.imageUrl. (Remember 'className' vs 'class')\n// TODO: 3. Export the component as default.\nexport default function App() {\n  return (\n    // TODO: Render Profile here\n  );\n}`,
    rec: ["Why must JSX return a single parent element?", "How do you apply CSS classes in JSX?"]
  },
  "Props & State (useState)": {
    pq: ["What is the difference between Props and State?", "How does useState work?"],
    ct: ["Passing Props down the tree", "Destructuring Props", "The useState hook: [state, setState]", "State immutability"],
    res: ["[React.dev: State, A Component's Memory](https://react.dev/learn/state-a-components-memory)", "[React.dev: Passing Props](https://react.dev/learn/passing-props-to-a-component)"],
    ex: ["Build a Counter component.", "Pass props from Parent to Child.", "Handle a controlled input."],
    starterCode: `import { useState } from 'react';\n\nfunction Greeting({ name }) {\n  // TODO: Render an h1 saying "Hello, {name}"\n}\n\nexport default function App() {\n  // TODO: Initialize a state variable 'username' with useState('')\n  // TODO: Create an <input> that updates 'username' onChange\n  // TODO: Pass 'username' as a prop to the <Greeting /> component\n\n  return (\n    <div>\n       {/* Render input and Greeting here */}\n    </div>\n  );\n}`,
    rec: ["Explain why state updates are asynchronous.", "Why shouldn't you mutate state directly?"]
  }
};

// Advanced fallback generator for unmapped topics
function generateDynamicContent(topicName) {
  const genericCode = `// Starter Data Template for: ${topicName}\nconst mockData = [\n  { id: 1, name: "Sample A", status: "active" },\n  { id: 2, name: "Sample B", status: "pending" }\n];\n\n// TODO: 1. Setup the core configuration or function for ${topicName}.\n// TODO: 2. Process 'mockData' using the concepts of ${topicName}.\n// TODO: 3. Add an edge-case handler (e.g. empty array, null data).\n\nfunction processTopic(data) {\n  // Your implementation here\n  return data;\n}\n`;

  return {
    pq: [`What architectural problem does ${topicName} solve?`, `How does ${topicName} interact with the rest of the stack?`],
    ct: [`Core principles of ${topicName}`, `Key syntax, configurations, and API structures`, `Common use cases and real-world patterns`, `Identifying and avoiding anti-patterns`],
    res: [`[Roadmap.sh Path](https://roadmap.sh/fullstack)`, `[Official Docs Search](https://developer.mozilla.org/en-US/search?q=${encodeURIComponent(topicName)})`, `[Google Search for Best Practices](https://www.google.com/search?q=${encodeURIComponent(topicName + ' best practices')})`],
    ex: [`Set up a basic working architecture for ${topicName}.`, `Integrate the provided mock data.`, `Test failure points and boundary limits.`],
    starterCode: genericCode,
    rec: [`Explain the core mechanism of ${topicName} in one simple sentence.`, `What is the most vulnerable or tricky part of implementing ${topicName}?`, `What alternative would you use if ${topicName} did not exist?`]
  };
}

const topics = [
  { phase: 'Phase 1: Advanced JS & DOM', topics: ['HTTP & DNS', 'Promises & Async/Await', 'Fetch API & REST', 'DOM Manipulation', 'Events & Bubbling', 'Web Storage (Local/Session)', 'Modules (ES6)'] },
  { phase: 'Phase 2: React Ecosystem', topics: ['React Components & JSX', 'Props & State (useState)', 'Component Lifecycle & useEffect', 'React Router v6', 'Context API', 'Zustand / Redux', 'Advanced Hooks (useMemo, useCallback)', 'Tailwind CSS Integration'] },
  { phase: 'Phase 3: Backend Fundamentals Node/Express', topics: ['Node.js Core (fs, path, http)', 'Express.js Setup & Routing', 'Middlewares & Error Handling', 'REST API Design', 'Authentication (JWT, Cookies)', 'Web Security (CORS, XSS, CSRF)', 'MVC Architecture'] },
  { phase: 'Phase 4: Databases PostgreSQL & MongoDB', topics: ['SQL Basics & PostgreSQL', 'Advanced SQL Queries & Joins', 'Prisma ORM', 'NoSQL Basics & MongoDB', 'Mongoose ODM', 'Database Modeling & Relationships', 'Transactions & Indexing'] },
  { phase: 'Phase 5: Full-Stack Integration & DevOps', topics: ['Connecting React & Express', 'Redis Caching', 'Docker Fundamentals', 'Docker Compose', 'CI/CD with GitHub Actions', 'Deployment (AWS / Vercel)', 'System Design Basics', 'LeetCode & Interview Prep'] }
];

let markdown = `# 🚀 THE COMPLETE ESCAPE PLAN 2026 v4 (Data-Driven Sessions)
**Tuesday, April 21, 2026 → Thursday, December 31, 2026**

---

`;

let currentDate = new Date(startDate.getTime()); // Copy
let currentDay = 11;
let weekNumber = 2; // Roughly week 2 since day 11

while (currentDate <= endDate) {
  const dayOfWeek = currentDate.getDay();
  const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
  const sessions = isWeekend ? 4 : 2;
  
  const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const monthName = currentDate.toLocaleDateString('en-US', { month: 'short' });
  const dateNum = currentDate.getDate();
  
  if (dayOfWeek === 1 || currentDay === 11) {
    markdown += `\n## ────────────────────────────────────────\n`;
    markdown += `## 📅 WEEK ${weekNumber} (${monthName} ${dateNum})\n`;
    markdown += `## ────────────────────────────────────────\n\n`;
    if (dayOfWeek === 1) weekNumber++;
  }

  const phaseIdx = Math.min(Math.floor((currentDay - 11) / 51), topics.length - 1);
  const topicList = topics[phaseIdx].topics;
  const topicName = topicList[currentDay % topicList.length];
  
  const content = richData[topicName] || generateDynamicContent(topicName);

  markdown += `### ${dayName}, ${monthName} ${dateNum} - Day ${currentDay}\n`;
  markdown += `**Topic:** ${topicName} (${topics[phaseIdx].phase})\n`;
  markdown += `**Sessions:** ${sessions} (Total: ${sessions * 50} min)\n\n`;

  for (let s = 1; s <= sessions; s++) {
    markdown += `#### Session ${s}: ${topicName} (50 min)\n`;
    markdown += `**Pre-Session Questions (Answer BEFORE coding):**\n`;
    content.pq.forEach((q, i) => markdown += `${i + 1}. ${q}\n`);
    markdown += `\n**Core Topics:**\n`;
    content.ct.forEach(t => markdown += `- ${t}\n`);
    markdown += `\n**Resources:**\n`;
    content.res.forEach(r => markdown += `- ${r}\n`);
    
    markdown += `\n**Code & Notes (Write during session):**\n\n**What it is:**\n[Explain in your own words]\n\n**Why it exists:**\n[The problem it solves]\n\n**How it works:**\n[Mechanism/process]\n\n`;

    markdown += `**Daily Exercises ✅:**\n`;
    content.ex.forEach((e, i) => markdown += `${i + 1}. [ ] **Exercise ${i + 1}:** ${e}\n`);
    
    markdown += `\n**Exercise Starter Code / Data:**\n\`\`\`javascript\n${content.starterCode}\n\`\`\`\n`;
    
    markdown += `\n**My Solution Code / Notes:**\n\`\`\`javascript\n// Paste your completed solution or observations here\n\`\`\`\n`;

    markdown += `\n**Post-Session Recall (CLOSE EVERYTHING FIRST!):**\n`;
    content.rec.forEach((r, i) => markdown += `${i + 1}. **${r}**\n   - [Your answer from memory]\n`);
    
    markdown += `\n---\n\n`;
  }
  
  markdown += `**Commit:** \`git commit -m "Day ${currentDay}: ${topicName}"\`\n\n---\n\n`;
  
  currentDate.setDate(currentDate.getDate() + 1);
  currentDay++;
}

fs.writeFileSync('escape-plan-2026-v4.md', markdown);
console.log('Successfully generated the Data-Driven Syllabus in escape-plan-2026-v4.md!');
