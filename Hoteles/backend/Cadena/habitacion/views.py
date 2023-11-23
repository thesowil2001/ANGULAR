from rest_framework import viewsets
from Cadena.habitacion.models import habitacion
from Cadena.habitacion.serializers import habitacionSerializers

   
class habitacionViewset(viewsets.ViewSet):
    queryset = habitacion.objects.all()
    serializer_class = habitacionSerializers