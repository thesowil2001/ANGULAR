from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Cadena.categoria.views import categoriaViewset



router = DefaultRouter()
router.register(r'', categoriaViewset)
            
urlpatterns = [
    path('categorias/',include(router.urls)),
]
       