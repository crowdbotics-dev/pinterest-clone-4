from django.conf import settings
from django.db import models


class Analytics(models.Model):
    "Generated Model"
    date = models.DateField(
        null=False,
        blank=False,
    )
    active_users = models.IntegerField(
        null=False,
        blank=False,
    )
    pins_created = models.IntegerField(
        null=False,
        blank=False,
    )


class ContentModeration(models.Model):
    "Generated Model"
    pin = models.ForeignKey(
        "pins.Pin",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="contentmoderation_pin",
    )
    action_taken = models.CharField(
        max_length=255,
        null=False,
        blank=False,
    )
    reason = models.TextField(
        null=False,
        blank=False,
    )
    moderated_by = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="contentmoderation_moderated_by",
    )


# Create your models here.
