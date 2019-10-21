from django.db import models
from django.contrib.auth.models import User


class Property(models.Model):
    DECOMODATED = 'DT'
    HALFACCOMODATED = 'HAC'
    UNACCOMODATED = 'NAC'

    ACCOMODATION_CHOICES = [
        (DECOMODATED, 'decomandat'),
        (UNACCOMODATED, 'nedecomandat'),
        (HALFACCOMODATED, 'semidecomandat'),
    ]

    title = models.CharField(max_length=150)
    details = models.CharField(max_length=500)
    nr_rooms = models.IntegerField()
    nr_kitchens = models.IntegerField()
    nr_bathrooms = models.IntegerField()
    surface_mp = models.IntegerField()
    accomodated = models.CharField(
        max_length=10, choices=ACCOMODATION_CHOICES, default=DECOMODATED)
    confort = models.CharField(max_length=10)
    floor = models.CharField(max_length=100)
    year = models.IntegerField()
    nr_parking_spots = models.IntegerField()
    nr_balconies = models.IntegerField()
    price = models.IntegerField(default=0)
    image = models.ImageField(upload_to='post_images')
    owner = models.ForeignKey(
        User, related_name="properties", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
