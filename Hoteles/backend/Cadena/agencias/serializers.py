
from rest_framework import serializers
from Cadena.agencias.models import  agencias   
        
class agenciasSerializers(serializers.ModelSerializer):
    class Meta:
        model = agencias
        fields = '__all__'
        
