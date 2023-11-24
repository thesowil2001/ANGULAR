from rest_framework import serializers
from Cadena.habitacion.models import  habitacion
        
class habitacionSerializers(serializers.ModelSerializer):
    class Meta:
        model = habitacion
        fields = '__all__'
        
