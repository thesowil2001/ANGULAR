from rest_framework import serializers
from .models import hoteles        
                
        
class hotelesSerializers(serializers.ModelSerializer):
    class Meta:
        model = hoteles
        fields = '__all__'