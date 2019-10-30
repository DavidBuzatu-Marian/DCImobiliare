from django.contrib import admin

# Register your models here.
from .models import Property, Images

admin.site.site_header = "DCImobiliare Administrare"
admin.site.site_title = "DCImobiliare Zona Administrare"
admin.site.index_title = "Bine ai venit la zona de administrare"


class ImagesInline(admin.TabularInline):
    model = Images
    extra = 3


class PropertyAdmin(admin.ModelAdmin):
    inlines = [ImagesInline]


admin.site.register(Property, PropertyAdmin)
