from flask import Flask, send_from_directory, jsonify
from os import path

import sys
path1 = path.dirname(path.dirname(path.abspath(__file__)))

if path1 not in sys.path:
    sys.path.append(path1)

from project.poloniex_api import Poloniex
from flask_cors import cross_origin

assetsPath = path.join(path.abspath(path.dirname("../public/assets/")))

app = Flask(__name__, static_folder=assetsPath)


@app.route('/')
def index():
    return send_from_directory(assetsPath, "index.html")


@app.route('/poloniex')
@cross_origin()
def poloniex():
    my_polo = Poloniex(
        API_KEY='',
        API_SECRET=''
    )

    ticker = my_polo.returnTicker()

    return jsonify(ticker)


@app.errorhandler(404)
def page_not_found(e):
    return send_from_directory(assetsPath, "index.html")


if __name__ == '__main__':
    app.run(debug=True)
