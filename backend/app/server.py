import os
from flask import Flask, render_template, send_from_directory, request
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)


@app.route('/')
def index():
    return "Works :)", 200
