from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Cadena.personas.views import personasViewset

router = DefaultRouter()

router.register(r'', personasViewset)


urlpatterns = [
    path('personas/',include(router.urls)),
]