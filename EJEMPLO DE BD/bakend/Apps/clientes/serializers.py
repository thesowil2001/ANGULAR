from rest_framework import serializers
from .models import cliente,Telefono

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model= cliente
        fields = '__all__'
        
class TelefonoSerializer(serializers.ModelSerialiazer):
    class Meta:
        model= Telefono
        fields = '__all__'
        
