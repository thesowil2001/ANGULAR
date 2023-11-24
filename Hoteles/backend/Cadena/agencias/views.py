
from rest_framework import generics
from Cadena.agencias.models import agencias
from Cadena.agencias.serializers import agenciasSerializers

class agenciasList(generics.ListCreateAPIView):
        queryset = agencias.objects.all()
        serializer_class = agenciasSerializers
        
class agenciasDetail(generics.RetrieveUpdateDestroyAPIView):
        queryset = agencias.objects.all()
        serializer_class = agenciasSerializers
        
