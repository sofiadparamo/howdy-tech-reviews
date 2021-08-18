import requests
import pytest

def test_index():
    response = requests.get("https://howdytech.duckdns.org");
    assert response.status_code == 200

def test_database():
    response = requests.get("http://howdytech.duckdns.org:5000");
    assert response.status_code == 200
