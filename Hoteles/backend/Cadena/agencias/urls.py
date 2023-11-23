from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Cadena.agencias.views import agenciasViewset

router = DefaultRouter()


router.register(r'', agenciasViewset)

urlpatterns = [

    path('agencias/',include(router.urls)),
]