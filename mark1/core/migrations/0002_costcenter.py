# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-24 20:38
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CostCenter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=255, verbose_name='descrição')),
                ('revenue', models.BooleanField(default=False, verbose_name='receita?')),
                ('cost', models.BooleanField(default=False, verbose_name='custo?')),
            ],
            options={
                'verbose_name_plural': 'centros de custo / receita',
                'verbose_name': 'centro de custo / receita',
            },
        ),
    ]