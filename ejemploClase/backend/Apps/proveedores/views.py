from rest_framework import viewsets
from .models import Proveedor, TipoProducto
from .serializers import ProveedorSerializer, TipoProductoSerializer

# Create your views here.
class ProveedorViewSet(viewsets.ModelViewSet):
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer
    
class TipoProductoViewSet(viewsets.ModelViewSet):
    queryset = TipoProducto.objects.all()
    serializer_class = TipoProductoSerializer