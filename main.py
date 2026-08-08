import os
from dotenv import load_dotenv

load_dotenv()

my_key = os.getenv("MY_SECRET_KEY")
if not my_key:
    raise ValueError("Missing environment variable: 'MY_SECRET_KEY' is not set in the .env file.")

print(my_key)