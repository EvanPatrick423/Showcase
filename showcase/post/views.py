from django.shortcuts import render, get_object_or_404
from django.template import loader
# Create your views here.
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from .models import Post, Reply
from django.core.exceptions import ObjectDoesNotExist


def index(request):
    latest_post_list = Post.objects.order_by('-pub_date')[:5]
    context = {'latest_post_list': latest_post_list}
    return render(request, 'post/index.html', context)

def detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    return render(request, 'post/detail.html', {'post':post})

def reply(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    return render(request, 'post/results.html', {'post': post})

def likes(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    try:
        selected_reply = post.reply_set.get(pk=request.POST['reply'])
    except (KeyError, reply.DoesNotExist):
        # Redisplay the post voting form.
        return render(request, 'post/detail.html', {
        'post': post,
        'error_message': "You didn't select a response.",
        })
    else:
        selected_reply.likes +=1
        selected_reply.save()
        # Alwasy return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('post:likes', args=(post.id,)))
