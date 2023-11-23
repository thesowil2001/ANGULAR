from django.db import models

# Create your models here.
class categoria(models.Model):
    nivel = models.CharField(max_length=8)
    iva = models.CharField(max_length=80)
    descripcion = models.CharField(max_length=80)
    
    class Meta():
        db_table = "Categoria"
        