from django.urls import path
from . import views

urlpatterns = [
    path('mail', views.sendEmail, name="sendEmail"),
    path('', views.index)
]
