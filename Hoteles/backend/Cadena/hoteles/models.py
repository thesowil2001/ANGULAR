from django.db import models

# Create your models here.
class categoria(models.Model):
    nivel = models.IntegerField(max_length=8)
    iva = models.CharField(max_length=80)
    descripcion = models.CharField(max_length=80)
    
    class Meta():
        db_table = "Categoria"
        
class habitacion(models.Model):
    TiposDeHabitacion = models.CharField(max_length=80)
    
    class Meta:
        db_table = "Habitaciones"        

class hoteles(models.Model):
    nombre = models.CharField(max_length=80)
    direccion = models.CharField(max_length=80)
    AñoDeConstruccion = models.DateField()
    TiposDeHabitacion =models.ForeignKey(habitacion, on_delete=models.CASCADE)
    nivel = models.ForeignKey(categoria,on_delete=models.CASCADE)
    
    class Meta():
        db_table = "NOMBRE DEL HOTEL"