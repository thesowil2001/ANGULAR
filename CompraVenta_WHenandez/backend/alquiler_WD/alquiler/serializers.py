from rest_framework import serializers
from alquiler_WD.alquiler.models import alquiler

class alquilerSerializers(serializers.ModelSerializer):
    class Meta:
        model = alquiler
        fields = '__all__'
    
    