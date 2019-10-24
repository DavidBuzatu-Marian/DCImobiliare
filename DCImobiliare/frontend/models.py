from django.db import models


class Email(models.Model):
    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    email = models.CharField(max_length=50)
    message = models.CharField(max_length=300)
