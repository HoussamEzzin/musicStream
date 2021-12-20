from pytube import YouTube, Search



def download_video_by_keyword(keyword):
    search_result = Search(keyword)
    search_result.results[0].streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first().download('Data')
    

def download_video_by_url(url):
    yt = YouTube(url)
    yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first().download('Data')
        