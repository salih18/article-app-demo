from .base import *

import sys
import os

DEBUG = False
ALLOWED_HOSTS = ['localhost', os.environ.get('DJANGO_HOST', 'smagazine.salihsert.com'), "smagazine.salihsert.com", "smagazine-api.salihsert.com" ]

with open('/SECRET_KEY', 'r') as f:
    SECRET_KEY = f.read()

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'console': {
            # exact format is not important, this is the minimum information
            'format': '%(asctime)s %(name)-12s %(levelname)-8s %(message)s',
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'console',
            'stream': sys.stdout,
            'level': 'DEBUG'

        },
    },
    'loggers': {
        # root logger
        '': {
            'level': 'DEBUG',
            'handlers': ['console'],
        },
    },
}

CORS_ALLOW_CREDENTIALS = True

CORS_ALLOWED_ORIGIN_REGEXES = [
    r"^https://\w+\.salihsert\.com$",
]
CORS_ALLOWED_ORIGINS = [
    "http://backend:8000",  # allow local docker containers access
    "http://api:8000",  # allow local docker containers access
    "https://smagazine.salihsert.com",

]



WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': DEBUG,
        'BUNDLE_DIR_NAME': '',  # must end with slash
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.json'),
    }
}

