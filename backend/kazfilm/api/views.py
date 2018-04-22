from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework.parsers import JSONParser

from .models import Movie, Actor, User
from .serializers import MovieSerializer, ActorSerializer, UserSerializer
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth.forms import UserCreationForm
# Create your views here.

@csrf_exempt
def movie(request):
	if request.method == "GET":
	    movie = Movie.objects.all()
	    ser = MovieSerializer(movie, many=True)
	    return JsonResponse(ser.data, safe=False)
    

@csrf_exempt
def actor(request):
    if request.method == "GET":
        actor = Actor.objects.all()
        ser = ActorSerializer(actor, many=True)
        return JsonResponse(ser.data, safe=False)

def user(request):
	if request.method == "GET":
	    user = User.objects.all()
	    ser = UserSerializer(user, many=True)
	    return JsonResponse(ser.data, safe=False)

@csrf_exempt
def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        print (form)
        if form.is_valid():
            new_user = form.save()
            return JsonResponse(new_user)
        else:
            return HttpResponse("errpr")
    else:
        return HttpResponse("404.html")

@csrf_exempt
def user_login(request):
    if request.POST:
        username = password = ''
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        print (user)
        if user is not None and user.is_active:
            print("User Login:  Username:" + username + '    Password:' + password)
            login(request, user)
            return JsonResponse({'output' : request.user.username})
        else:
            return JsonResponse({'output' : "Username or Password wrong!"})
    else:
        return JsonResponse({'output' : "404.html"})