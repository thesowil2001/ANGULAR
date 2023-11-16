from django.urls import path, include
from rest_framework import DefaultRouter
from .views import VentaViewset, DetalleVentaViewset

router =  DefaultRouter()
router2 = DefaultRouter()

router.register(r'', VentaViewset)
router.register(r'', DetalleVentaViewset)

urlpatterns = [
    path('Venta/', include(router.urls)),
    path('Detalle_Venta/', include(router2.urls)),
]
