from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Cadena.hoteles.views import hotelesViewset, habitacionViewset, categoriaViewset

router = DefaultRouter()
router2 = DefaultRouter()
router3 = DefaultRouter()

router.register(r'', hotelesViewset)
router.register(r'', habitacionViewset)
router.register(r'', categoriaViewset)

urlpatterns = [
    path('hoteles/',include(router.urls)),
    path('habitaciones/',include(router2.urls)),
    path('categorias/',include(router3.urls)),
]
