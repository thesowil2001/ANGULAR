from django.db import models

# Create your models here.
class agencias(models.Model):
    int = models.CharField(max_length=10)
    nombre = models.CharField(max_length=10)
    direccion = models.CharField(max_length=10)
    ciudad = models.CharField(max_length=10)
    
    class Meta:
        db_table = 'Agencias de Viajes'