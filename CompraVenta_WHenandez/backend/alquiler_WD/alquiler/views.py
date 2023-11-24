from rest_framework import viewsets
from alquiler_WD.alquiler.models import alquiler
from alquiler_WD.alquiler.serializers import alquilerSerializers
from django.shortcuts import render


# Create your views here.

class alquilerViewset(viewsets.ModelViewSet):
    queryset =  alquiler.objects.all()
    serializer_class = alquilerSerializers
    
    
    def get(self, request, pk, format=None):
        cliente = self.get_object(pk)
        serializer = alquilerSerializers(cliente)