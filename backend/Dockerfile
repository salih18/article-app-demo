FROM python:3.9-buster
# Create secret key
RUN cat /dev/urandom | tr -dc 'a-zA-Z0-9!@#$%&*' | fold -w 64 | head -n 1 > SECRET_KEY

# Install build deps, then run `pip install`, then remove unneeded build deps all in a single step. Correct the path to your production requirements file, if needed.
RUN set -ex \
    && apt-get update \
    && apt-get install -y postgresql-client xfonts-base xfonts-75dpi adduser


# Copy in your requirements file
COPY requirements.txt /requirements.txt

RUN set -ex \
    && pip install -U pip \
    && pip install --no-cache-dir -r /requirements.txt

COPY . /app
RUN mkdir -p /app/media/
RUN touch /app/media/test.jpg
RUN chmod 777 -R /app/media/
WORKDIR /app
RUN python manage.py collectstatic --noinput
EXPOSE 8000
RUN useradd -m -s /bin/bash -G sudo user
USER user



