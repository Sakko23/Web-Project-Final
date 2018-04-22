from django.db import models

# Create your models here.

class Movie(models.Model):
    title = models.CharField(max_length=100)
    cover = models.CharField(max_length=100)
    year = models.CharField(max_length=200)
    keywords = models.CharField(max_length=200)
    director = models.CharField(max_length=200)
    video = models.CharField(max_length=600)
    budget = models.IntegerField(default=0)
    revenue = models.IntegerField(default=0)
    about = models.CharField(max_length=400, default="")
    genre = models.CharField(max_length=200, default="")

class Actor(models.Model):
    name = models.CharField(max_length=100)
    avatar = models.CharField(max_length=200)
    gender = models.CharField(max_length=200, default="муж.")
    birth_date = models.CharField(max_length=200, default="08-10-1997")
    birth_place = models.CharField(max_length=200, default="Казахстан")
    about = models.CharField(max_length=500)

class MovieCast(models.Model):
    movie_id = models.IntegerField(default=0)
    actor_id = models.IntegerField(default=0)

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    online = models.IntegerField(default=0);

    