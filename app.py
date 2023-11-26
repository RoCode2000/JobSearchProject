import os
import csv
import datetime
import pytz
import requests
import subprocess
import urllib
import uuid


from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session




# Configure application
app = Flask(__name__)

# Custom filter


# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
##db = SQL("sqlite:///finance.db")

@app.route("/")
def index():
    return render_template(index.html)