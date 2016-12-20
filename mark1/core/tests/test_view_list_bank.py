from django.test import TestCase
from django.shortcuts import resolve_url as r


class BankListGet(TestCase):
    def setUp(self):
        self.resp = self.client.get(r('bank-list'))

    def test_get(self):
        """GET /bank/ must return status code 200"""
        self.assertEqual(200, self.resp.status_code)
