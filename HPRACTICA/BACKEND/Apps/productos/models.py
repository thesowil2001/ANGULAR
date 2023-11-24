from django.db import models
from Apps.proveedores.models import proveedor
from Apps.proveedores.models import tipoProducto
# Create your models here.

class producto(models.Model):
    nombre = models.CharField(max_length=80)
    precioCompra = models.DecimalField(max_digits=8, decimal_places=2)
    precioVenta = models.DecimalField(max_digits=8, decimal_places=2)
    cantidad = models.IntegerField()
    tipo_producto = models.ForeignKey(tipoProducto, on_delete=models.CASCADE)
    proveedor = models.ManyToManyField(proveedor, through='productoProveerdor')
    
    class Meta:
        db_table = 'productos'
        

class productoProveerdor(models.Model):
    proveedor = models.ForeignKey(proveedor, on_delete=models.CASCADE)
    producto = models.ForeignKey(producto, on_delete=models.CASCADE)
    
    class Meta:
        db_table = 'producto_has_proveedors'
        
