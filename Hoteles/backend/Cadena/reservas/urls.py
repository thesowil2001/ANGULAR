from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Cadena.reservas.views import personasViewset, agenciasViewset, reservasViewset

router = DefaultRouter()
router2 = DefaultRouter()
router3 = DefaultRouter()

router.register(r'', personasViewset)
router.register(r'', agenciasViewset)
router.register(r'', reservasViewset)

urlpatterns = [
    path('personas/',include(router.urls)),
    path('agencias/',include(router2.urls)),
    path('reservas/',include(router3.urls)),
]