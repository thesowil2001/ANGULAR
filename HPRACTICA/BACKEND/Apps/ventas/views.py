from rest_framework import viewsets
from Apps.ventas.models import ventas, DetalleVenta
from .serializers import VentasSerializers,DetalleVentaSerializers

# Create your views here.

class VentasViewset(viewsets.ModelViewSet):
    queryset =  ventas.objects.all()
    serializer_class = VentasSerializers
    
class DetalleVentaViewset(viewsets.ModelViewSet):
    queryset = DetalleVenta.objects.all()
    serializer_class = DetalleVentaSerializers