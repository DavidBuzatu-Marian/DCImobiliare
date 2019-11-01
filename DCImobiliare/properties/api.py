from properties.models import Property, Images
from rest_framework import viewsets, permissions
from .serializers import PropertySerializer
from django.core import serializers
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
# load viewsets


class PropertyViewSet(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PropertySerializer

    def get_queryset(self):
        return self.queryset

    def retrieve(self, request, pk=None):
        queryset = Property.objects.all()
        property = get_object_or_404(queryset, pk=pk)
        serialized_object = serializers.serialize('json', [property, ])
        return HttpResponse(serialized_object)
