from django.db import models
from Cadena.categoria.models import categoria
from Cadena.habitacion.models import habitacion
# Create your models here.

class hoteles(models.Model):
    nombre = models.CharField(max_length=80)
    direccion = models.CharField(max_length=80)
    AñoDeConstruccion = models.DateField()
    TiposDeHabitacion =models.ForeignKey(habitacion, on_delete=models.CASCADE)
    nivel = models.ForeignKey(categoria,on_delete=models.CASCADE)
    
    class Meta():
        db_table = "NOMBRE DEL HOTEL"