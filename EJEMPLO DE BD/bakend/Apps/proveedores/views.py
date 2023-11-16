from rest_framework import viewsets
from .models import Proveedores,TipoProducto
from .serialiazers import ProveedorSerialiazer,TipoProductoSerialiazer
# Create your views here.
class ProveedoresViewsets(viewsets.ModelViewSet):
    queryset = Proveedores.objects.all()
    serializer_class = ProveedorSerialiazer
    
class TipoProductoViewsets(viewsets.ModelViewSet):
    queryset = TipoProducto.objects.all()
    serializer_class = TipoProductoSerialiazer
        