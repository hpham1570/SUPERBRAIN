13: 6: const DEFAULT_AGENTS = [
14: 7:     { id: 'supervisor', name: 'Aether-Supervisor', role: 'Coordinator', prompt: 'Manage the project flow, delegate tasks to sub-agents, and verify overall completion.', model: 'gemini-1.5-pro', color: 'amber', status: 'idle', cost: 0.0, avatar: 'SV', x: 250, y: 150 },
15: 8:     { id: 'researcher', name: 'Web-Explorer', role: 'Code Researcher', prompt: 'Search the web, read api docs, and gather architectural recommendations.', model: 'gemini-2.0-flash', color: 'cyan', status: 'idle', cost: 0.0, avatar: 'RS', x: 100, y: 100 },
16: 9:     { id: 'developer', name: 'Code-Architect', role: 'Full Stack Dev', prompt: 'Implement file logic, write scripts, and perform system command runs.', model: 'aether-core-v4', color: 'purple', status: 'idle', cost: 0.0, avatar: 'DV', x: 150, y: 300 },
17: 10:     { id: 'reviewer', name: 'Sentinel-Auditor', role: 'QA & Security', prompt: 'Review source code for vulnerabilities, lint errors, and test correctness.', model: 'gemini-1.5-pro', color: 'emerald', status: 'idle', cost: 0.0, avatar: 'QA', x: 400, y: 200 }
18: 11: ];
19: 12: 
20: 13: // --- Simulation Scenarios Database ---
21: 14: const SCENARIOS = {
22: 15:     'web-app': {
23: 16:         title: "Build Full-Stack App",
24: 17:         desc: "Design and implement a production-ready Node.js API server with SQLite persistence.",
25: 18:         steps: [
26: 19:             {
27: 20:                 agent: 'supervisor',
28: 21:                 type: 'thought',
29: 22:                 content: 'Initializing full-stack web application project. We need to scaffold a Node.js project with an Express server and SQLite database. I will delegate research to Web-Explorer to find optimal SQLite libraries.'
30: 23:             },
31: 24:             {
32: 25:                 agent: 'supervisor',
33: 26:                 type: 'delegate',
34: 27:                 to: 'researcher',
35: 28:                 content: 'Search for recommended lightweight SQLite wrapper libraries for Express.'
36: 29:             },
37: 30:             {
38: 31:                 agent: 'researcher',
39: 32:                 type: 'thought',
40: 33:                 content: 'I need to check npm registry for sqlite3 and better-sqlite3 packages to evaluate performance, security, and TypeScript support.'
41: 34:             },
42: 35:             {
43: 36:                 agent: 'researcher',
44: 37:                 type: 'action',
45: 38:                 tool: 'web_search',
46: 39:                 args: 'best node.js sqlite library 2026 better-sqlite3 vs sqlite3',
47: 40:             },