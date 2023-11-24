from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Apps.ventas.views import VentasViewset, DetalleVentaViewset

router = DefaultRouter()
router2 = DefaultRouter()

router.register(r'', VentasViewset)
router.register(r'', DetalleVentaViewset)


urlpatterns = [
    path('ventas/',include(router.urls)),
    path('detalles_ventas/',include(router2.urls)),
]
