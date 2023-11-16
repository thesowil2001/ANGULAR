from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductoViewSet, ProductoProveedorViewSet

router = DefaultRouter()
router2 = DefaultRouter()

router.register(r'', ProductoViewSet)
router2.register(r'', ProductoProveedorViewSet)

urlpatterns = [
    path('productos/', include(router.urls)),
    path('productos_proveedores/', include(router2.urls)),
]
