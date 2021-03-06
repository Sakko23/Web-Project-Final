from rest_framework import serializers
from .models import Movie, Actor, MovieCast, User

class MovieSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = Movie
    fields = "__all__"

class ActorSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = Actor
    fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = User
    fields = "__all__"