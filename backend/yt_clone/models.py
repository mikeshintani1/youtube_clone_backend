from django.db import models
from authentication.models import User

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length=250)
    text = models.CharField(max_length=300)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)


class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, blank=True, null=True, on_delete=models.CASCADE)
    text = models.CharField(max_length=300)