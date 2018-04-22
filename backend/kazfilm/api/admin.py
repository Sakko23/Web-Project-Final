from django.contrib import admin

from .models import Movie, Actor, MovieCast, User

admin.site.register(Movie)
admin.site.register(Actor)
admin.site.register(MovieCast)
admin.site.register(User)