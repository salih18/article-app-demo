from rest_framework.viewsets import ModelViewSet
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from django.http import JsonResponse
from article_app.models import Article
from article_app.serializers import ArticleSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated


class ArticleVS(ModelViewSet):

    serializer_class = ArticleSerializer
    queryset = Article.objects.all()

    def get_permissions(self):
     if self.request.method in ['PUT', 'DELETE', 'POST', 'PATCH']:
        return [IsAuthenticated()]
     return [AllowAny()]


    