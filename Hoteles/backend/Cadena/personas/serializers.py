from rest_framework import serializers
from Cadena.personas.models import personas

class personasSerializers(serializers.ModelSerializer):
    class Meta:
        model = personas
        fields = '__all__'