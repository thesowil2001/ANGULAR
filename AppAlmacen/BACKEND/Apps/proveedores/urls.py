from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Apps.proveedores.views import ProveedorViewset, TipoProductoViewset

router = DefaultRouter()
router2 = DefaultRouter()

router.register(r'', ProveedorViewset)
router.register(r'', TipoProductoViewset)


urlpatterns = [
    path('proveedor/',include(router.urls)),
    path('tipo_producto/',include(router2.urls)),
]
