from django.test import TestCase
from mark1.core.models import CostCenter


class CostCenterModelTest(TestCase):
    def setUp(self):
        self.costCenter = CostCenter.objects.create(
            description='Emprego'
        )

    def test_create(self):
        """Test creation model `CostCenter`"""
        self.assertTrue(CostCenter.objects.exists())

    def test_str(self):
        """Test return str model `CostCenter`"""
        self.assertEqual('Emprego', str(self.costCenter))

    def test_revenue_default_to_false(self):
        """By default column revenue must be False in model `CostCenter`"""
        self.assertEqual(False, self.costCenter.revenue)

    def test_cost_default_to_false(self):
        """By default column cost must be False in model `CostCenter`"""
        self.assertEqual(False, self.costCenter.cost)
