from rest_framework import viewsets
from Cadena.categoria.models import categoria
from Cadena.categoria.serializers import categoriaSerializers

class categoriaViewset(viewsets.ViewSet):
    queryset = categoria.objects.all()
    serializer_class = categoriaSerializers