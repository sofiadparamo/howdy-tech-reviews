FROM python:3.8-slim-buster

RUN mkdir /howdy-tech-reviews
COPY requirements.txt /howdy-tech-reviews
WORKDIR /howdy-tech-reviews
RUN pip3 install -r requirements.txt

COPY . /howdy-tech-reviews

RUN chmod u+x ./entrypoint.sh
ENTRYPOINT ["sh", "./entrypoint.sh"]
