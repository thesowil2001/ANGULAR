from django.urls import path
from Cadena.categoria.views import categoriaList, categoriaDetail

app_name = "categoria"
urlpatterns = [
    path('',  categoriaList.as_view()),
    path('<int:pk>', categoriaDetail.as_view()),
]