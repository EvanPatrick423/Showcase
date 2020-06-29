from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:post_id>/', views.detail, name='detail'),
    path('<int:question_id>/reply', views.reply, name='detail'),
    path('<int:post_id>/likes/', views.likes, name='vote'),
]
