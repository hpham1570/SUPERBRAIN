141: const DEFAULT_AGENTS = [
142:     { id: 'supervisor', name: 'Peer-Review-Chair', role: 'Supervisor', prompt: PEER_CHAIR_PROMPT, model: 'gemini-3.5-flash', color: 'amber', status: 'idle', cost: 0.0, avatar: 'PR', x: 250, y: 210 },
143:     { id: 'dean', name: 'Dean-of-Faculty', role: 'CTO', prompt: DEAN_PROMPT, model: 'gemini-3.5-flash', color: 'amber', status: 'idle', cost: 0.0, avatar: 'DF', x: 273, y: 77 },
144:     { id: 'dept_head', name: 'Department-Head', role: 'Manager', prompt: DEPT_HEAD_PROMPT, model: 'gemini-3.5-flash', color: 'amber', status: 'idle', cost: 0.0, avatar: 'DH', x: 183, y: 93 },
145:     { id: 'planner', name: 'Curriculum-Planner', role: 'Planner', prompt: CURRICULUM_PLANNER_PROMPT, model: 'gemini-3.5-flash', color: 'cyan', status: 'idle', cost: 0.0, avatar: 'CP', x: 123, y: 164 },
146:     { id: 'ta_lead', name: 'TA-Lead', role: 'Lead', prompt: TA_LEAD_PROMPT, model: 'gemini-2.0-flash', color: 'cyan', status: 'idle', cost: 0.0, avatar: 'TL', x: 123, y: 256 },
147:     { id: 'developer', name: 'Research-Fellow-1', role: 'Assembly 1', prompt: FELLOW_PROMPT_1, model: 'aether-core-v4', color: 'purple', status: 'idle', cost: 0.0, avatar: 'F1', x: 183, y: 327 },
148:     { id: 'senior_developer', name: 'Research-Fellow-2', role: 'Assembly 2', prompt: FELLOW_PROMPT_2, model: 'gemini-3.5-flash', color: 'purple', status: 'idle', cost: 0.0, avatar: 'F2', x: 273, y: 343 },
149:     { id: 'market_analyst', name: 'Research-Fellow-3', role: 'Assembly 3', prompt: FELLOW_PROMPT_3, model: 'gemini-2.0-flash', color: 'purple', status: 'idle', cost: 0.0, avatar: 'F3', x: 353, y: 297 },
150:     { id: 'reviewer', name: 'Grading-Agent', role: 'QC', prompt: GRADING_AGENT_PROMPT, model: 'gemini-3.5-flash', color: 'emerald', status: 'idle', cost: 0.0, avatar: 'GA', x: 385, y: 210 },
151:     { id: 'integrity_auditor', name: 'Academic-Integrity-Auditor', role: 'Audit', prompt: INTEGRITY_AUDITOR_PROMPT, model: 'gemini-3.5-flash', color: 'emerald', status: 'idle', cost: 0.0, avatar: 'AA', x: 353, y: 123 },
152:     { id: 'spy', name: 'Peer-Review-Blind-check', role: 'Security', prompt: BLIND_CHECK_PROMPT, model: 'gemini-2.0-flash', color: 'red', status: 'idle', cost: 0.0, avatar: 'BC', x: 250, y: 360 },
153:     { id: 'hours_scheduler', name: 'Office-Hours-Scheduler', role: 'Load Balancer', prompt: HOURS_SCHEDULER_PROMPT, model: 'gemini-2.0-flash', color: 'cyan', status: 'idle', cost: 0.0, avatar: 'OH', x: 200, y: 380 },
154:     { id: 'retraction_agent', name: 'Retraction-Agent', role: 'Error Recovery', prompt: RETRACTION_AGENT_PROMPT, model: 'gemini-2.0-flash', color: 'red', status: 'idle', cost: 0.0, avatar: 'RA', x: 150, y: 380 },
155:     { id: 'pub_metrics', name: 'Publication-Metrics', role: 'Reporter', prompt: PUB_METRICS_PROMPT, model: 'gemini-2.0-flash', color: 'blue', status: 'idle', cost: 0.0, avatar: 'PM', x: 100, y: 380 },
156:     { id: 'ta_announcement', name: 'TA-Announcement', role: 'Communication', prompt: TA_ANNOUNCEMENT_PROMPT, model: 'gemini-2.0-flash', color: 'blue', status: 'idle', cost: 0.0, avatar: 'TA', x: 50, y: 380 },
157:     { id: 'faculty_library', name: 'Faculty-Library', role: 'Memory', prompt: FACULTY_LIBRARY_PROMPT, model: 'gemini-2.0-flash', color: 'blue', status: 'idle', cost: 0.0, avatar: 'FL', x: 250, y: 220 },
158:     { id: 'tenure_committee', name: 'Tenure-Review-Committee', role: 'Training', prompt: TENURE_COMMITTEE_PROMPT, model: 'gemini-2.0-flash', color: 'blue', status: 'idle', cost: 0.0, avatar: 'TC', x: 250, y: 220 }
159: ];-flash', color: 'purple', status: 'idle', cost: 0.0, avatar: 'SR', x: 385, y: 210 },
160:     { id: 'reviewer', name: 'Sentinel-Auditor', role: 'QA & Security', prompt: REVIEWER_PROMPT, model: 'gemini-3.5-flash', color: 'emerald', status: 'idle', cost: 0.0, avatar: 'QA', x: 353, y: 123 },
161:     { id: 'spy', name: 'Aether-Spy', role: 'Gateway Intelligence', prompt: SPY_PROMPT, model: 'gemini-2.0-flash', color: 'cyan', status: 'idle', cost: 0.0, avatar: 'SP', x: 250, y: 360 },
162:     { id: 'market_analyst', name: 'Intel-Analyst', role: 'AI Market Researcher', prompt: MARKET_ANALYST_PROMPT, model: 'gemini-2.0-flash', color: 'emerald', status: 'idle', cost: 0.0, avatar: 'MA', x: 200, y: 380 }
163: ];
164: 
165: // --- Simulation Scenarios Database ---
166: const SCENARIOS = {
167:     'web-app': {
168:         title: "Build Full-Stack App",
169:         desc: "Design and implement a production-ready Node.js API server with SQLite persistence.",
170:         steps: [
171:             {
172:                 agent: 'supervisor',
173:                 type: 'thought',
174:                 content: 'Initializing full-stack web application project. We need to scaffold a Node.js project with an Express server and SQLite database. I will delegate research to Web-Explorer to find optimal SQLite libraries.'
175:             },