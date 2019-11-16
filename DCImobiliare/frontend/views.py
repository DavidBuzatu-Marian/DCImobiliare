from django.shortcuts import render
from django.core.mail import EmailMessage
from django.views.decorators.csrf import ensure_csrf_cookie
from django.core.mail import BadHeaderError
from django.http import HttpResponse
import json


@ensure_csrf_cookie
def sendEmail(request):
    data = json.loads(request.body)
    subject = 'Informatii client nou'
    from_email = data['email']
    message = "Nume: " + data['name'] + "\n\n" + data['message'] + "\n\n Email: " + \
        from_email + "\n\n Număr telefon: " + data['pNumber']
    try:
        email = EmailMessage(
            subject,
            message,
            'david.efno@gmail.com',
            ['bboy_efno@yahoo.com']
        ).send()
    except BadHeaderError:
        return HttpResponse('Invalid header found.')
    return render(request, 'frontend/index.html')


def index(request):
    return render(request, 'frontend/index.html')
