from django.urls import path, include
from rest_framework import DefaultRouter
from .views import ProductoViewSet, ProductoProveedorViewSet

router =  DefaultRouter()
router2 = DefaultRouter()

router.register(r'',ProductoViewSet)
router.register(r'',ProductoProveedorViewSet)

urlpatterns = [
    path('Producto/', include(router.urls)),
    path('Producto_Proveedor/', include(router2.urls)),
]
