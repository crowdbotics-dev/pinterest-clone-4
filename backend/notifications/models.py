from django.conf import settings
from django.db import models


class Notification(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="notification_user",
    )
    message = models.TextField(
        null=False,
        blank=False,
    )
    created_at = models.DateTimeField(
        null=False,
        blank=False,
    )


# Create your models here.
