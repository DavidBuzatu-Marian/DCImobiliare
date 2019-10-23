from django.core.mail import send_mail
import json


class sendEmail():
    def post(self, request):
        data = json.loads(request.body.decode('utf-8'))
        send_mail(
            'Subject here',
            data['message'],
            data['email'],
            ['david.efno@gmail.com'],
            fail_silently=False,
        )
