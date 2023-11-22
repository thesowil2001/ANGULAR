from rest_framework import serializers
from Cadena.reservas.models import personas, agencias, reservas

class personasSerializers(serializers.ModelSerializer):
    class Meta:
        model = personas
        fields = '__all__'
        
        
class agenciasSerializers(serializers.ModelSerializer):
    class Meta:
        model = agencias
        fields = '__all__'
        
        
class reservasSerializers(serializers.ModelSerializer):
    class Meta:
        model = reservas
        fields = '__all__'