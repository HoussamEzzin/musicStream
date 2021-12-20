from pytube import YouTube, Search



def download_video_by_keyword(keyword):
    video_information = dict()
    search_result = Search(keyword)
    video = search_result.results[0]
  
    print("Title :", video.title)
    video_information["title"] = video.title
    video_information["author"] = video.author
    video_information["description"] = video.description
    video_information["path"] = "videos/"+video.title

    
    video.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first().download('B://musicStream//music-stream-ui//public//videos')
  
    return video_information