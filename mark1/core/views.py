from django.views.generic import ListView
from mark1.core.models import Bank, Category


listBank = ListView.as_view(model=Bank)
listCategory = ListView.as_view(model=Category)