6: const DEFAULT_AGENTS = [
7:     { id: 'supervisor', name: 'Aether-Supervisor', role: 'Coordinator', prompt: 'Manage the project flow, delegate tasks to sub-agents, and verify overall completion.', model: 'gemini-3.5-flash', color: 'amber', status: 'idle', cost: 0.0, avatar: 'SV', x: 250, y: 210 },
8:     { id: 'planner', name: 'Aether-Planner', role: 'Project Planner', prompt: 'Decompose high-level goals into concrete, structured step-by-step task lists, establish prioritization, and delegate instructions to technical sub-agents.', model: 'gemini-3.5-flash', color: 'amber', status: 'idle', cost: 0.0, avatar: 'PL', x: 250, y: 80 },
9:     { id: 'researcher', name: 'Web-Explorer', role: 'Code Researcher', prompt: 'Search the web, read api docs, and gather architectural recommendations.', model: 'gemini-2.0-flash', color: 'cyan', status: 'idle', cost: 0.0, avatar: 'RS', x: 149, y: 129 },
10:     { id: 'developer', name: 'Code-Architect', role: 'Full Stack Dev', prompt: 'Implement file logic, write scripts, and perform system command runs.', model: 'aether-core-v4', color: 'purple', status: 'idle', cost: 0.0, avatar: 'DV', x: 124, y: 239 },
11:     { id: 'db_developer', name: 'DB-Architect', role: 'Database Engineer', prompt: 'Design optimized relational database schemas, write database seeding and migration scripts, and troubleshoot SQL errors.', model: 'gemini-3.5-flash', color: 'emerald', status: 'idle', cost: 0.0, avatar: 'DB', x: 194, y: 327 },
12:     { id: 'devops', name: 'Aether-DevOps', role: 'DevOps Engineer', prompt: 'Configure CI/CD pipelines, write Dockerfiles and deployment scripts, manage environment variables, and verify production deployment status.', model: 'gemini-3.5-flash', color: 'red', status: 'idle', cost: 0.0, avatar: 'DO', x: 306, y: 327 },
13:     { id: 'senior_developer', name: 'Senior-Coder', role: 'Senior Developer', prompt: 'Write highly optimized, clean, and well-structured source code, install dependencies, and run validation scripts.', model: 'gemini-3.5-flash', color: 'purple', status: 'idle', cost: 0.0, avatar: 'SR', x: 376, y: 239 },
14:     { id: 'reviewer', name: 'Sentinel-Auditor', role: 'QA & Security', prompt: 'Review source code for vulnerabilities, lint errors, and test correctness.', model: 'gemini-3.5-flash', color: 'emerald', status: 'idle', cost: 0.0, avatar: 'QA', x: 351, y: 129 }
15: ];
16: 
17: // --- Simulation Scenarios Database ---
18: const SCENARIOS = {
19:     'web-app': {
20:         title: "Build Full-Stack App",
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
