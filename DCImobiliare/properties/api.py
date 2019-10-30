from properties.models import Property, Images
from rest_framework import viewsets, permissions
from .serializers import PropertySerializer

# load viewsets


class PropertyViewSet(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PropertySerializer

    def get_queryset(self):
        return self.queryset
