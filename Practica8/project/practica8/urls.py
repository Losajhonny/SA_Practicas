from django.urls import path
from .views import EstudianteViewSet

urlpatterns = [
    path('practica8', EstudianteViewSet.as_view({
        'get': 'list',
        'post': 'create'
    })),
]