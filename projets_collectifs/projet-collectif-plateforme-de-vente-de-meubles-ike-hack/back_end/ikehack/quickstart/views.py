from django.shortcuts import render

# Create your views here.
# from django.contrib.auth.models import Group, User
# from tutorial.quickstart.serializers import GroupSerializer, UserSerializer

from rest_framework import permissions, viewsets
from models import Furniture
from serializers import FurnitureSerializer



class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    #requêtes django
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all().order_by('name')
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class FurnitureViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Furnituress to be viewed or edited.
    """
    queryset = Furniture.objects.all().order_by('id')
    serializer_class = FurnitureSerializer
    permission_classes = [permissions.IsAuthenticated]