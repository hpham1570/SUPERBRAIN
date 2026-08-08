Created At: 2026-07-18T23:53:25Z
Completed At: 2026-07-18T23:53:25Z
File Path: `file:///C:/Users/Lap/.gemini/antigravity/scratch/ai-agent-control/app.js`
Total Lines: 1321
Total Bytes: 49764
Showing lines 1 to 100
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
1: /* ==========================================================================
2:    AETHERNET // AI Agent Control Center Core Logic
3:    ========================================================================== */
4: 
5: // --- Default Agent Profiles ---
6: const DEFAULT_AGENTS = [
7:     { id: 'supervisor', name: 'Aether-Supervisor', role: 'Coordinator', prompt: 'Manage the project flow, delegate tasks to sub-agents, and verify overall completion.', model: 'gemini-1.5-pro', color: 'amber', status: 'idle', cost: 0.0, avatar: 'SV', x: 250, y: 150 },
8:     { id: 'researcher', name: 'Web-Explorer', role: 'Code Researcher', prompt: 'Search the web, read api docs, and gather architectural recommendations.', model: 'gemini-2.0-flash', color: 'cyan', status: 'idle', cost: 0.0, avatar: 'RS', x: 100, y: 100 },
9:     { id: 'developer', name: 'Code-Architect', role: 'Full Stack Dev', prompt: 'Implement file logic, write scripts, and perform system command runs.', model: 'aether-core-v4', color: 'purple', status: 'idle', cost: 0.0, avatar: 'DV', x: 150, y: 300 },
10:     { id: 'reviewer', name: 'Sentinel-Auditor', role: 'QA & Security', prompt: 'Review source code for vulnerabilities, lint errors, and test correctness.', model: 'gemini-1.5-pro', color: 'emerald', status: 'idle', cost: 0.0, avatar: 'QA', x: 400, y: 200 }
11: ];
12: 
13: // --- Simulation Scenarios Database ---
14: const SCENARIOS = {
15:     'web-app': {
16:         title: "Build Full-Stack App",
17:         desc: "Design and implement a production-ready Node.js API server with SQLite persistence.",
18:         steps: [
19:             {
20:                 agent: 'supervisor',
21:                 type: 'thought',
22:                 content: 'Initializing full-stack web application project. We need to scaffold a Node.js project with an Express server and SQLite database. I will delegate research to Web-Explorer to find optimal SQLite libraries.'
23:             },
24:             {
25:                 agent: 'supervisor',
26:                 type: 'delegate',
27:                 to: 'researcher',
28:                 content: 'Search for recommended lightweight SQLite wrapper libraries for Express.'
29:             },
30:             {
31:                 agent: 'researcher',
32:                 type: 'thought',
33:                 content: 'I need to check npm registry for sqlite3 and better-sqlite3 packages to evaluate performance, security, and TypeScript support.'
34:             },
35:             {
36:                 agent: 'researcher',
37:                 type: 'action',
38:                 tool: 'web_search',
39:                 args: 'best node.js sqlite library 2026 better-sqlite3 vs sqlite3',
40:             },
41:             {
42:                 agent: 'researcher',
43:                 type: 'observation',
44:                 content: 'Search Results:\n1. better-sqlite3: Fast, synchronous execution, excellent performance but requires native build tools.\n2. sqlite3: Asynchronous, widely used, slightly slower but highly portable.\n\nRecommendation: Use "better-sqlite3" for high performance, or "sqlite" wrapper for standard async loops.'
45:             },
46:             {
47:                 agent: 'researcher',
48:                 type: 'delegate',
49:                 to: 'supervisor',
50:                 content: 'Research complete. Recommend "better-sqlite3" for query execution speed, or "sqlite" wrapper with promise-support for async safety.'
51:             },
52:             {
53:                 agent: 'supervisor',
54:                 type: 'thought',
55:                 content: 'Understood. I will instruct Code-Architect to configure the workspace structure and write index.js and database.js using better-sqlite3.'
56:             },
57:             {
58:                 agent: 'supervisor',
59:                 type: 'delegate',
60:                 to: 'developer',
61:                 content: 'Scaffold the project. Create database.js for connection management and index.js for API routing.'
62:             },
63:             {
64:                 agent: 'developer',
65:                 type: 'thought',
66:                 content: 'First, I will create the database connection file database.js. This will initialize our SQLite connection and seed user and product tables.'
67:             },
68:             {
69:                 agent: 'developer',
70:                 type: 'action',
71:                 tool: 'write_file',
72:                 args: 'database.js',
73:                 fileContent: `const Database = require('better-sqlite3');
74: const db = new Database('app.db', { verbose: console.log });
75: 
76: // Initialize schema
77: db.exec(\`
78:   CREATE TABLE IF NOT EXISTS users (
79:     id INTEGER PRIMARY KEY AUTOINCREMENT,
80:     username TEXT UNIQUE,
81:     email TEXT,
82:     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
83:   );
84:   
85:   CREATE TABLE IF NOT EXISTS products (
86:     id INTEGER PRIMARY KEY AUTOINCREMENT,
87:     name TEXT,
88:     price REAL,
89:     stock INTEGER
90:   );
91: \`);
92: 
93: // Seed data
94: const insertUser = db.prepare('INSERT OR IGNORE INTO users (username, email) VALUES (?, ?)');
95: insertUser.run('admin', 'admin@aethernet.io');
96: insertUser.run('developer', 'dev@aethernet.io');
97: 
98: console.log("Database initialized and tables seeded.");
99: module.exports = db;`
100:             },
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
