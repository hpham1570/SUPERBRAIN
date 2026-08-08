60: const DEFAULT_AGENTS = [
61:     { id: 'supervisor', name: 'Aether-Supervisor', role: 'Coordinator', prompt: SUPERVISOR_PROMPT, model: 'gemini-3.5-flash', color: 'amber', status: 'idle', cost: 0.0, avatar: 'SV', x: 250, y: 210 },
62:     { id: 'planner', name: 'Aether-Planner', role: 'Project Planner', prompt: 'Decompose high-level goals into concrete, structured step-by-step task lists, establish prioritization, and delegate instructions to technical sub-agents.', model: 'gemini-3.5-flash', color: 'amber', status: 'idle', cost: 0.0, avatar: 'PL', x: 273, y: 77 },
63:     { id: 'researcher', name: 'Web-Explorer', role: 'Code Researcher', prompt: 'Search the web, read api docs, and gather architectural recommendations.', model: 'gemini-2.0-flash', color: 'cyan', status: 'idle', cost: 0.0, avatar: 'RS', x: 183, y: 93 },
64:     { id: 'github_explorer', name: 'GitHub-Explorer', role: 'Open Source Analyst', prompt: 'Search GitHub repositories, analyze open-source code quality, evaluate licenses (MIT, Apache, GPL), verify security posture (issues, commits), and present open-source integration proposals to the CFO and Code-Architect.', model: 'gemini-2.0-flash', color: 'cyan', status: 'idle', cost: 0.0, avatar: 'GH', x: 123, y: 164 },
65:     { id: 'developer', name: 'Code-Architect', role: 'Full Stack Dev', prompt: DEVELOPER_PROMPT, model: 'aether-core-v4', color: 'purple', status: 'idle', cost: 0.0, avatar: 'DV', x: 123, y: 256 },
66:     { id: 'db_developer', name: 'DB-Architect', role: 'Database Engineer', prompt: 'Design optimized relational database schemas, write database seeding and migration scripts, and troubleshoot SQL errors.', model: 'gemini-3.5-flash', color: 'emerald', status: 'idle', cost: 0.0, avatar: 'DB', x: 183, y: 327 },
67:     { id: 'cfo', name: 'Prof-CFO', role: 'Chief Financial Officer (Harvard CS Prof)', prompt: CFO_PROMPT, model: 'gemini-3.5-flash', color: 'amber', status: 'idle', cost: 0.0, avatar: 'CF', x: 273, y: 343 },
68:     { id: 'devops', name: 'Aether-DevOps', role: 'DevOps Engineer', prompt: 'Configure CI/CD pipelines, write Dockerfiles and deployment scripts, manage environment variables, and verify production deployment status.', model: 'gemini-3.5-flash', color: 'red', status: 'idle', cost: 0.0, avatar: 'DO', x: 353, y: 297 },
69:     { id: 'senior_developer', name: 'Senior-Coder', role: 'Senior Developer', prompt: 'Write highly optimized, clean, and well-structured source code, install dependencies, and run validation scripts.', model: 'gemini-3.5-flash', color: 'purple', status: 'idle', cost: 0.0, avatar: 'SR', x: 385, y: 210 },
70:     { id: 'reviewer', name: 'Sentinel-Auditor', role: 'QA & Security', prompt: REVIEWER_PROMPT, model: 'gemini-3.5-flash', color: 'emerald', status: 'idle', cost: 0.0, avatar: 'QA', x: 353, y: 123 },
71:     { id: 'spy', name: 'Aether-Spy', role: 'Gateway Intelligence', prompt: SPY_PROMPT, model: 'gemini-2.0-flash', color: 'cyan', status: 'idle', cost: 0.0, avatar: 'SP', x: 250, y: 360 },
72:     { id: 'market_analyst', name: 'Intel-Analyst', role: 'AI Market Researcher', prompt: MARKET_ANALYST_PROMPT, model: 'gemini-2.0-flash', color: 'emerald', status: 'idle', cost: 0.0, avatar: 'MA', x: 200, y: 380 }
73: ];
74: 
75: // --- Simulation Scenarios Database ---
76: const SCENARIOS = {
77:     'web-app': {
78:         title: "Build Full-Stack App",
79:         desc: "Design and implement a production-ready Node.js API server with SQLite persistence.",
80:         steps: [
81:             {
82:                 agent: 'supervisor',
83:                 type: 'thought',
84:                 content: 'Initializing full-stack web application project. We need to scaffold a Node.js project with an Express server and SQLite database. I will delegate research to Web-Explorer to find optimal SQLite libraries.'
85:             },
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
