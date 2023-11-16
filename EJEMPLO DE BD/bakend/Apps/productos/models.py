from django.db import models
from Apps.proveedores.models import TipoProducto
from Apps.proveedores.models import Proveedores
# Create your models here.
class Producto(models.Model):
    nombre = models.CharField(max_length=80)
    precioCompra = models.DecimalField(decimal_places=2, max_digits=10)
    precioVenta = models.DecimalField(decimal_places=2, max_digits=10)
    cantidad = models.DecimalField(decimal_places=2, max_digits=10)
    tipo_producto = models.ForeignKey(TipoProducto,on_delete=models.CASCADE)
    proveedores = models.ManyToManyField(Proveedores, through='ProductoProveedor')
    
    class Meta:
        db_table = 'productos'
        

        
class ProductoProveedor(models.Model):
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    proveedores = models.ForeignKey(Proveedores, on_delete=models.CASCADE)
    
    class Meta:
        db_table = 'proveedores_has_producto'
        
