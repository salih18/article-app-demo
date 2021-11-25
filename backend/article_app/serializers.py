from rest_framework import serializers
from article_app.models import Article

class ArticleSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source= 'user.id', read_only=True)
    class Meta:
        model = Article
        fields = "__all__"
