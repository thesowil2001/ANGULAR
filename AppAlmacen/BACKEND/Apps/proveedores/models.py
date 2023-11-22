from django.db import models

# Create your models here.
class proveedor(models.Model):
    nombre = models.CharField(max_length=80)
    direccion = models.CharField(max_length=80)
    telefono = models.CharField(max_length=80)
    email = models.CharField(max_length=80)
    
    class Meta:
        db_table = 'Proveedores'
        
class tipoProducto(models.Model):
    nombre = models.CharField(max_length=80)
    descripcion = models.CharField(max_length=80)
        
    class Meta:
        db_table = 'tipo_producto'