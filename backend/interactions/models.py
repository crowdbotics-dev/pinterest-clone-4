from django.conf import settings
from django.db import models


class Like(models.Model):
    "Generated Model"
    pin = models.ForeignKey(
        "pins.Pin",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="like_pin",
    )
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="like_user",
    )


class Repin(models.Model):
    "Generated Model"
    original_pin = models.ForeignKey(
        "pins.Pin",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="repin_original_pin",
    )
    board = models.ForeignKey(
        "pins.Board",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="repin_board",
    )
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="repin_user",
    )


# Create your models here.
