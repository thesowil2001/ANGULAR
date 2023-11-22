from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProveedorViewSet, TipoProductoViewSet

router = DefaultRouter()
router2 = DefaultRouter()

router.register(r'', ProveedorViewSet)
router2.register(r'', TipoProductoViewSet)

urlpatterns = [
    path('proveedores/', include(router.urls)),
    path('tipo_productos/', include(router2.urls)),
]
