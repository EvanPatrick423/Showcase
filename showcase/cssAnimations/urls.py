from django.urls import path
from . import views

app_name='cssAnimations'
urlpatterns = [
    path('', views.index, name='index'),
]
