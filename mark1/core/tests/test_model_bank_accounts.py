from django.test import TestCase
from mark1.core.models import Bank, Account


class BankAccountsModelTest(TestCase):
    def setUp(self):
        self.bank = Bank.objects.create(
            code='341',
            description='Banco Itaú S/A.',
        )
        self.account = Account.objects.create(
            bank=self.bank,
            agency='0082',
            account='82.611',
            digit='6',
            description='0082 - 82.611-6 - Itaú Praça',
        )

    def test_create_bank(self):
        """Test creation model `Bank`"""
        self.assertTrue(Bank.objects.exists())

    def test_create_account(self):
        """Test creation model `Account`"""
        self.assertTrue(Account.objects.exists())

    def test_str_bank(self):
        """Test return str model `bank`"""
        self.assertEqual('341.Banco Itaú S/A.', str(self.bank))

    def test_str_account(self):
        """Test return str model `Account`"""
        self.assertEqual('0082 - 82.611-6 - Itaú Praça', str(self.account))

    def test_bank_in_account_can_be_blank(self):
        """Test if column 'bank' of model `Account` can be blank. Ex: Account not in bank"""
        field = Account._meta.get_field('bank')
        self.assertTrue(field.blank)

    def test_agency_in_account_can_be_blank(self):
        """Test if column 'agency' of model `Account` can be blank. Ex: Account not in bank"""
        field = Account._meta.get_field('agency')
        self.assertTrue(field.blank)

    def test_account_in_account_can_be_blank(self):
        """Test if column 'account' of model `Account` can be blank. Ex: Account not in bank"""
        field = Account._meta.get_field('account')
        self.assertTrue(field.blank)

    def test_digit_in_account_can_be_blank(self):
        """Test if column 'digit' of model `Account` can be blank. Ex: Account not in bank"""
        field = Account._meta.get_field('digit')
        self.assertTrue(field.blank)
