from rest_framework import serializers
from Apps.productos.models import producto, productoProveerdor

class ProductoSerializers(serializers.ModelSerializer):
    class Meta:
        model = producto
        fields = '__all__'
        
class ProductoProveedorSerializers(serializers.ModelSerializer):
    class Meta:
        model = productoProveerdor
        fields = '__all__'