from django.urls import path

from . import views

app_name='theodinproject'
urlpatterns = [
    path('', views.index, name='index'),
    path('fizzbizz', views.fizzbizz, name='fizzbizz'),
    path('rockpaperscissors', views.rockpaperscissors, name='rockpaperscissors'),
    path('DOM', views.DOM, name='DOM'),
    path('javascript30', views.javascript30, name='javascript30'),
    path('keyboardDrumMachine', views.keyboardDrumMachine, name='keyboardDrumMachine')
]
