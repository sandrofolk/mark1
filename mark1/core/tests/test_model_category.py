from django.test import TestCase
from mark1.core.models import Category


class CategoryModelTest(TestCase):
    def setUp(self):
        self.category = Category.objects.create(
            description='Presentes',
        )

    def test_create(self):
        """Test creation model `Category`"""
        self.assertTrue(Category.objects.exists())

    def test_str(self):
        """Test return str model `Category`"""
        self.assertEqual('Presentes', str(self.category))
