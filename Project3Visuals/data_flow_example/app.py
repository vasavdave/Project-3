from bs4 import BeautifulSoup
from flask import Flask, render_template

import pandas as pd
import psycopg2

# Create an instance of our Flask app.
app = Flask(__name__)

postgres = 'postgres'
db_name = 'Real_Estate'

# Create connection variable
postgres_url = f"postgresql://postgres:{postgres}@127.0.0.1:5432/{db_name}"

# Pass connection to the pymongo instance.
conn = psycopg2.connect(postgres_url)


# Index Page Route


@app.route("/")
def index():
    return render_template("index.html")

# states Page Route


@app.route("/statesPage")
def state():
    return render_template("statesPage.html")

# Metro Page Route


@app.route("/metroPage")
def metro():
    return render_template("metroPage.html")


if __name__ == "__main__":
    app.run(debug=True)
