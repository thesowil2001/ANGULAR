from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Cadena.hoteles.views import hotelesViewset

router = DefaultRouter()


router.register(r'', hotelesViewset)


urlpatterns = [
    path('hoteles/',include(router.urls)),
]
