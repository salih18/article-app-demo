from .base import *

import sys

DEBUG = True

SECRET_KEY = '-p17lce5#_!p#s5gt^93uj4dzvexawhh1x+f@%v!2lx6&ewkws'

ALLOWED_HOSTS = ['*']

INTERNAL_IPS = ['127.0.0.1','::1','172.18.0.1']

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
        'root': {
            'level': 'DEBUG',
            'handlers': ['console'],
        },
    },
}

CORS_ALLOW_ALL_ORIGINS = True