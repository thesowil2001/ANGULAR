from rest_framework import viewsets
from Cadena.reservas.models import reservas
from Cadena.reservas.serializers import reservasSerializers

        
class reservasViewset(viewsets.ViewSet):
        queryset = reservas.objects.all()
        serializer_class = reservasSerializers    