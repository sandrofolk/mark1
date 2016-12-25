from django.test import TestCase
from django.shortcuts import resolve_url as r


class BankApiGet(TestCase):
    def setUp(self):
        self.resp = self.client.get('/api/bank/')

    def test_get(self):
        """GET /api/bank/ must return status code 401"""
        self.assertEqual(401, self.resp.status_code)
