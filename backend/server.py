from flask import Flask, request
import requests
from dotenv import load_dotenv
import os
import random 

from helper import get_user_location, parse_data

app = Flask(__name__)
orders = []

load_dotenv()
API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")
location = get_user_location()
lat = location['lat']
lng = location['lng']

@app.route('/')
def find_nearby_restaurants():
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
    
@app.route('/sweets')
def find_nearby_sweets():
    keywords = 'coffee|boba|ice cream|cake|cookies'
    url = f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?&keyword={keywords}&location={lat},{lng}&radius=5000&&key={API_KEY}"

    try:
        response = requests.get(url)
        data = response.json()
        places = parse_data(data)
        next_page_token = data.get('next_page_token')
        while next_page_token:
            url_with_token = f"{url}&pagetoken={next_page_token}"
            response = requests.get(url_with_token)
            data = response.json()
            places = places + parse_data(data)
            next_page_token = data.get('next_page_token')

        for p in places: 
            print(p)
        return places
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return None, None
    
@app.route('/orders')
def getorders():
    print(orders)
    return orders

@app.route('/order-search', methods=['POST'])
def ordersearch():
    data = request.json
    query = data.get('query')

    if query == '':
        return orders
    
    filtered_orders = []
    for o in orders:
        print(o['place'])
        print(query)
        if o['name'] == query or o['place'] == query:
            filtered_orders.append(o)
    return filtered_orders

@app.route('/create-order', methods=['POST'])
def createorder():
    data = request.json
    order = {}
    order['name'] = data.get('name')
    order['place'] = data.get('place')
    order['price'] = data.get('price')
    order['details'] = data.get('details')
    orders.append(order)
    return orders

@app.get('/randomizer')
def get_random_sweet():
    keywords = 'coffee|boba|ice cream|cake|cookies'
    url = f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?&keyword={keywords}&location={lat},{lng}&radius=5000&&key={API_KEY}"

    try:
        response = requests.get(url)
        data = response.json()
        places = parse_data(data)
        next_page_token = data.get('next_page_token')
        while next_page_token:
            url_with_token = f"{url}&pagetoken={next_page_token}"
            response = requests.get(url_with_token)
            data = response.json()
            places = places + parse_data(data)
            next_page_token = data.get('next_page_token')

        r_place = random.choice(places)
        return r_place
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return None, None

if __name__ == '__main__':
    app.run(debug=True, port=8000)
