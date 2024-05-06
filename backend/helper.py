import requests
from dotenv import load_dotenv
import os

load_dotenv()
API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")

def get_user_location():
    url = f"https://www.googleapis.com/geolocation/v1/geolocate?key={API_KEY}"
    try:
        response = requests.post(url)
        if response.status_code == 200:
            data = response.json()
            # Extract latitude and longitude from the response
            location = data.get('location')
            if location:
                return location
            else:
                return None, None
        else:
            return None, None
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return None, None

def parse_data(data):
    places = []
    results = data.get('results', [])
    for p in results: 
        temp = {
            'name': p.get('name', 'N/A'),
            'address': p.get('vicinity', 'N/A')
        }
        places.append(temp)
    return places