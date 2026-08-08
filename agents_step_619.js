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
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
