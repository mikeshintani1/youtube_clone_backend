from . import views
from django.urls import path


urlpatterns = [
    path('', views.get_all_comments),
    path('<int:pk>/', views.yt_comment_prop),
]