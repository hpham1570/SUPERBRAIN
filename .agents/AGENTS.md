# Aether Network Project Rules

## 1. Tiêu chuẩn thiết kế Agent Prompt
Mọi prompt của Agent được định nghĩa trong mã nguồn (JS/Python) hoặc thêm mới qua UI bắt buộc phải viết theo cấu trúc danh sách trực quan:
- Dòng 1: Tiêu đề vai trò/nhiệm vụ tổng quát (kết thúc bằng dấu hai chấm).
- Dòng 2: Mô tả hành động cốt lõi của Agent (kết thúc bằng dấu hai chấm).
- Các dòng tiếp theo: Danh sách các tính năng/giới hạn dưới dạng `- **Tên tính năng**: Mô tả chi tiết`.

*Ví dụ chuẩn:*
```text
Thám thính giá cả và an ninh:
Aether-Spy sẽ giám sát các cổng API:
- **API Latency**: Đo lường tốc độ phản hồi.
- **Data Leak Guard**: Ngăn chặn rò rỉ API Keys.
```

## 2. Tiêu chuẩn Vòng lặp Tự học (Continuous Self-Learning)
- Mọi luồng điều phối kịch bản (Orchestration Loop) bắt buộc phải tích hợp bộ nạp ngữ cảnh bài học cũ (`memory_block` từ RAG) cho toàn bộ các sub-agent tham gia.
- Kết thúc mỗi phiên chạy, hệ thống phải thực hiện bước Phản tỉnh (Self-Reflection) để tự trích xuất 1 bài học thực tế, cập nhật vào cơ sở dữ liệu tri thức (`memory.json`) để cải thiện hiệu năng ở các lần chạy sau.

## 3. Triết lý Thiết kế Hệ thống Lập luận (Prof-Reasoning-Core)
Khi phát triển hoặc tích hợp các Agent có khả năng suy luận, cần ghi nhớ quy tắc cốt lõi:
- **Nguyên lý Giấy nháp (Intermediate State):** Tuyệt đối không cho phép mô hình sinh thẳng câu trả lời cuối cùng cho các bài toán phức tạp. Bắt buộc phải cấu hình quy trình để mô hình xuất bản chuỗi lập luận trung gian (Chain-of-Thought) làm "giấy nháp".
- **Ưu tiên Bộ lọc hơn Nhân vật (Filters > Personas):** Tính đúng đắn của hệ thống suy luận phụ thuộc vào chất lượng của QC Agent (Grading-Agent) và Audit Agent (Integrity-Auditor), chứ không phụ thuộc vào độ phức tạp trong prompt mô tả tính cách (persona) của giáo sư hay chuyên gia.
- **Tiêu chuẩn Bình duyệt Bắt buộc (Mandatory Peer-Review):** 
  * Mọi lập luận do Research Fellows xuất ra bắt buộc phải đi qua cổng kiểm duyệt của QC và Audit.
  * Nếu phát hiện lỗi logic (Logic Gap) hoặc thông tin không thể xác thực (Hallucination), kết quả bắt buộc phải bị bác bỏ và yêu cầu lập luận lại (Backtrack/Loop).
- **Quy trình Tự sửa lỗi thực tế (Self-Correction Architecture):**
  * Đối với bài toán lập trình: Phải bắt buộc chạy mã nguồn trong Sandbox và đọc stack trace lỗi cụ thể để vá code (vòng lặp sử dụng công cụ thực nghiệm, không dựa trên suy đoán cảm tính).
  * Đối với bài toán lập luận lý thuyết: Sử dụng bộ lọc phản biện độc lập (Grading-Agent, Integrity-Auditor) làm bình duyệt chéo để chỉ ra kẽ hở logic hay khẳng định thiếu căn cứ khoa học.
- **Quy tắc Kiểm soát tính hội tụ (Critique Convergence Control):**
  * Giới hạn tối đa 2 vòng lặp phản biện chéo (max_critique_rounds = 2).
  * Tránh hiện tượng sửa quá đà (Over-critique): Nếu sau số vòng lặp tối đa mà kết quả không thể tối ưu hơn, hệ thống phải dừng lại và trả về kết quả tốt nhất kèm cảnh báo lỗi, thay vì tiếp tục lập luận vô hạn làm biến đổi kết quả đúng thành sai.
- **Nguyên lý Bộ nhớ ngoài & Bộ lọc Chất lượng ghi nhớ (External Memory & QC Gatekeeping):**
  * Hệ thống học hỏi thông qua việc truy vấn bộ nhớ ngoài (Faculty-Library / Vector DB) và tiêm ngữ cảnh (In-context learning), không phải thay đổi tham số mô hình nền.
  * **Chỉ lưu case đã được phê duyệt (QC Memory Gate):** Chỉ cho phép ghi vào tệp cơ sở tri thức (memory.json) các kết quả và bài học đã được Grading-Agent chấm điểm đạt chuẩn hoặc đã chạy sandbox thành công. Tuyệt đối không ghi các case lỗi chưa được kiểm chứng để tránh hệ thống tích lũy và lặp lại sai lầm trong tương lai.
- **Nguyên lý Thám thính & Tích lũy Tri thức Ngoại vi (External Knowledge Harvesting):**
  * Trí thông minh của hệ thống không bị đóng băng nhờ khả năng chủ động truy quét internet, cào dữ liệu công nghệ từ các nguồn hàng đầu (OpenAI, Anthropic, DeepSeek tech blogs) định kỳ theo giờ.
  * **Chống nhiễm độc dữ liệu (Anti-Poisoning Gate):** Tri thức mới thu thập từ môi trường bên ngoài bắt buộc phải đi qua bộ lọc kiểm định độ tin cậy của Integrity-Auditor trước khi được lưu vào memory.json.
- **Tổng kết Mô hình 15 Agent:**
  * Mạng lưới Academic Reasoning Faculty là đại diện cho cấu trúc bộ não suy luận lý tưởng: chia việc, lập luận độc lập song song (self-consistency), chấm điểm bình duyệt chéo (QC/Audit), và tích lũy tri thức đã qua chọn lọc.
