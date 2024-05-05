from flask import Flask
import requests
from dotenv import load_dotenv
import os

from helper import get_user_location

app = Flask(__name__)

load_dotenv()
API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")

@app.get('/')
def find_nearby_restaurants():
    location = get_user_location()
    lat = location['lat']
    lng = location['lng']
    print(location)

    url = f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?&keyword=boba&location={lat},{lng}&radius=5000&&key={API_KEY}"
    try:
        response = requests.post(url)
        if response.status_code == 200:
            data = response.json()
            return data
        else:
            return None
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return None, None

if __name__ == '__main__':
    app.run(debug=True, port=8000)
