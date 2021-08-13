from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS
import yaml
from flask import Flask, request, jsonify
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
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

#DB for the people opinions/posts
@app.route("/opinion", methods=["POST", "GET"])
def opinions_list():
    if request.method == "POST":
        body = request.json
        product_name = body["productName"]
        product_opinion = body["productOpinion"]
        product_link = body["poductLink"]
        _user = body["user"]
        rating = body["rating"]

        db["opinions"].insert_one(
            {
                "productName": product_name,
                "productOpinion": product_opinion,
                "productLink": product_link,
                "_user": user,
                "rating": rating,
            }
        )
        return jsonify(
            {
                "status": "Data is posted to MongoDB!",
                "productName": product_name,
                "productOpinion": product_opinion,
                "productLink": product_link,
                "_user": user,
                "rating": rating,
            }
        )

    if request.method == "GET":
        all_data = db["opinions"].find()
        data_json = []
        for data in all_data:
            product_id = data["_id"]
            product_name = data["productName"]
            product_opinion = data["productOpinion"]
            product_link = data["productLink"]
            user = data["_user"]
            rating = data["rating"]
            data_dict = {
                "id": str(product_id),
                "productName": product_name,
                "productOpinion": product_opinion,
                "productLink": product_link,
                "_user": user,
                "rating": rating,
            }
            data_json.append(data_dict)
        print(data_json)
        return jsonify(data_json)


@app.route("/post/<item_id>", methods=["GET"])
def one_opinion(item_id):
    if request.method == "GET":
        opinions_of_product = []
        product = db["opinions"].find({"_id": ObjectId(item_id)})
        item_id = product_name = product_opinion = product_link = user = rating = []
        for opinion in product:
            item_id.append(opinion["_id"])
            product_name.append(opinion["productName"])
            product_opinion.append(opinion["productOpinion"])
            product_link.append(opinion["productLink"])
            user.append(opinion["_user"])
            rating.append(opinion["rating"])
            data_dict = {
                "id": str(item_id),
                "productName": product_name,
                "productOpinion": product_opinion,
                "productLink": product_link,
                "_user": user,
                "rating": rating,
            }
            print(data_dict)
            opinions_of_product.append(jsonify(data_dict))
        return opinions_of_product

@app.route("/post/<item_id>", methods=["DELETE"])
def del_post(item_id, user):
    db["opinions"].delete_many({"_id": ObjectId(item_id),"_user": user})
    print("\n# Deletion successful # \n")
    return jsonify({"status": "Data id: " + item_id + "of user " + user + " is deleted!"})
