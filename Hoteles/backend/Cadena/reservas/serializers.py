from rest_framework import serializers
from Cadena.reservas.models import reservas        
        
        
class reservasSerializers(serializers.ModelSerializer):
    class Meta:
        model = reservas
        fields = '__all__'