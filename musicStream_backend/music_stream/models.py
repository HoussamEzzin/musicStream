from django.db import models

# Create your models here.

class Song(models.Model):
    url = models.TextField()
    title = models.CharField(max_length=120)
    description = models.TextField()
    path = models.TextField()
    count = models.IntegerField()
    
    def _str_(self):
        return self.title
    
    
