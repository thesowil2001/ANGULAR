from django.db import models

# Create your models here.
class alquiler(models.Model):
    fecha_ini = models.DateField()
    fecha_fin = models.DateField()
    valor =  models.DecimalField(max_digits=8, decimal_places=2)
    cliente = models.CharField(max_length=80)
    
    
    class Meta:

        db_table = "Alquiler"