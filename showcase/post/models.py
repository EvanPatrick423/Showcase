

from django.db import models
from django.utils import timezone
import datetime
# Create your models here.
class Post(models.Model):
    post_title = models.CharField(max_length=50)
    post_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.post_title

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

class Reply(models.Model):
    Post = models.ForeignKey(Post, on_delete=models.CASCADE)
    reply_text = models.CharField(max_length=1000)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)

    def __str__(self):
        return self.Reply_text
