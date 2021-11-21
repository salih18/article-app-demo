from django.db import models
from utils.validation import validate_image
from django.utils.translation import ugettext_lazy as _

def explantion_images(instance, filename):
    return '{0}/{1}'.format('article_', filename)

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=50)
    text = models.CharField(max_length=500)
    active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    hero = models.ImageField(upload_to=explantion_images,
                             max_length=1500000,
                             blank=True,
                             null=True,
                             verbose_name=_('Hero Image'),
                             validators=[validate_image])

    def __str__(self):
        return self.title     

    class Meta:
        verbose_name= _('Article')
        verbose_name_plural = _('Articles')
