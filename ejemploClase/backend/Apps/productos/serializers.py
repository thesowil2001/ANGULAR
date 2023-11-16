from rest_framework import serializers
from .models import Producto, ProductoProveedor

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

class ProductoProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductoProveedor
        fields = '__all__'