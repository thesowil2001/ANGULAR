from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Cadena.habitacion.views import habitacionViewset



router = DefaultRouter()
router.register(r'',  habitacionViewset)
            
urlpatterns = [
    path('habitaciones/',include(router.urls)),
]
       