from rest_framework import viewsets
from .models import Producto, ProductoProveedor
from .serializers import ProductoSerializer, ProductoProveedorSerializers

# Create your views here.
class ProductoViewSet(viewsets.modelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class ProductoProveedorViewSet(viewsets.modelViewSet):
    queryset = ProductoProveedor.objects.all()
    serializer_class = ProductoProveedorSerializers
