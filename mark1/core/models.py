from django.db import models
from mptt.fields import TreeForeignKey
from mptt.models import MPTTModel
# from organizations.models import Organization


# class Test(Organization):
#     full_name = models.CharField('nome', max_length=255)


class Person(models.Model):
    name = models.CharField('nome', max_length=255)
    client = models.BooleanField('cliente?', default=False)
    provider = models.BooleanField('fornecedor?', default=False)

    class Meta:
        verbose_name = 'pessoa'
        verbose_name_plural = 'pessoas'

    def __str__(self):
        return self.name


class Bank(models.Model):
    code = models.CharField('código', max_length=10)
    description = models.CharField('descrição', max_length=255)

    class Meta:
        verbose_name = 'banco'
        verbose_name_plural = 'bancos'

    def __str__(self):
        return self.code + '.' + self.description


class Account(models.Model):
    bank = models.ForeignKey('Bank', verbose_name='banco', null=True, blank=True)
    agency = models.CharField('agência', max_length=20, null=True, blank=True)
    account = models.CharField('conta', max_length=20, null=True, blank=True)
    digit = models.CharField('dígito', max_length=20, null=True, blank=True)
    description = models.CharField('descrição', max_length=255)

    class Meta:
        verbose_name = 'conta'
        verbose_name_plural = 'contas'

    def __str__(self):
        return self.description


class Category(MPTTModel):
    description = models.CharField('descrição', max_length=255)
    parent = TreeForeignKey('self', null=True, blank=True, related_name='children')

    class Meta:
        verbose_name = 'categoria'
        verbose_name_plural = 'categorias'

    class MPTTMeta:
        order_insertion_by = ['description']

    def __str__(self):
        return self.description
