from django.db import models
from Apps.clientes.models import cliente
from Apps.productos.models import Producto

# Create your models here.
class Venta(models.Model):
    nombre = models.CharField(max_length=80)
    fecha = models.DateField()
    subtotal = models.DecimalField(decimal_places=2, max_digits=10)
    iva = models.DecimalField(decimal_places=2, max_digits=10)
    descuento = models.DecimalField(decimal_places=2, max_digits=10)
    total = models.DecimalField(decimal_places=2, max_digits=10)
    cliente = models.ForeignKey(cliente, on_delete=models.CASCADE)
    producto = models.ManyToManyField(Producto, through='DetalleVenta')
    
    class Meta:
        db_table = 'venta'
        verbose_name = 'venta'
        verbose_name_plural = 'ventas'
        
class DetalleVenta(models.Model):
    venta = models.ForeignKey(Venta, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    
    class Meta:
        db_table = 'ventas_has_producto'
       