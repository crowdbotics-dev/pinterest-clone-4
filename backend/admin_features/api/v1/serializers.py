from rest_framework import serializers
from admin_features.models import (
    Analytics,
    ContentModeration,
    Analytics,
    ContentModeration,
)


class AnalyticsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Analytics
        fields = "__all__"


class ContentModerationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentModeration
        fields = "__all__"
