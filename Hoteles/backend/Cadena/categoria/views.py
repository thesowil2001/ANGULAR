from rest_framework import generics
from Cadena.categoria.models import categoria
from Cadena.categoria.serializers import categoriaSerializers

class categoriaList(generics.ListCreateAPIView):
        queryset = categoria.objects.all()
        serializer_class = categoriaSerializers
        
class categoriaDetail(generics.RetrieveUpdateDestroyAPIView):
        queryset = categoria.objects.all()
        serializer_class = categoriaSerializers
        
