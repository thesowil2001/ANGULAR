from django.shortcuts import render
from django.http import Http404

from rest_framework.response import Response
from rest_framework import generics

from rest_framework import status

from .models import productos
from .serializers import productosSerializer

# Create your views here.


class productosList(generics.ListCreateAPIView):
    """
    Lista de productos
    """

    queryset = productos.objects.all()
    serializer_class = productosSerializer



class productosDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete de los clientes por pk
    """
    queryset = productos.objects.all()
    serializer_class = productosSerializer
