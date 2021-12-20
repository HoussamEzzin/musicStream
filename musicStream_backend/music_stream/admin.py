from django.contrib import admin
from .models import Song
# Register your models here.

class SongAdmin(admin.ModelAdmin):
    list_display = ('author','title','description','path','count')
    

admin.site.register(Song, SongAdmin)