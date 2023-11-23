from django.db import models

# Create your models here.
class personas(models.Model):
    cedula = models.CharField(max_length=10)
    nombre = models.CharField(max_length=80)
    apellido = models.CharField(max_length=80)
    telefono = models.CharField(max_length=10)
    
    class Meta():
        db_table = 'Personas con reservacion'