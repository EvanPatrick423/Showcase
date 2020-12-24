from django.urls import path
from . import views

app_name="landPage"
urlpatterns = [
    path("", views.index, name='index'),
]
