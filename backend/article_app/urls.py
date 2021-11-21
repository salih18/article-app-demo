from django.urls import path, include
from rest_framework.routers import DefaultRouter
from article_app.views import ArticleVS


router = DefaultRouter()
router.register('', ArticleVS, basename='article')

urlpatterns = [
    path('', include(router.urls)),
]
 