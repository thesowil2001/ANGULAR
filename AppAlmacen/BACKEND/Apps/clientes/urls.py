from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Apps.clientes.views import ClienteViewset, TelefonoViewset

router = DefaultRouter()
router2 = DefaultRouter()

router.register(r'', ClienteViewset)
router.register(r'', TelefonoViewset)

urlpatterns = [
    path('clientes/',include(router.urls)),
    path('telefonos/',include(router2.urls)),
]
