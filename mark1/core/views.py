from django.views.generic import ListView
from rest_framework import permissions
from rest_framework import viewsets

from mark1.core.models import Bank, Category, Person
from mark1.core.serializers import *

listBank = ListView.as_view(model=Bank)
listCategory = ListView.as_view(model=Category)


class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

    permission_classes = (permissions.DjangoModelPermissions,)


class BankViewSet(viewsets.ModelViewSet):
    queryset = Bank.objects.all()
    serializer_class = BankSerializer

    permission_classes = (permissions.DjangoModelPermissions,)


class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    permission_classes = (permissions.DjangoModelPermissions,)


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    permission_classes = (permissions.DjangoModelPermissions,)


class CostCenterViewSet(viewsets.ModelViewSet):
    queryset = CostCenter.objects.all()
    serializer_class = CostCenterSerializer

    permission_classes = (permissions.DjangoModelPermissions,)
