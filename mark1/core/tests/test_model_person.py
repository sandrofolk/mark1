from django.contrib.auth.models import User
from django.test import TestCase
from mark1.core.models import Person


class PersonModelTest(TestCase):
    def setUp(self):
        self.person = Person.objects.create(
            name='Alessandro de Lima Folk',
            client=False,
            provider=False,
        )
        User.objects.all().delete()
        User.objects.create_superuser(username='demo', email='', password='demodemo')
        self.resp = self.client.login(username='demo', password='demodemo')
        self.resp = self.client.get('/api/person/')

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

    def test_get_api(self):
        """GET /api/person/ must return status code 200"""
        self.assertEqual(200, self.resp.status_code)

    def test_post_api(self):
        """POST /api/person/ must return status code 201"""
        resp = self.client.post('/api/person/', {'name': 'teste'})
        self.assertEqual(201, resp.status_code)

    # def test_put_api(self):
    #     """PUT /api/person/ must return status code 200"""
    #     person = Person.objects.first()
    #     obj = {
    #         "id": person.id,
    #         "name": person.name
    #     }
    #     resp = self.client.put('/api/person/'+str(person.pk)+'/', {'id': person.id, 'name': person.name})
    #     self.assertEqual(200, resp.status_code)
