from django.urls import path
from . import views

urlpatterns = [
    path('api/sendEmail', views.sendEmail),
    path('', views.index)
]
