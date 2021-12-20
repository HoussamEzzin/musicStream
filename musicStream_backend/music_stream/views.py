from django.shortcuts import render
from rest_framework import serializers, viewsets
from .serializers import SongSerializer
from .models import Song
from music_stream.song_download import download_video_by_keyword, download_video_by_url

# Create your views here.

class SongView(viewsets.ModelViewSet):
    serializer_class = SongSerializer
    queryset = Song.objects.all()
    
def search(request):
    print(request.body)


#still need to pass data from front-end to back-end
# keyword : react to django
# django / get url from keyword
# send path file back to react
    
    
    
