from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import loader

def index(request):
    template = loader.get_template('theodinproject/index.html')
    return render(request, 'theodinproject/index.html')

def fizzbizz(request):
    template = loader.get_template('theodinproject/fizzbizz.html')
    return render(request, 'theodinproject/fizzbizz.html')

def rockpaperscissors(request):
    template = loader.get_template('theodinproject/rockpaperscissors.html')
    return render(request, 'theodinproject/rockpaperscissors.html')

def DOM(request):
    template = loader.get_template('theodinproject/DOM.html')
    return render(request, 'theodinproject/DOM.html')
