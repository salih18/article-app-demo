from rest_framework import serializers
from article_app.models import Article

class ArticleSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Article
        fields = "__all__"
