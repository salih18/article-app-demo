from django.db import models
from utils.validation import validate_image
from django.utils.translation import ugettext_lazy as _
from core.models import User

def explantion_images(instance, filename):
    return '{0}/{1}'.format('article_', filename)

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=50)
    text = models.TextField(max_length=10000)
    active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)
    hero = models.ImageField(upload_to=explantion_images,
                             max_length=1500000,
                             blank=True,
                             null=True,
                             verbose_name=_('Hero Image'),
                             validators=[validate_image])
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name=_('User'), related_name='articles', default=False)


    def __str__(self):
        return self.title     

    class Meta:
        verbose_name= _('Article')
        verbose_name_plural = _('Articles')
