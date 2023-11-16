from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProveedoresViewsets, TipoProductoViewsets

router =  DefaultRouter()
router2 = DefaultRouter()

router.register(r'',ProveedoresViewsets)
router.register(r'',TipoProductoViewsets)

urlpatterns = [
    path('Proveedores/', include(router.urls)),
    path('Tipo_Producto/', include(router2.urls)),
]
