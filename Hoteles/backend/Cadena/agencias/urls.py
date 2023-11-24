from django.urls import path
from Cadena.agencias.views import agenciasList, agenciasDetail

app_name = "agencias"
urlpatterns = [
    path('', agenciasList.as_view()),
    path('<int:pk>', agenciasDetail.as_view()),
]