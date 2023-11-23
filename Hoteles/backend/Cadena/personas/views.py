from rest_framework import viewsets
from Cadena.personas.models import personas
from Cadena.personas.serializers import personasSerializers

class personasViewset(viewsets.ViewSet):
        queryset = personas.objects.all()
        serializer_class = personasSerializers
        
