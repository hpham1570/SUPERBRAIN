def run_mock_scenario_sequence(self, scenario_key, agents_seq):
780:         """Simulated kịch bản sequence for dry-run."""
781:         if scenario_key == "receptionist":
782:             # Step 1: Receptionist greets visitor
783:             await self.websocket.send_json({"type": "task_progress", "progress": 10})
784:             res = await self.execute_agent_loop(
785:                 agents_seq[0], 
786:                 "Greet visitor Alex Rivera who wants to meet the CEO at 14:00. Tell Schedule-Manager to inspect calendar.json for availability.", 
787:                 "Workspace initialized with calendar.json."
788:             )
789:             
790:             # Step 2: Schedule-Manager checks availability
791:             await self.websocket.send_json({"type": "task_progress", "progress": 30})
792:             await self.websocket.send_json({"type": "delegate_animation", "from": "supervisor", "to": "researcher", "content": "Check calendar.json for 14:00 CEO meeting."})
793:             res = await self.execute_agent_loop(
794:                 agents_seq[1], 
795:                 "Read calendar.json to check if 14:00 is open. Report back to Receptionist. If closed, mention 15:00 is open.", 
796:                 "Lobby coordinates."
797:             )
798:             
799:             # Step 3: Receptionist coordinates scheduling update
800:             await self.websocket.send_json({"type": "task_progress", "progress": 50})
801:             await self.websocket.send_json({"type": "delegate_animation", "from": "researcher", "to": "supervisor", "content": "Report 14:00 conflict. Suggest 15:00."})
802:             res = await self.execute_agent_loop(
803:                 agents_seq[0],
804:                 "Alex Rivera agreed to meet at 15:00. Instruct Schedule-Manager to book the 15:00 slot in calendar.json.",
805:                 "Updated slot."
806:             )
807:             
808:             # Step 4: Schedule-Manager writes updated calendar
809:             await self.websocket.send_json({"type": "task_progress", "progress": 70})
810:             await self.websocket.send_json({"type": "delegate_animation", "from": "supervisor", "to": "researcher", "content": "Update calendar.json time slot."})
811:             new_calendar_data = {
812:                 "today": "2026-07-18",
813:                 "schedules": [
814:                     {"time": "14:00", "status": "reserved", "host": "CEO", "visitor": "Alice Smith"},
815:                     {"time": "15:00", "status": "reserved", "host": "CEO", "visitor": "Alex Rivera"}
816:                 ]
817:             }
818:             res = await self.run_tool(
819:                 "researcher", 
820:                 "write_file", 
821:                 json.dumps({"filename": "calendar.json", "content": json.dumps(new_calendar_data, indent=4)})
822:             )
823:             await self.send_log("researcher", "observation", res)
824:             
825:             # Step 5: Host-Notifier runs HITL check (alerting CEO)
826:             await self.websocket.send_json({"type": "task_progress", "progress": 85})
827:             await self.websocket.send_json({"type": "delegate_animation", "from": "supervisor", "to": "reviewer", "content": "Notify CEO for gate entrance authorization."})
828:             res = await self.execute_agent_loop(
829:                 agents_seq[3],
830:                 "Alert the CEO (Host) to authorize gate clearance for Alex Rivera. Execute run_command 'notify-ceo --visitor Alex' which triggers HITL approval.",
831:                 "Clearance check."
832:             )
833:             
834:             # Step 6: Gatekeeper prints badge
835:             await self.websocket.send_json({"type": "task_progress", "progress": 95})
836:             await self.websocket.send_json({"type": "delegate_animation", "from": "supervisor", "to": "developer", "content": "Print visitor pass ticket."})
837:             badge_content = """=====================================
838:           AETHERNET VISITOR PASS
839: =====================================
840: GUEST: Alex Rivera
841: HOST: CEO
842: TIME: 15:00 (Reserved)
843: DATE: 2026-07-18
844: GATE LEVEL: LEVEL 4 AUDITORIUM
845: STATUS: AUTHORIZED BY HOST
846: ====================================="""
847:             res = await self.run_tool(
848:                 "developer",
849:                 "write_file",
850:                 json.dumps({"filename": "visitor_pass_alex.txt", "content": badge_content})
851:             )
852:             await self.send_log("developer", "observation", res)
853:             
854:             # Final greeting
855:             await self.websocket.send_json({"type": "task_progress", "progress": 100})
856:             await self.execute_agent_loop(
857:                 agents_seq[0],
858:                 "Wish visitor Alex Rivera a great meeting and hand over the pass. Finish.",
859:                 "Completed."
860:             )
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
