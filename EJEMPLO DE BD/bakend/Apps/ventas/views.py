from rest_framework import viewsets
from .models import Venta, DetalleVenta
from .serializers import VentaSerializer, DetalleVentaSerializer

# Create your views here.
class VentaViewset(viewsets.ModelViewset):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer
    
class DetalleVentaViewset(viewsets.ModelViewset):
    queryset = DetalleVenta.objects.all()
    serializer_class = DetalleVentaSerializer