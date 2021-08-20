import requests
import pytest

def test_index():
    try:
        response = requests.get("https://howdytech.duckdns.org");
        assert response.status_code == 200
        print("Testing Index Page: PASS")
    except requests.exceptions.RequestException as e:
        print("Testing Index Page: FAIL")
        raise SystemExit(e)

def test_database():
    try:
        response = requests.get("http://howdytech.duckdns.org:5000");
        assert response.status_code == 200
        print("Testing Database: PASS")
    except requests.exceptions.RequestException as e:
        print("Testing Database: FAIL")
        raise SystemExit(e)

test_index()
test_database()
