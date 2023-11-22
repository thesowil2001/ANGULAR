from django.db import models

# Create your models here.
class personas(models.Model):
    cedula = models.CharField(max_length=10)
    nombre = models.CharField(max_length=80)
    apellido = models.CharField(max_length=80)
    telefono = models.CharField(max_length=10)
    
    class Meta():
        db_table = 'Personas con reservacion'
        
class agencias(models.Model):
    int = models.CharField(max_length=10)
    nombre = models.CharField(max_length=10)
    direccion = models.CharField(max_length=10)
    ciudad = models.CharField(max_length=10)
    
    class Meta:
        db_table = 'Agencias de Viajes'
        
class reservas(models.Model):
    Fecha_De_Ingreso = models.DateField()
    Fecha_De_Salida = models.DateField()
    cedula =models.ForeignKey(personas, on_delete=models.CASCADE)
    int = models.ForeignKey(agencias, on_delete=models.CASCADE)
    
    class Meta:
        db_table = 'Reservas'