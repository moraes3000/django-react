from django.contrib import admin

# Register your models here.
from core.models import List,Item

admin.site.register(List)
admin.site.register(Item)