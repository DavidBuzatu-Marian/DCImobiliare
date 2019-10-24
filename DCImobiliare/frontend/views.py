from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from django.core.mail import BadHeaderError, send_mail
from django.http import HttpResponse
import json


@ensure_csrf_cookie
def sendEmail(request):
    data = json.loads(request.body)
    subject = 'Informatii client nou'
    from_email = data['email']
    message = data['message'] + from_email
    try:
        send_mail(
            subject,
            message,
            'detectivul_08@yahoo.com',
            ['bboy_efno@yahoo.com'],
            fail_silently=False,
        )
    except BadHeaderError:
        return HttpResponse('Invalid header found.')
    return render(request, 'frontend/index.html')


def index(request):
    return render(request, 'frontend/index.html')
