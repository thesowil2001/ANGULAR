from django.db import models
from Apps.clientes.models import Cliente
from Apps.productos.models import producto

# Create your models here.
class ventas(models.Model):
    nombre = models.CharField(max_length=80)
    fecha = models.DateField()
    subtotal = models.DecimalField(max_digits=8, decimal_places=2)
    iva = models.DecimalField(max_digits=8, decimal_places=2)
    descuento = models.DecimalField(max_digits=8, decimal_places=2)
    total = models.DecimalField(max_digits=8, decimal_places=2)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    producto = models.ManyToManyField(producto, through='DetalleVenta')
    
    
    def __str__(self):
        return self.nombre

    
    class Meta:
        verbose_name = "venta"
        verbose_name_plural = "ventas"
        db_table = "ventas"

class DetalleVenta(models.Model):
    venta = models.ForeignKey(ventas, on_delete=models.CASCADE)
    producto = models.ForeignKey(producto, on_delete=models.CASCADE)
    
    class Meta:
        db_table = "ventas_has_producto"