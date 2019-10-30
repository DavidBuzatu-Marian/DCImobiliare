from rest_framework import routers
from .api import PropertyViewSet

router = routers.DefaultRouter()
router.register('api/properties', PropertyViewSet, 'properties')

urlpatterns = router.urls
