const fs = require('fs');

// Use explicit year, month (0-indexed), date so timezones don't shift it
const startDate = new Date(2026, 3, 21); // April 21, 2026
const endDate = new Date(2026, 11, 31); // Dec 31, 2026

const topics = [
  { phase: 'Phase 1: Advanced JS & DOM', topics: ['HTTP & DNS', 'Promises & Async/Await', 'Fetch API & REST', 'DOM Manipulation', 'Events & Bubbling', 'Web Storage (Local/Session)', 'Modules (ES6)'] },
  { phase: 'Phase 2: React Ecosystem', topics: ['React Components & JSX', 'Props & State (useState)', 'Component Lifecycle & useEffect', 'React Router v6', 'Context API', 'Zustand / Redux', 'Advanced Hooks (useMemo, useCallback)', 'Tailwind CSS Integration'] },
  { phase: 'Phase 3: Backend Fundamentals (Node/Express)', topics: ['Node.js Core (fs, path, http)', 'Express.js Setup & Routing', 'Middlewares & Error Handling', 'REST API Design', 'Authentication (JWT, Cookies)', 'Web Security (CORS, XSS, CSRF)', 'MVC Architecture'] },
  { phase: 'Phase 4: Databases (PostgreSQL & MongoDB)', topics: ['SQL Basics & PostgreSQL', 'Advanced SQL Queries & Joins', 'Prisma ORM', 'NoSQL Basics & MongoDB', 'Mongoose ODM', 'Database Modeling & Relationships', 'Transactions & Indexing'] },
  { phase: 'Phase 5: Full-Stack Integration & DevOps', topics: ['Connecting React & Express', 'Redis Caching', 'Docker Fundamentals', 'Docker Compose', 'CI/CD with GitHub Actions', 'Deployment (AWS / Vercel)', 'System Design Basics', 'LeetCode & Interview Prep'] }
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

let markdown = `# The Complete Full-Stack Plan (Roadmap.sh) - Day 11 to End of 2026\n\n`;
let currentDate = new Date(startDate.getTime()); // Copy
let currentDay = 11;
let weekNumber = 2; // Roughly week 2 since day 11

while (currentDate <= endDate) {
  const dayOfWeek = currentDate.getDay();
  // 0 is Sunday, 6 is Saturday
  const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
  const sessions = isWeekend ? 4 : 2;
  
  const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const monthName = currentDate.toLocaleDateString('en-US', { month: 'short' });
  const dateNum = currentDate.getDate();
  
  if (dayOfWeek === 1 || currentDay === 11) { // Monday or first day
    markdown += `## Week ${weekNumber} (${monthName} ${dateNum})\n\n`;
    if (dayOfWeek === 1) weekNumber++;
  }

  const activeProject = getProjectForDay(currentDay);
  let topicName = "";
  
  if (activeProject) {
    topicName = `[PROJECT BUILD] ${activeProject.name}`;
  } else {
    // Regular learning day
    const phaseIdx = Math.min(Math.floor((currentDay - 11) / 51), topics.length - 1);
    const topicList = topics[phaseIdx].topics;
    topicName = topicList[currentDay % topicList.length];
  }

  markdown += `### ${dayName}, ${monthName} ${dateNum} - Day ${currentDay}\n`;
  markdown += `**Topic:** ${topicName}\n`;
  markdown += `**Sessions:** ${sessions}\n\n`;

  for (let s = 1; s <= sessions; s++) {
    markdown += `#### Session ${s}: ${activeProject ? 'Project Implementation' : topicName} Part ${s} (50 min)\n`;
    
    if (activeProject) {
        markdown += `**Pre-Session Questions:**\n1. What feature or component am I building in this session?\n2. What is the biggest technical risk for this feature?\n\n`;
        markdown += `**Core Topics:**\n- Project Architecture\n- Code Implementation\n- Debugging & Refactoring\n\n`;
        markdown += `**Resources:**\n- Your notes from the previous month\n- [StackOverflow / Documentation]\n\n`;
        markdown += `**Exercises:**\n1. Write the code for the targeted feature.\n2. Ensure it connects properly to the rest of the application.\n3. Commit working code.\n\n`;
        markdown += `**Post-Session Recall:**\n1. What bug did I squash today?\n2. What feature is up next?\n\n`;
    } else {
        markdown += `**Pre-Session Questions:**\n1. What is the core concept of ${topicName}?\n2. What is the syntax or mechanism involved?\n\n`;
        markdown += `**Core Topics:**\n- Specific sub-topic A\n- Specific sub-topic B\n- Specific sub-topic C\n\n`;
        markdown += `**Resources:**\n- [Roadmap.sh Fullstack](https://roadmap.sh/fullstack)\n- [MDN / Official Documentation](https://developer.mozilla.org)\n\n`;
        markdown += `**Exercises:**\n1. Implement a basic setup of ${topicName}.\n2. Test its limits or expected behavior.\n3. Integrate it into the larger project structure.\n\n`;
        markdown += `**Post-Session Recall:**\n1. Recap ${topicName} from memory.\n2. Summarize one major hurdle today.\n3. What is the "ELI5" Summary?\n\n`;
    }
    markdown += `---\n\n`;
  }
  
  markdown += `**Commit:** \`Day ${currentDay}: ${topicName}\`\n\n---\n\n`;
  
  currentDate.setDate(currentDate.getDate() + 1);
  currentDay++;
}

fs.writeFileSync('escape-plan-2026-v2.md', markdown);
console.log('escape-plan-2026-v2.md updated to start April 21!');
