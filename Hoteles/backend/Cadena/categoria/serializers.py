from rest_framework import serializers
from Cadena.categoria.models import  categoria 
        
class categoriaSerializers(serializers.ModelSerializer):
    class Meta:
        model = categoria
        fields = '__all__'
        
