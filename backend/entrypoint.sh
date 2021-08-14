#!/bin/bash
gunicorn wsgi:app -w 1 -b :5000 --capture-output --log-level debug
