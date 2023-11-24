from rest_framework import viewsets
from Apps.proveedores.models import proveedor, tipoProducto
from .serializers import ProveedorSerializers,TipoProductoSerializers

# Create your views here.

class ProveedorViewset(viewsets.ModelViewSet):
    queryset = proveedor.objects.all()
    serializer_class = ProveedorSerializers
    
class TipoProductoViewset(viewsets.ModelViewSet):
    queryset = tipoProducto.objects.all()
    serializer_class = TipoProductoSerializers