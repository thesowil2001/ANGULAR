from rest_framework import serializers
from .models import Proveedores, TipoProducto

class ProveedorSerialiazer(serializers.ModelSerialiazer):
    class Meta:
        model = Proveedores
        fields = '__all__'
        
class TipoProductoSerialiazer(serializers.ModelSerialiazer):
    class Meta:
        model = TipoProducto
        fields = '__all__'