from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS
import yaml
from flask import Flask, request, jsonify
from dotenv import load_dotenv
import flask_monitoringdashboard as dashboard

load_dotenv()
app = Flask(__name__)

dashboard.config.init_from(file="config.cfg")


def get_user_ip():
    return request.environ["REMOTE_ADDR"]


dashboard.config.group_by = get_user_ip
dashboard.bind(app)

config = yaml.load(open("database.yml"), Loader=yaml.FullLoader)
client = MongoClient(config["uri"])
db = client["howdy-dev"]
CORS(app)


@app.route("/listings", methods=["POST", "GET"])
def listings():
    if request.method == "POST":
        body = request.json
        product_name = body["productName"]
        product_description = body["productDescription"]
        rating = body["rating"]

        db["listings"].insert_one(
            {
                "productName": product_name,
                "productDescription": product_description,
                "rating": rating,
            }
        )

        return jsonify(
            {
                "status": "Data is posted to MongoDB!",
                "productName": product_name,
                "productDescription": product_description,
                "rating": rating,
            }
        )

    if request.method == "GET":
        all_data = db["listings"].find()
        data_json = []
        for data in all_data:
            product_id = data["_id"]
            product_name = data["productName"]
            product_description = data["productDescription"]
            rating = data["rating"]
            data_dict = {
                "id": str(product_id),
                "productName": product_name,
                "productDescription": product_description,
                "rating": rating,
            }
            data_json.append(data_dict)
        print(data_json)
        return jsonify(data_json)


@app.route("/listings/<item_id>", methods=["GET", "DELETE"])
def one_item(item_id):
    if request.method == "GET":
        data = db["listings"].find_one({"_id": ObjectId(item_id)})
        item_id = data["_id"]
        product_name = data["productName"]
        product_description = data["productDescription"]
        rating = data["rating"]
        data_dict = {
            "id": str(item_id),
            "productName": product_name,
            "productDescription": product_description,
            "rating": rating,
        }
        print(data_dict)
        return jsonify(data_dict)

    if request.method == "DELETE":
        db["listings"].delete_many({"_id": ObjectId(item_id)})
        print("\n# Deletion successful # \n")
        return jsonify({"status": "Data id: " + item_id + " is deleted!"})


@app.route("/")
def index():
    return "Works :)", 200
