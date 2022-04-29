from django.db import models




class Comment(models.Model):
    user = models.ForeignKey()
    video_id = models.CharField(max_length=250)
    text = models.CharField(max_length=300)
    likes = models.IntegerField(max_digits=8)
    dislikes = models.IntegerField(max_digits=8)


class Reply(models.Model):
    user = models.ForeignKey()
    comment = models.ForeignKey()
    text = models.CharField(max_length=300)