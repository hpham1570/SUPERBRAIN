# analytics_engine.py - Superbrain 10X Luxury Watch Hub Analytics Engine
# Prompt Requirement: Nâng cấp và khởi tạo ứng dụng Luxury Watch Hub

class AnalyticsEngine:
    def __init__(self):
        self.store_name = "Luxury Watch Hub 3D"
        self.currency = "USD"
        self.watches_catalog = [
            {"id": 101, "name": "Rolex Daytona Platinum", "price": 45000, "sales": 12},
            {"id": 102, "name": "Patek Philippe Nautilus", "price": 85000, "sales": 8},
            {"id": 103, "name": "Audemars Piguet Royal Oak", "price": 62000, "sales": 15},
            {"id": 104, "name": "Omega Speedmaster Moonwatch", "price": 12500, "sales": 25}
        ]

    def calculate_total_revenue(self):
        total_sales = sum(item["price"] * item["sales"] for item in self.watches_catalog)
        total_units = sum(item["sales"] for item in self.watches_catalog)
        top_seller = max(self.watches_catalog, key=lambda x: x["sales"])
        
        return {
            "status": "SUCCESS",
            "store": self.store_name,
            "total_revenue": f"${total_sales:,.2f}",
            "total_units_sold": total_units,
            "top_selling_watch": top_seller["name"],
            "currency": self.currency
        }

if __name__ == "__main__":
    engine = AnalyticsEngine()
    print("⚡ [LUXURY WATCH HUB ANALYTICS REPORT]")
    print(engine.calculate_total_revenue())
