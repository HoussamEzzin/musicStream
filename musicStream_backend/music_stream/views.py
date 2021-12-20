from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework import serializers, viewsets
from .serializers import SongSerializer
from .models import Song
from music_stream.song_download import download_video_by_keyword
import json
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

class SongView(viewsets.ModelViewSet):
    serializer_class = SongSerializer
    queryset = Song.objects.all()

@csrf_exempt
def search(request):
    
    input_data = request.body.decode('utf-8')
    video_info = download_video_by_keyword(input_data)
    print(video_info)
    print("descri :", video_info["description"])
    
    song = Song.objects.create(author= video_info["author"],
                               title= video_info["title"],
                               description=video_info["description"],
                               path = video_info["path"],
                               count = 0)
    song.save()
    return JsonResponse({
        'test': 'just testing'
    })


#still need to pass data from front-end to back-end
# keyword : react to django
# django / get url from keyword
# send path file back to react
    
    
    
