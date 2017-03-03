from rest_framework import serializers

from mark1.core.models import *


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'


class BankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bank
        fields = '__all__'


class BankAccountSerializer(serializers.ModelSerializer):
    bank_description = serializers.ReadOnlyField()

    class Meta:
        model = BankAccount
        fields = ['id', 'bank', 'agency', 'account', 'digit', 'description', 'bank_description']


class CategorySerializer(serializers.ModelSerializer):
    parent_description = serializers.ReadOnlyField()

    class Meta:
        model = Category
        fields = ['id', 'description', 'parent', 'parent_description']


class CostCenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CostCenter
        fields = '__all__'