from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def index(request):
    template = loader.get_template('landPage/index.html')
    return render(request, 'landPage/index.html')

def resume(request):
    template = loader.get_template('landPage/static/landPage/Evan Patrick Resume Dev.pdf')
    return render(request, 'landPage/static/landPage/Evan Patrick Resume Dev.pdf')
