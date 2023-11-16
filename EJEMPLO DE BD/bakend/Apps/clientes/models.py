from django.db import models

# Create your models here.
class cliente(models.Model):
    nombre = models.CharField(max_length=60)
    apellidos = models.CharField(max_length=60)
    direccion = models.CharField(max_length=60)
    
    class Meta:
        db_table = "clientes"
        verbose_name = 'cliente'
        verbose_name_plural = 'clientes'
        
class Telefono(models.Model):
    numero = models.CharField(max_length=12)
    cliente = models.ForeignKey(cliente, on_delete=models.CASCADE)