import os
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS
import yaml
from flask import Flask, render_template, send_from_directory, request, jsonify
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
config = yaml.load(open('database.yml'))
client = MongoClient(config['uri'])
db = client['howdy-dev']
CORS(app)

@app.route('/listings', methods=['POST', 'GET'])
def data():
    if request.method == 'POST':
        body = request.json
        productName = body['productName']
        rating = body['rating']

        db['listings'].insert_one({
            "productName": productName,
            "rating": rating
        })

        return jsonify({
            'status': 'Data is posted to MongoDB!',
            'productName': productName,
            'rating': rating
        })

    if request.method == 'GET':
        allData = db['listings'].find()
        dataJson = []
        for data in allData:
            id = data['_id']
            productName = data['productName']
            rating = data['rating']
            dataDict = {
                'id': str(id),
                'productName': productName,
                'rating': rating
            }
            dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)

@app.route('/listings/<string:id>', methods=['GET', 'DELETE'])
def oneItem(id):
    if request.method == 'GET':
        data = db['listings'].find_one({'_id': ObjectId(id)})
        id = data['_id']
        productName = data['productName']
        rating = data['rating']
        dataDict = {
            'id': str(id),
            'productName': productName,
            'rating': rating
        }
        print(dataDict)
        return jsonify(dataDict)

    if request.method == 'DELETE':
        db['listings'].delete_many({'_id': ObjectId(id)})
        print('\n# Deletion successful # \n')
        return jsonify({'status': 'Data id: ' + id + ' is deleted!'})

@app.route('/')
def index():
    return "Works :)", 200
