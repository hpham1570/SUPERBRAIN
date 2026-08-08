# connectors.py - Multi-Platform Integration Suite (Telegram, Slack, Discord, Webhooks)
import json, urllib.request

class PlatformConnectors:
    @staticmethod
    def send_telegram(bot_token: str, chat_id: str, message: str):
        url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
        payload = json.dumps({"chat_id": chat_id, "text": message, "parse_mode": "Markdown"}).encode('utf-8')
        req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'})
        return urllib.request.urlopen(req).read().decode('utf-8')

    @staticmethod
    def send_slack(webhook_url: str, message: str):
        payload = json.dumps({"text": message}).encode('utf-8')
        req = urllib.request.Request(webhook_url, data=payload, headers={'Content-Type': 'application/json'})
        return urllib.request.urlopen(req).read().decode('utf-8')

    @staticmethod
    def send_discord(webhook_url: str, message: str):
        payload = json.dumps({"content": message}).encode('utf-8')
        req = urllib.request.Request(webhook_url, data=payload, headers={'Content-Type': 'application/json'})
        return urllib.request.urlopen(req).read().decode('utf-8')
