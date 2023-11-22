from django.db import models

# Create your models here.
class Cliente(models.Model):
    nombre = models.CharField(max_length=60)
    apellidos = models.CharField(max_length=60)
    direccion = models.CharField(max_length=40)
    
    class Meta:
        verbose_name = "Cliente"
        verbose_name_plural = "Clientes"
        db_table = "clientes"

class Telefono(models.Model):
    numero = models.CharField(max_length=12)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)