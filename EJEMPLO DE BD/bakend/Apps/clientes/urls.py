from django.urls import path, include
from rest_framework import DefaultRouter
from .views import ClientesViewsets, TelefonoViewsets

router =  DefaultRouter()
router2 = DefaultRouter()

router.register(r'',ClientesViewsets)
router.register(r'',TelefonoViewsets)

urlpatterns = [
    path('clientes/', include(router.urls)),
    path('telefonos/', include(router2.urls)),
]
