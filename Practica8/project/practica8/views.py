from rest_framework import viewsets, status
from rest_framework.response import Response

from .models import Estudiante
from .serializers import EstudianteSerializer

# Create your views here.
class EstudianteViewSet(viewsets.ViewSet):
    def list(self, request):
        est = Estudiante.objects.all()
        ser = EstudianteSerializer(est, many=True)
        return Response(ser.data)

    def create(self, request):
        ser = EstudianteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(ser.data, status=status.HTTP_201_CREATED)
