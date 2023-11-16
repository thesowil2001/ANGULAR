from rest_framework import serializers
from .models import Cliente, Telefono

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields= '__all__'

class TelefonoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Telefono
        fields= '__all__'