from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DetalleVentaViewSet, VentaViewSet

router = DefaultRouter()
router2 = DefaultRouter()

router.register(r'', VentaViewSet)
router2.register(r'', DetalleVentaViewSet)

urlpatterns = [
    path('ventas/', include(router.urls)),
    path('detalles_ventas/', include(router2.urls)),
]
