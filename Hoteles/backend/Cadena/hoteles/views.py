from rest_framework import viewsets
from Cadena.hoteles.models import hoteles 
from Cadena.hoteles.serializers import hotelesSerializers
# Create your views here.

class hotelesViewset(viewsets.ViewSet):
    queryset = hoteles.objects.all()
    serializer_class = hotelesSerializers
    