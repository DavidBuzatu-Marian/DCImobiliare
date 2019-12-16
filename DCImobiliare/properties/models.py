from django.db import models
from django.contrib.auth.models import User
import os
from django.conf import settings
from django.template.defaultfilters import slugify


def get_image_name(instance, filename):
    title = instance.title
    slug = slugify(title)
    return "post_images/%s-%s" % (slug, filename)


class Property(models.Model):
    DECOMODATED = 'Decomandat'
    HALFACCOMODATED = 'Semidecomandat'
    UNACCOMODATED = 'Nedecomandat'

    ACCOMODATION_CHOICES = [
        (DECOMODATED, 'decomandat'),
        (UNACCOMODATED, 'nedecomandat'),
        (HALFACCOMODATED, 'semidecomandat'),
    ]

    SALE = 'Vanzare'
    RENT = 'Inchiriere'
    SALE_RENT = 'Vanzare/ Inchiriere'

    SALE_CHOICES = [
        (SALE, 'Vanzare'),
        (RENT, 'Inchiriere'),
        (SALE_RENT, 'Vanzare/ Inchiriere'),
    ]

    nrViews = models.IntegerField(default=0)
    title = models.CharField(max_length=150)
    details = models.CharField(max_length=500)
    sale_type = models.CharField(
        max_length=22, choices=SALE_CHOICES, default=SALE)
    zone = models.CharField(default="Zona", max_length=100)
    coordinatesLatitude = models.FloatField(default="0")
    coordinatesLongitude = models.FloatField(default="0")
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
    owner = models.ForeignKey(
        User, related_name="properties", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    image_presentation = models.FileField(
        upload_to=get_image_name, verbose_name='Image', default="")

    def __str__(self):
        return self.title


class Images(models.Model):
    property = models.ForeignKey(Property, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    image = models.FileField(upload_to=get_image_name, verbose_name='Image')

    # def image(self, obj):
    #     return format_html('<img src="{}" style="width: 130px; \
    #                        height: 100px"/>'.format(obj.img))
    # image.short_description = 'Image'
    # image.allow_tags = True
