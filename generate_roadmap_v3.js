const fs = require('fs');

const startDate = new Date(2026, 3, 21); // April 21, 2026
const endDate = new Date(2026, 11, 31); // Dec 31, 2026

// Rich content database to deeply populate the templates
const richData = {
  "Promises & Async/Await": {
    pq: ["What is callback hell and how do Promises solve it?", "What is the difference between .then() and await?"],
    ct: ["Promise states (Pending, Fulfilled, Rejected)", "Chaining .then() and .catch()", "The async keyword and returning Promises", "Using try/catch with async/await", "Promise.all() for running tasks in parallel"],
    res: ["[JS.info: Promises](https://javascript.info/promise-basics)", "[MDN: Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)"],
    ex: ["Convert a callback-based setTimeout into a reusable Promise-based delay() function.", "Chain two API calls using .then() where the second depends on the first.", "Rewrite the exact same logic using async/await and try/catch block.", "BONUS: Trigger 3 promises simultaneously using Promise.all()."],
    rec: ["Explain the 3 states of a Promise.", "What happens if you forget the 'await' keyword?", "How does Promise.all() fail?"]
  },
  "Fetch API & REST": {
    pq: ["What is a RESTful API?", "How does the Fetch API differ from XMLHttpRequest?"],
    ct: ["The window.fetch() method", "Handling Response objects (res.json(), res.text())", "HTTP Methods (GET, POST, PUT, DELETE)", "Sending Headers and JSON bodies", "Handling network errors vs HTTP errors"],
    res: ["[MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)", "[Roadmap.sh: APIs](https://roadmap.sh/apis)"],
    ex: ["Fetch data from JSONPlaceholder (GET) and log the titles.", "Create a new post using fetch() with method: 'POST' and a JSON payload.", "Write error handling that specifically catches 404 vs 500 status codes."],
    rec: ["Why does fetch() not reject on HTTP error statuses (like 404)?", "How do you parse a JSON response?", "What is the second argument of fetch() used for?"]
  },
  "DOM Manipulation": {
    pq: ["What exactly is the Document Object Model?", "How do you select an element vs multiple elements?"],
    ct: ["document.querySelector / querySelectorAll", "Updating textContent vs innerHTML", "Changing styles and classList (add, remove, toggle)", "Creating and appending elements (createElement, appendChild)", "Document fragments for performance"],
    res: ["[JS.info: Document](https://javascript.info/document)", "[MDN: DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)"],
    ex: ["Select a div and change its background color and text based on a variable.", "Create an unordered list <ul> and dynamically append 5 <li> elements using a loop.", "Toggle a 'dark-mode' class on the body when a button is clicked."],
    rec: ["What is the difference between innerHTML and textContent? Which is safer?", "Why use documentFragment?", "How do you target a specific data-attribute?"]
  },
  "Events & Bubbling": {
    pq: ["How does the browser know a button was clicked?", "What is Event Bubbling vs Capturing?"],
    ct: ["addEventListener() and event handlers", "The Event object (e.target, e.preventDefault())", "Event Bubbling (bottom-up propagation)", "Event Capturing (top-down)", "Event Delegation (attaching one listener to a parent)"],
    res: ["[JS.info: Event Bubbling](https://javascript.info/bubbling-and-capturing)", "[MDN: Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)"],
    ex: ["Attach a click listener to a button that logs its dataset value.", "Create a parent <div> with 3 child <button>s. Use Event Delegation to listen to clicks on the parent only.", "Use e.stopPropagation() to stop a child click from reaching the parent."],
    rec: ["Explain Event Delegation and why it saves memory.", "What does e.preventDefault() do on a form?", "Which direction does Bubbling go?"]
  },
  "React Components & JSX": {
    pq: ["Why do we use React instead of Vanilla JS?", "What is JSX and how does it differ from HTML?"],
    ct: ["Function Components vs Class Components", "JSX Syntax Rules (className, closing tags)", "Returning multiple elements (Fragments <> )", "Embedding JS expressions in JSX `{}`"],
    res: ["[React Docs: Describing the UI](https://react.dev/learn/describing-the-ui)", "[Roadmap.sh: React](https://roadmap.sh/react)"],
    ex: ["Initialize a Vite React project. Build a ProfileCard component.", "Pass variables into the JSX to render dynamic text.", "Create a Layout component that wraps {children}."],
    rec: ["Why must JSX return a single parent element?", "How do you apply a CSS class in JSX?", "Why import React from 'react' (historically)?"]
  },
  "Props & State (useState)": {
    pq: ["What is the difference between Props and State?", "Why can't we just use regular variables for state?"],
    ct: ["Passing Props down the tree", "Destructuring Props", "The useState hook: [state, setState]", "State immutability (replacing arrays/objects instead of mutating)", "One-way data flow"],
    res: ["[React Docs: State](https://react.dev/learn/state-a-components-memory)", "[React Docs: Passing Props](https://react.dev/learn/passing-props-to-a-component)"],
    ex: ["Build a Counter component that tracks clicks.", "Create a Parent component that passes a 'user' object as a prop to a Child.", "Build a form input that updates a state variable as the user types (Controlled Component)."],
    rec: ["Explain why state updates are asynchronous.", "Why shouldn't you mutate state directly (e.g., state.count++)?", "Can a child modify its own props?"]
  },
  "Component Lifecycle & useEffect": {
    pq: ["When does a component render?", "How do we run code only on the first render?"],
    ct: ["The rendering cycle (Mount, Update, Unmount)", "The useEffect hook and dependency arrays", "Empty dependency array [] vs populated [val]", "Cleanup functions (return () => {})", "Fetching data inside useEffect"],
    res: ["[React Docs: Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)"],
    ex: ["Fetch data from an API on component mount and save to state.", "Write an effect that logs whenever a specific prop changes.", "Write an effect that sets a setInterval, and critically, a cleanup function that clears it on unmount."],
    rec: ["What happens if you omit the dependency array in useEffect?", "What is the cleanup function used for?", "Can you use Hooks inside conditionals?"]
  },
  "Node.js Core (fs, path, http)": {
    pq: ["What allows JavaScript to run outside the browser?", "What is the difference between synchronous and asynchronous file system operations?"],
    ct: ["V8 Engine & Node architecture", "The CommonJS vs ES Modules debate in Node", "The 'fs' module (fs.readFile, fs.promises)", "The 'path' module for directory routing", "Creating a basic HTTP server without Express"],
    res: ["[Node.js Official Documentation](https://nodejs.org/en/docs/)", "[Roadmap.sh: Backend](https://roadmap.sh/backend)"],
    ex: ["Read a text file asynchronously using fs.promises.readFile.", "Join two paths dynamically using path.join(__dirname).", "Spin up a basic HTTP server that listens on port 3000 and responds with 'Hello World'."],
    rec: ["Why should you avoid fs.readFileSync in a server?", "What is __dirname?", "How does Node.js handle concurrency?"]
  },
  "Express.js Setup & Routing": {
    pq: ["Why use Express instead of Node's built-in HTTP module?", "How does an API know which code to run for a specific URL?"],
    ct: ["Initializing an Express app (app.listen)", "Defining Routes (app.get, app.post)", "Route parameters (req.params) and Queries (req.query)", "Parsing JSON bodies (express.json())", "Sending responses (res.json, res.status)"],
    res: ["[Express.js Routing](https://expressjs.com/en/guide/routing.html)"],
    ex: ["Create a GET route that returns a list of static users.", "Create a GET route that accepts a dynamic user ID: /users/:id.", "Create a POST route that accepts JSON and echoes it back."],
    rec: ["How do you access URL parameters in Express?", "What is the difference between req.params and req.query?", "Which method sends JSON data to the client?"]
  },
  "Authentication (JWT, Cookies)": {
    pq: ["How do APIs verify who is making a request?", "What is the difference between a Session Cookie and a JWT?"],
    ct: ["Stateless Authentication (JWT - JSON Web Tokens)", "Token Structure (Header, Payload, Signature)", "Signing and Verifying tokens using jsonwebtoken", "Storing tokens (HttpOnly Cookies vs LocalStorage)", "Creating restricted/protected middleware"],
    res: ["[JWT.io Introduction](https://jwt.io/introduction)"],
    ex: ["Generate a JWT using the jsonwebtoken library when a user 'logs in'.", "Create an Express middleware function that verifies the token.", "Protect a /dashboard route using your new auth middleware."],
    rec: ["Why shouldn't you put passwords in a JWT payload?", "What happens when a JWT expires?", "Why are HttpOnly cookies safer for storing tokens than localStorage?"]
  }
};

