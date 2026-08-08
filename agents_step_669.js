6: const DEFAULT_AGENTS = [
7:     { id: 'supervisor', name: 'Aether-Supervisor', role: 'Coordinator', prompt: 'Manage the project flow, delegate tasks to sub-agents, and verify overall completion.', model: 'gemini-3.5-flash', color: 'amber', status: 'idle', cost: 0.0, avatar: 'SV', x: 250, y: 90 },
8:     { id: 'researcher', name: 'Web-Explorer', role: 'Code Researcher', prompt: 'Search the web, read api docs, and gather architectural recommendations.', model: 'gemini-2.0-flash', color: 'cyan', status: 'idle', cost: 0.0, avatar: 'RS', x: 90, y: 200 },
9:     { id: 'developer', name: 'Code-Architect', role: 'Full Stack Dev', prompt: 'Implement file logic, write scripts, and perform system command runs.', model: 'aether-core-v4', color: 'purple', status: 'idle', cost: 0.0, avatar: 'DV', x: 160, y: 320 },
10:     { id: 'senior_developer', name: 'Senior-Coder', role: 'Senior Developer', prompt: 'Write highly optimized, clean, and well-structured source code, install dependencies, and run validation scripts.', model: 'gemini-3.5-flash', color: 'purple', status: 'idle', cost: 0.0, avatar: 'SR', x: 340, y: 320 },
11:     { id: 'reviewer', name: 'Sentinel-Auditor', role: 'QA & Security', prompt: 'Review source code for vulnerabilities, lint errors, and test correctness.', model: 'gemini-3.5-flash', color: 'emerald', status: 'idle', cost: 0.0, avatar: 'QA', x: 410, y: 200 }
12: ];
13: 
14: // --- Simulation Scenarios Database ---
15: const SCENARIOS = {
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
