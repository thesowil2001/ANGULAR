from rest_framework import serializers
from Apps.ventas.models import ventas, DetalleVenta

class VentasSerializers(serializers.ModelSerializer):
    class Meta:
        model = ventas
        fields = '__all__'
        
class DetalleVentaSerializers(serializers.ModelSerializer):
    class Meta:
        model = DetalleVenta
        fields = '__all__'