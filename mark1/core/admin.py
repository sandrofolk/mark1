from django.contrib import admin
from django.utils.translation import ugettext_lazy as _
from mark1.core.models import *
from mptt.admin import MPTTModelAdmin


admin.site.site_header = _('Mark1 / ConTTudOweb')
admin.site.site_title = _('Mark1')
admin.site.index_title = _('Home')


class BankModelAdmin(admin.ModelAdmin):
    list_display = ['code', 'description', ]


class CategoryModelAdmin(MPTTModelAdmin):
    mptt_level_indent = 20
    list_display = ['description', ]


class AccountModelAdmin(admin.ModelAdmin):
    list_display = ['description', 'bank', 'agency', 'account_digit',]

    def account_digit(self, obj):
        return obj.account + '-' + obj.digit


class PersonModelAdmin(admin.ModelAdmin):
    list_display = ['name', 'client', 'provider']


class CostCenterModelAdmin(admin.ModelAdmin):
    list_display = ['description', 'revenue', 'cost']


admin.site.register(Person, PersonModelAdmin)
admin.site.register(Bank, BankModelAdmin)
admin.site.register(Account, AccountModelAdmin)
admin.site.register(Category, CategoryModelAdmin)
admin.site.register(CostCenter, CostCenterModelAdmin)

# admin.site.register(Test)
