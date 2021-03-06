from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from core.models import List
# Create your views here.
from core.serializer import ListSerializer


class ListViewSet(viewsets.ModelViewSet):

    queryset = List.objects.all()
    serializer_class = ListSerializer
    permission_classes = [permissions.IsAuthenticated]
