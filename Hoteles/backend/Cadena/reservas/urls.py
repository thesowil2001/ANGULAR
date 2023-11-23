from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Cadena.reservas.views import reservasViewset

router = DefaultRouter()

router.register(r'', reservasViewset)

urlpatterns = [

    path('reservas/',include(router.urls)),

]