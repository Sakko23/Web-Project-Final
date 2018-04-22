from django.urls import path
from . import views

urlpatterns = [
    path('movie/', views.movie),
    path('actor/', views.actor),
    path('user/', views.user),
    path('register/', views.register),

]