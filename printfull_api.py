import requests as rq 
from flask import Flask, jsonify
import firebase_admin
from firebase_admin import firestore
import os


cred_obj = firebase_admin.credentials.Certificate('/Users/kaival/Documents/GitHub/E-commerce/e-com-ti-firebase-adminsdk-83ps5-820ac1e4ca.json')
default_app = firebase_admin.initialize_app(cred_obj, {
	'databaseURL':"https://e-com-ti-default-rtdb.europe-west1.firebasedatabase.app"
	})

db = firestore.client()
users_ref = db.collection(u'Print Full Products').document(u"Product_list")

headers = {
        'Authorization': 'Bearer khpaNGaiMdiwtWKQyHcIjq421UCMiw4qHJWYUYTb',
        'X-PF-Store-Id': "10149461"
        }

response = rq.request("GET", "https://api.printful.com/store/products", headers=headers)
data = response.json()
total_products=data["paging"]["total"]


for i in range(total_products):
    indi_product_id=str(data["result"][i]["id"])
    indi_product_response = rq.request("GET", "https://api.printful.com/store/products/"+indi_product_id, headers=headers)
    indi_product_data = indi_product_response.json()
    db.collection(u'Print Full Products').document(u"p_"+indi_product_id).set(indi_product_data)
    print("done adding data of",indi_product_id,"from API to Firestore")

# app = Flask(__name__)

# @app.route('/')
# def dsd():
#     headers = {
#         'Authorization': 'Bearer khpaNGaiMdiwtWKQyHcIjq421UCMiw4qHJWYUYTb',
#         'X-PF-Store-Id': "10149461"
#         }
#     response = rq.request("GET", "https://api.printful.com/store/products", headers=headers)
#     data = response.json()

#     #users_ref.set(data)
#     return jsonify(data)

# if __name__ == '__main__':
#     pass
#     #app.run()