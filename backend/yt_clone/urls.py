from . import views
from django.urls import path


urlpatterns = [
    path('', views.get_all_comments),
    path('<int:pk>/', views.yt_comment_prop),
    path('replies/<int:pk>/', views.get_all_replies),
    path('<int:pk>/replies/', views.yt_clone_replies),
]