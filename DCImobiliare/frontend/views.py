from django.shortcuts import render

# Create your views here.


def sendEmail(request):
    context_instance = RequestContext(request)
    return render(request, 'frontend/index.html')


def index(request):
    return render(request, 'frontend/index.html')
