from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Comment
from .models import Reply
from .serializer import CommentSerializer
from .serializer import ReplySerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request):
    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)

@api_view(['GET', 'PUT', 'POST'])
@permission_classes([IsAuthenticated])
def yt_comment_prop(request, pk):
    yt_protected = get_object_or_404(Comment, pk=pk)
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'PUT':
        serializer = CommentSerializer(yt_protected, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'GET':
        comments = Comment.objects.filter(comments_id=request.Comment.id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def yt_clone_replies(request):
    
    print(
    'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_replies(request, pk):

    reply = Reply.objects.filter(comment_id=pk)
    serializer = ReplySerializer(reply, many=True)
    return Response(serializer.data)


