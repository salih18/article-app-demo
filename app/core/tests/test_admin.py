from django.test import TestCase, Client
from django.contrib.auth import get_user_model
from django.urls import reverse


class AdminSiteTests(TestCase):

    def setUp(self):
        """Before test a new admin user is created and login as admin"""
        self.client = Client()
        self.admin_user = get_user_model().objects.create_superuser(
            email='ss@gmail.com',
            password='test12345'
        )
        self.client.force_login(self.admin_user)
        self.user = get_user_model().objects.create_user(
            email='test@gmail.com',
            password='test12345',
            name='Test user name'
        )

    def test_user_listed(self):
        """Test that users are listed on user page"""
        # This will generate a user list page url
        url = reverse('admin:core_user_changelist')
        # This makes and http get request for this url
        res = self.client.get(url)
        # assertContains checks response is 200 hundred, and the
        # response contains the key value self.user.name
        self.assertContains(res, self.user.name)
        self.assertContains(res, self.user.email)

    def test_user_change_page(self):
        """Test that the user edit page working well"""
        # This url will be /admin/core/user/123
        url = reverse('admin:core_user_change', args=[self.user.id])
        res = self.client.get(url)

        self.assertEqual(res.status_code, 200)

    def test_create_user_page(self):
        """Test that the create user page works"""
        url = reverse('admin:core_user_add')
        res = self.client.get(url)

        self.assertEqual(res.status_code, 200)
