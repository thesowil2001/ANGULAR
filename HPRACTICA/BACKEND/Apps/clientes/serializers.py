from rest_framework import serializers
from Apps.clientes.models import Cliente, Telefono

class ClienteSerializers(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'
        

class TelefonoSerializers(serializers.ModelSerializer):
    class Meta:
        model = Telefono
        fields = '__all__'