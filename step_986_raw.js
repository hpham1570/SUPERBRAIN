Created At: 2026-07-19T05:57:07Z
Completed At: 2026-07-19T05:57:07Z
File Path: `file:///C:/Users/Lap/.gemini/antigravity/scratch/ai-agent-control/app.js`
Total Lines: 1349
Total Bytes: 53033
Showing lines 5 to 20
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
5: // --- Default Agent Profiles ---
6: const DEFAULT_AGENTS = [
7:     { id: 'supervisor', name: 'Aether-Supervisor', role: 'Coordinator', prompt: 'Manage the project flow, delegate tasks to sub-agents, and verify overall completion.', model: 'gemini-3.5-flash', color: 'amber', status: 'idle', cost: 0.0, avatar: 'SV', x: 250, y: 210 },
8:     { id: 'planner', name: 'Aether-Planner', role: 'Project Planner', prompt: 'Decompose high-level goals into concrete, structured step-by-step task lists, establish prioritization, and delegate instructions to technical sub-agents.', model: 'gemini-3.5-flash', color: 'amber', status: 'idle', cost: 0.0, avatar: 'PL', x: 250, y: 75 },
9:     { id: 'researcher', name: 'Web-Explorer', role: 'Code Researcher', prompt: 'Search the web, read api docs, and gather architectural recommendations.', model: 'gemini-2.0-flash', color: 'cyan', status: 'idle', cost: 0.0, avatar: 'RS', x: 155, y: 115 },
10:     { id: 'developer', name: 'Code-Architect', role: 'Full Stack Dev', prompt: 'Implement file logic, write scripts, and perform system command runs.', model: 'aether-core-v4', color: 'purple', status: 'idle', cost: 0.0, avatar: 'DV', x: 115, y: 210 },
11:     { id: 'db_developer', name: 'DB-Architect', role: 'Database Engineer', prompt: 'Design optimized relational database schemas, write database seeding and migration scripts, and troubleshoot SQL errors.', model: 'gemini-3.5-flash', color: 'emerald', status: 'idle', cost: 0.0, avatar: 'DB', x: 155, y: 305 },
12:     { id: 'cfo', name: 'Prof-CFO', role: 'Chief Financial Officer (Harvard CS Prof)', prompt: 'Act as a Chief Financial Officer with a PhD in Computer Science from Harvard. Evaluate technical ROI, project resource budgeting, API token costs, and AI execution efficiency. Review architectural proposals from a financial and technical feasibility perspective.', model: 'gemini-3.5-flash', color: 'amber', status: 'idle', cost: 0.0, avatar: 'CF', x: 250, y: 345 },
13:     { id: 'devops', name: 'Aether-DevOps', role: 'DevOps Engineer', prompt: 'Configure CI/CD pipelines, write Dockerfiles and deployment scripts, manage environment variables, and verify production deployment status.', model: 'gemini-3.5-flash', color: 'red', status: 'idle', cost: 0.0, avatar: 'DO', x: 345, y: 305 },
14:     { id: 'senior_developer', name: 'Senior-Coder', role: 'Senior Developer', prompt: 'Write highly optimized, clean, and well-structured source code, install dependencies, and run validation scripts.', model: 'gemini-3.5-flash', color: 'purple', status: 'idle', cost: 0.0, avatar: 'SR', x: 385, y: 210 },
15:     { id: 'reviewer', name: 'Sentinel-Auditor', role: 'QA & Security', prompt: 'Review source code for vulnerabilities, lint errors, and test correctness.', model: 'gemini-3.5-flash', color: 'emerald', status: 'idle', cost: 0.0, avatar: 'QA', x: 345, y: 115 }
16: ];
17: 
18: // --- Simulation Scenarios Database ---
19: const SCENARIOS = {
20:     'web-app': {
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
