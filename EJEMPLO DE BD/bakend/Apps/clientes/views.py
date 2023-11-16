from rest_framework import viewsets
from .models import cliente, Telefono
from .serialiazers import ClienteSerializer, TelefonoSerializer
# Create your views here.
class ClientesViewsets(viewsets.ModelViewSet):
    queryset = cliente.objects.all()
    serializer_class = ClienteSerializer
    
class TelefonoViewsets(viewsets.ModelViewSet):
    queryset = Telefono.objects.all()
    serializer_class = TelefonoSerializer