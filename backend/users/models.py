from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """
    name = models.CharField(
        max_length=150,
        null=False,
        blank=True,
    )
    email = models.EmailField(
        null=True,
        blank=True,
    )
    password = models.CharField(
        max_length=255,
        null=True,
        blank=True,
    )
    date_joined = models.DateTimeField(
        null=True,
        blank=True,
    )


class UserProfile(models.Model):
    "Generated Model"
    user = models.OneToOneField(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="userprofile_user",
    )
    bio = models.TextField(
        null=True,
        blank=True,
    )
    profile_picture = models.ImageField(
        null=True,
        blank=True,
    )
