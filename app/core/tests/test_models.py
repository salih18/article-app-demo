from django.test import TestCase
from django.contrib.auth import get_user_model

from core import models


def sample_user(email='test33@gmail.com', password='testpass'):
    """Create sample user"""
    return get_user_model().objects.create_user(email, password)


class ModelTests(TestCase):

    def test_create_user_with_email_successful(self):
        """Test creating a new user with an email is successful"""
        email = 'test@gmail.com'
        password = 'test12345'
        user = get_user_model().objects.create_user(
            email=email,
            password=password
        )

        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))

    def test_new_user_email_normalize(self):
        """Test the email for a new user is normalized"""
        email = 'test@GMAIL.com'
        user = get_user_model().objects.create_user(
            email=email, password='tetetert234234')
        self.assertEqual(user.email, email.lower())

    def test_new_user_invalid_email(self):
        """Test the created user email adress is invalid"""
        # This self.assertRaises should get an error then it will pass the test
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user(email=None,
                                                 password='12412dasfsf')

    def test_create_new_super_user(self):
        """Test creating a new superuser"""
        user = get_user_model().objects.create_superuser(
            email='ss@gmail.com', password='test123456')

        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_staff)
