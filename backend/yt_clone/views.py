from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import filters
from .models import Comment
from .models import Reply
from .serializer import CommentSerializer
from .serializer import ReplySerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes


@api_view(['GET'])
@permission_classes([AllowAny])
def yt_comment_get(request, pk):

    comment_pk = get_object_or_404(Comment, pk=pk)
    if request.method == 'GET':
        serializer = CommentSerializer(comment_pk)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'PUT', 'POST'])
@permission_classes([IsAuthenticated])
def yt_comment_prop(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'PUT':
        serializer = CommentSerializer(user, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        comments = Comment.objects.filter(user_id=request.user.id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        reply = Reply.objects.filter(user_id=request.user.id)
        serializer = ReplySerializer(reply, many=True)
        return Response(serializer.data)
