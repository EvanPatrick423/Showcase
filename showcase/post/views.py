from django.shortcuts import render
from django.template import loader
# Create your views here.
from django.http import HttpResponse
from .models import Post


def index(request):
    latest_post_list = Post.objects.order_by('-pub_date')[:5]
    template = loader.get_template('post/index.html')
    context = {
        'latest_post_list': latest_post_list,
    }
    return HttpResponse(template.render(context, request))

def detail(request, post_id):
    return HttpResponse("You're looking at post %s" % post_id)

def reply(request, post_id):
    response = "You're looking at the reply of %s post"
    return HttpResponse(response % post_id)

def likes(request, post_id):
    return HttpResponse("You're looking at the likes of %s post" % post_id)