// Fallback generator for topics not explicitly mapped above
function generateDynamicContent(topicName) {
  return {
    pq: [`What fundamental problem does ${topicName} solve?`, `Where does ${topicName} fit into the architecture of modern applications?`],
    ct: [`Core principles of ${topicName}`, `Key syntax, configurations, and structures`, `Common use cases and implementation patterns`, `Debugging and avoiding anti-patterns related to ${topicName}`],
    res: [`[Roadmap.sh Fullstack Path](https://roadmap.sh/fullstack)`, `[Official Documentation for ${topicName} / MDN](https://developer.mozilla.org/en-US/)`],
    ex: [`Set up a basic working instance of ${topicName} in isolation.`, `Push the implementation to its limits to trigger errors and understand the boundaries.`, `Integrate the ${topicName} workflow into your main codebase.`],
    rec: [`Explain the core mechanism of ${topicName} in one simple sentence.`, `What is the most vulnerable or difficult part of implementing ${topicName}?`, `What would you use if ${topicName} didn't exist?`]
  };
}

const topics = [
  { phase: 'Phase 1: Advanced JS & DOM (April - May)', topics: ['HTTP & DNS', 'Promises & Async/Await', 'Fetch API & REST', 'DOM Manipulation', 'Events & Bubbling', 'Web Storage (Local/Session)', 'Modules (ES6)'] },
  { phase: 'Phase 2: React Ecosystem (May - July)', topics: ['React Components & JSX', 'Props & State (useState)', 'Component Lifecycle & useEffect', 'React Router v6', 'Context API', 'Zustand / Redux', 'Advanced Hooks (useMemo, useCallback)', 'Tailwind CSS Integration'] },
  { phase: 'Phase 3: Backend Fundamentals Node/Express (July - August)', topics: ['Node.js Core (fs, path, http)', 'Express.js Setup & Routing', 'Middlewares & Error Handling', 'REST API Design', 'Authentication (JWT, Cookies)', 'Web Security (CORS, XSS, CSRF)', 'MVC Architecture'] },
  { phase: 'Phase 4: Databases PostgreSQL & MongoDB (August - October)', topics: ['SQL Basics & PostgreSQL', 'Advanced SQL Queries & Joins', 'Prisma ORM', 'NoSQL Basics & MongoDB', 'Mongoose ODM', 'Database Modeling & Relationships', 'Transactions & Indexing'] },
  { phase: 'Phase 5: Full-Stack Integration & DevOps (October - December)', topics: ['Connecting React & Express', 'Redis Caching', 'Docker Fundamentals', 'Docker Compose', 'CI/CD with GitHub Actions', 'Deployment (AWS / Vercel)', 'System Design Basics', 'LeetCode & Interview Prep'] }
];

