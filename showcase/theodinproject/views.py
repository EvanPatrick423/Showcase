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

def javascript30(request):
    template = loader.get_template('theodinproject/javascript30/javascript30.html')
    return render(request, 'theodinproject/javascript30/javascript30.html')

def keyboardDrumKit(request):
    template = loader.get_template('theodinproject/javascript30/keyboardDrumKit/keyboardDrumKit.html')
    return render(request, 'theodinproject/javascript30/keyboardDrumKit/keyboardDrumKit.html')

def etchASketch (request):
    template = loader.get_template('theodinproject/etchASketch.html')
    return render(request, 'theodinproject/etchASketch.html')

def calculator (request):
    template = loader.get_template('theodinproject/calculator.html')
    return render(request, 'theodinproject/calculator.html')

def library (request):
    template = loader.get_template('theodinproject/odin-projects/library.html')
    return render(request, 'theodinproject/odin-projects/library.html')

def ticTacToe (request):
    template = loader.get_template('theodinproject/odin-projects/tic-tac-toe.html')
    return render(request, 'theodinproject/odin-projects/tic-tac-toe.html')

def newLibrary(request):
    template = loader.get_template('theodinproject/odin-projects/newLibrary.html')
    return render(request, 'theodinproject/odin-projects/newLibrary.html')

"""
def script(request):
    template = loader.get_template('')
    return render(request, '')
"""
