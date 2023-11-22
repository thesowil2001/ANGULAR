from rest_framework import viewsets
from Apps.productos.models import producto, productoProveerdor
from .serializers import ProductoSerializers, ProductoProveedorSerializers

# Create your views here.

class ProductoViewset(viewsets.ModelViewSet):
    queryset = producto.objects.all()
    serializer_class = ProductoSerializers
    
class ProductoProveedorViewset(viewsets.ModelViewSet):
    queryset = productoProveerdor.objects.all()
    serializer_class = ProductoProveedorSerializers