FROM python:3
RUN mkdir -p /app

RUN apt-get update && apt-get upgrade -y
RUN pip install --upgrade pip

COPY ./requirements.txt /app
COPY ./app.py /app
COPY ./uwsgi.ini /app
COPY ./assets /app/assets/
COPY ./templates /app/templates/

RUN pip install --no-cache-dir -r /app/requirements.txt

CMD ["uwsgi", "--ini", "/app/uwsgi.ini"]
