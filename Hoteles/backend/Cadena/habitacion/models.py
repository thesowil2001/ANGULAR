from django.db import models

# Create your models here.
class habitacion(models.Model):
    TiposDeHabitacion = models.CharField(max_length=80)
    
    class Meta:
        db_table = "Habitaciones"        