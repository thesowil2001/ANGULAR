from rest_framework import serializers
from Apps.proveedores.models import proveedor, tipoProducto

class ProveedorSerializers(serializers.ModelSerializer):
    class Meta:
        model = proveedor
        fields = '__all__'
        
class TipoProductoSerializers(serializers.ModelSerializer):
    class Meta:
        model = tipoProducto
        fields = '__all__'