from django.test import TestCase
from mark1.core.models import Person


class PersonModelTest(TestCase):
    def setUp(self):
        self.person = Person.objects.create(
            name='Alessandro de Lima Folk',
            client=False,
            provider=False,
        )

    def test_create(self):
        """Test creation model `Person`"""
        self.assertTrue(Person.objects.exists())

    def test_str(self):
        """Test return str model `Person`"""
        self.assertEqual('Alessandro de Lima Folk', str(self.person))

    def test_client_default_to_false(self):
        """By default column client must be False in model `Person`"""
        self.assertEqual(False, self.person.client)

    def test_provider_default_to_false(self):
        """By default column provider must be False in model `Person`"""
        self.assertEqual(False, self.person.provider)
