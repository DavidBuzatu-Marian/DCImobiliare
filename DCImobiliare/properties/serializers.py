from rest_framework import serializers
from DCImobiliare.properties.models import Property, Images


class ImagesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Images
        fields = '__all__'


class PropertySerializer(serializers.ModelSerializer):
    images = ImagesSerializer(many=True, source='images_set')

    class Meta:
        model = Property
        fields = '__all__'
