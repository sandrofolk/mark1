from django.contrib.auth.models import User
from django.test import TestCase
from django.shortcuts import resolve_url as r


class ApiAuthGet(TestCase):
    def setUp(self):
        if not User.objects.exists():
            User.objects.create_superuser(username='demo', email='', password='demodemo')
        # self.resp = self.client.login(username='demo', password='demodemo')
        self.resp = self.client.get('/api-auth/login/')

    def test_get(self):
        """GET /api-auth/login/ must return status code 200"""
        self.assertEqual(200, self.resp.status_code)

    def test_login(self):
        """POST /api-auth/login/ must return True"""
        self.assertTrue(self.client.login(username='demo', password='demodemo'))