const projects = [
  { start: 40, end: 46, name: 'Portfolio Project 1: Advanced Vanilla JS Dashboard (Async APIs, DOM)' },
  { start: 90, end: 98, name: 'Portfolio Project 2: React E-Commerce Storefront (Router, State, Tailwind)' },
  { start: 145, end: 153, name: 'Portfolio Project 3: Secure REST API (Node, Express, JWT Auth)' },
  { start: 195, end: 205, name: 'Portfolio Project 4: Full-Stack DB Integration (PostgreSQL, Prisma, React)' },
  { start: 240, end: 255, name: 'Portfolio Project 5: CAPSTONE SAAS DEPLOYMENT (Docker, CI/CD, Live AWS/Vercel)' },
];

function getProjectForDay(day) {
  return projects.find(p => day >= p.start && day <= p.end);
}

let markdown = `# 🚀 THE COMPLETE ESCAPE PLAN 2026 v3 (Rich Syllabus)
**Tuesday, April 21, 2026 → Thursday, December 31, 2026**

---

## 📋 Mission Briefing
1. **Focus on depth.** Build muscle memory for modern full-stack workflows.
2. **Projects > Tutorials.** The 5 major projects in this plan are your keys to employment.
3. **Consistency.** 1.5hrs daily, 4hrs weekends.

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
  
  if (dayOfWeek === 1 || currentDay === 11) { // Monday or first day
    markdown += `\n## ────────────────────────────────────────\n`;
    markdown += `## 📅 WEEK ${weekNumber} (${monthName} ${dateNum})\n`;
    markdown += `## ────────────────────────────────────────\n\n`;
    if (dayOfWeek === 1) weekNumber++;
  }

  const activeProject = getProjectForDay(currentDay);
  let topicName = "";
  
  if (activeProject) {
    topicName = `[PROJECT SPRINT] ${activeProject.name}`;
    markdown += `### ${dayName}, ${monthName} ${dateNum} - Day ${currentDay}\n`;
    markdown += `**Topic:** ${topicName}\n`;
    markdown += `**Sessions:** ${sessions} (Total: ${sessions * 50} min)\n\n`;

    for (let s = 1; s <= sessions; s++) {
      markdown += `#### Session ${s}: Architecture & Implementation\n`;
      markdown += `**Pre-Session Questions (Answer BEFORE coding):**\n1. What specific UI component, API route, or function am I building right now?\n2. What is the biggest blocker I anticipate for this part?\n\n`;
      markdown += `**Core Tasks:**\n- Set up project files and environment.\n- Implement core application logic.\n- Debug errors entirely on your own for at least 15 minutes before seeking help.\n\n`;
      markdown += `**Resources:**\n- Your notes from previous weeks\n- Standard Documentation\n\n`;
      markdown += `**Code & Notes (Write during session):**\n\`\`\`javascript\n// Log your critical logic, tricky functions, or API structures here\n\`\`\`\n\n`;
      markdown += `**Post-Session Recall:**\n1. What bug took the longest to fix today, and why?\n2. What is the immediate next step for the following session?\n\n`;
      markdown += `---\n\n`;
    }
  } else {
    // Regular learning day
    const phaseIdx = Math.min(Math.floor((currentDay - 11) / 51), topics.length - 1);
    const topicList = topics[phaseIdx].topics;
    const baseTopicName = topicList[currentDay % topicList.length];
    topicName = baseTopicName;
    
    const content = richData[topicName] || generateDynamicContent(topicName);

    markdown += `### ${dayName}, ${monthName} ${dateNum} - Day ${currentDay}\n`;
    markdown += `**Topic:** ${topicName} (${topics[phaseIdx].phase})\n`;
    markdown += `**Sessions:** ${sessions}\n\n`;

    for (let s = 1; s <= sessions; s++) {
      markdown += `#### Session ${s}: ${topicName} (50 min)\n`;
      markdown += `**Pre-Session Questions (Answer BEFORE coding):**\n`;
      content.pq.forEach((q, i) => markdown += `${i + 1}. ${q}\n`);
      markdown += `\n**Core Topics:**\n`;
      content.ct.forEach(t => markdown += `- ${t}\n`);
      markdown += `\n**Resources:**\n`;
      content.res.forEach(r => markdown += `- ${r}\n`);
      
      markdown += `\n**Code & Notes (Write during session):**\n\n**What it is:**\n[Explain in your own words]\n\n**Why it exists & How it works:**\n[Mechanism/process]\n\n\`\`\`javascript\n// Implementation examples\n\`\`\`\n\n`;

      markdown += `**Daily Exercises ✅:**\n`;
      content.ex.forEach((e, i) => markdown += `${i + 1}. [ ] **Exercise ${i + 1}:** ${e}\n`);
      
      markdown += `\n**Post-Session Recall (CLOSE EVERYTHING FIRST!):**\n`;
      content.rec.forEach((r, i) => markdown += `${i + 1}. **${r}**\n   - [Your answer from memory]\n`);
      
      markdown += `\n---\n\n`;
    }
  }
  
  markdown += `**Commit:** \`git commit -m "Day ${currentDay}: ${topicName}"\`\n\n---\n\n`;
  
  currentDate.setDate(currentDate.getDate() + 1);
  currentDay++;
}

fs.writeFileSync('escape-plan-2026-v3.md', markdown);
console.log('Successfully generated the Rich Syllabus in escape-plan-2026-v3.md!');
