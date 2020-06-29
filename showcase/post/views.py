from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the post index.")

def detail(request, post_id):
    return HttpResponse("You're looking at post %s" % post_id)

def reply(request, post_id):
    response = "You're looking at the reply of %s post"
    return HttpResponse(response % post_id)

def likes(request, post_id):
    return HttpResponse("You're looking at the likes of %s post" % post_id)
