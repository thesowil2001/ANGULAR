from rest_framework import viewsets
from Cadena.hoteles.models import hoteles , categoria, habitacion
from Cadena.hoteles.serializers import hotelesSerializers,categoriaSerializers,habitacionSerializers
# Create your views here.

class hotelesViewset(viewsets.ViewSet):
    queryset = hoteles.objects.all()
    serializer_class = hotelesSerializers
    
class categoriaViewset(viewsets.ViewSet):
    queryset = categoria.objects.all()
    serializer_class = categoriaSerializers
    
class habitacionViewset(viewsets.ViewSet):
    queryset = habitacion.objects.all()
    serializer_class = habitacionSerializers