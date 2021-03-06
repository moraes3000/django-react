from rest_framework import serializers
from rest_framework.serializers import ListSerializer

from core.models import List


class ListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = List
        fields = ['name', 'owner', 'url']
