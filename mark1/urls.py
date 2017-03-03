"""mark1 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic.base import RedirectView

from mark1.core import views
from mark1.core.views import listBank, listCategory
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'person', views.PersonViewSet, base_name='Person')
router.register(r'bank', views.BankViewSet, base_name='Bank')
router.register(r'bank_account', views.BankAccountViewSet, base_name='BankAccount')
router.register(r'category', views.CategoryViewSet, base_name='Category')
router.register(r'cost_center', views.CostCenterViewSet, base_name='CostCenter')


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # url(r'', admin.site.urls),
    url(r'^$', RedirectView.as_view(url='/admin')),

    # Finance
    url(r'^bank/$', listBank, name='bank-list'),
    url(r'^category/$', listCategory, name='category-list'),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^rest-auth/', include('rest_auth.urls')),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ]
