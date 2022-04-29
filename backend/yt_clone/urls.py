from . import views
from django.urls import path


urlpatterns = [
    path(" ", views.yt_comment_get),
    path('<int:pk>', views.yt_comment_prop),

]