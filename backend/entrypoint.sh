#!/bin/bash
gunicorn wsgi:app -w 1 -b :80 --capture-output --log-level debug
