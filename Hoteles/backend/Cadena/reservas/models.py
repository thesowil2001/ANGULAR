from django.db import models
from Cadena.personas.models import personas
from Cadena.agencias.models import agencias
# Create your models here.
        
class reservas(models.Model):
    Fecha_De_Ingreso = models.DateField()
    Fecha_De_Salida = models.DateField()
    cedula =models.ForeignKey(personas, on_delete=models.CASCADE)
    int = models.ForeignKey(agencias, on_delete=models.CASCADE)
    
    class Meta:
        db_table = 'Reservas'