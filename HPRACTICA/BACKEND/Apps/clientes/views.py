from rest_framework import viewsets
from Apps.clientes.models import Cliente, Telefono
from .serializers import ClienteSerializers, TelefonoSerializers

class ClienteViewset(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializers
    
class TelefonoViewset(viewsets.ModelViewSet):
    queryset = Telefono.objects.all()
    serializer_class = TelefonoSerializers
