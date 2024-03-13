from django.conf import settings
from django.db import models


class Board(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
        null=False,
        blank=False,
    )
    description = models.TextField(
        null=True,
        blank=True,
    )
    created_at = models.DateTimeField(
        null=False,
        blank=False,
    )
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="board_user",
    )


class Pin(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
        null=False,
        blank=False,
    )
    description = models.TextField(
        null=True,
        blank=True,
    )
    image = models.ImageField(
        null=False,
        blank=False,
    )
    created_at = models.DateTimeField(
        null=False,
        blank=False,
    )
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="pin_user",
    )


# Create your models here.
