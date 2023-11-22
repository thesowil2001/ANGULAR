from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Apps.productos.views import ProductoViewset, ProductoProveedorViewset

router = DefaultRouter()
router2 = DefaultRouter()

router.register(r'', ProductoViewset)
router.register(r'', ProductoProveedorViewset)


urlpatterns = [
    path('producto/',include(router.urls)),
    path('producto_proveedor/',include(router2.urls)),
]
