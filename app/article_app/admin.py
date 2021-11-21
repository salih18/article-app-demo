from django.contrib import admin
from .models import (Article)

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    readonly_fields = ('id', )
    list_display = ('title', 'text')
