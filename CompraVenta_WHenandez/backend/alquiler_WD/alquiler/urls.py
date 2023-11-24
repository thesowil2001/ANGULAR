from django.urls import path, include
from rest_framework.routers import DefaultRouter
from alquiler_WD.alquiler.views import alquilerViewset

router = DefaultRouter()


router.register(r'', alquilerViewset)



urlpatterns = [
    path('alquiler/',include(router.urls)),

]
