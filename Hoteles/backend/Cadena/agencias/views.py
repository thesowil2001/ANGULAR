from rest_framework import viewsets
from Cadena.agencias.models import agencias
from Cadena.agencias.serializers import agenciasSerializers

class agenciasViewset(viewsets.ViewSet):
        queryset = agencias.objects.all()
        serializer_class = agenciasSerializers
        
