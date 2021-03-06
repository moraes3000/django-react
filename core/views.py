from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions, authentication
from core.models import List, Item
# Create your views here.
from core.serializer import ListSerializer, ItemSerializer


class ListViewSet(viewsets.ModelViewSet):
    # queryset = List.objects.all()
    serializer_class = ListSerializer
    # permissao
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.TokenAuthentication]

    def get_queryset(self):
        user = self.request.user
        return List.objects.filter(owner=user)


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    # permissao
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.TokenAuthentication]
