from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClienteViewSet, TelefonoViewSet

router = DefaultRouter()
router2 = DefaultRouter()

router.register(r'', ClienteViewSet)
router2.register(r'', TelefonoViewSet)

urlpatterns = [
    path('clientes/', include(router.urls)),
    path('telefonos/', include(router2.urls)),
]
