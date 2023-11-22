from rest_framework import viewsets
from Cadena.reservas.models import personas, agencias, reservas
from Cadena.reservas.serializers import personasSerializers, agenciasSerializers, reservasSerializers

class personasViewset(viewsets.ViewSet):
        queryset = personas.objects.all()
        serializer_class = personasSerializers
        
class agenciasViewset(viewsets.ViewSet):
        queryset = agencias.objects.all()
        serializer_class = agenciasSerializers
        
class reservasViewset(viewsets.ViewSet):
        queryset = reservas.objects.all()
        serializer_class = reservasSerializers    