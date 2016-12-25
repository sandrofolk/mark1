from django.test import TestCase
from django.shortcuts import resolve_url as r


class CostCenterApiGet(TestCase):
    def setUp(self):
        self.resp = self.client.get('/api/cost_center/')

    def test_get(self):
        """GET /api/cost_center/ must return status code 401"""
        self.assertEqual(401, self.resp.status_code)
