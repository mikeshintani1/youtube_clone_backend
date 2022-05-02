
from rest_framework import serializers
from .models import Comment
from .models import Reply


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields= ['id', 'user', 'video_id', 'text', 'likes', 'dislikes']
        depth = 2
        

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields= ['id', 'user', 'comment', 'text']
        
        
        


