from flask import Flask, render_template, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/post", methods = ['POST'])
def post():
    # if request.method == "GET":
    #     return jsonify(recipes)
    if request.method == "POST":
        content = request.get_json()
        print("Nhận: ", content)
        return jsonify("OK")

if __name__ == '__main__':
    app.run(host='localhost', port=8989, debug=True)
