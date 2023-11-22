from rest_framework import serializers
from Cadena.hoteles.models import categoria,habitacion,hoteles

class categoriaSerializers(serializers.ModelSerializer):
    class Meta:
        model = categoria
        fields = '__all__'
        
        
class habitacionSerializers(serializers.ModelSerializer):
    class Meta:
        model = habitacion
        fields = '__all__'
        
        
class hotelesSerializers(serializers.ModelSerializer):
    class Meta:
        model = hoteles
        fields = '__all__'