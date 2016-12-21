from django.views.generic import ListView
from rest_framework import permissions
from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication, BasicAuthentication

from mark1.core.models import Bank, Category, Person
from mark1.core.serializers import PersonSerializer

listBank = ListView.as_view(model=Bank)
listCategory = ListView.as_view(model=Category)


class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

    permission_classes = (permissions.DjangoModelPermissions,)
    # authentication_classes = (SessionAuthentication, BasicAuthentication)
    # authentication_classes = (SessionAuthentication)
