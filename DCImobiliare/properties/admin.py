from django.contrib import admin

# Register your models here.
from .models import Property

admin.site.site_header = "DCImobiliare Administrare"
admin.site.site_title = "DCImobiliare Zona Administrare"
admin.site.index_title = "Bine ai venit la zona de administrare"

admin.site.register(Property)
