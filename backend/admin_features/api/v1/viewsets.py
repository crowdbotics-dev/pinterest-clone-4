from rest_framework import authentication
from admin_features.models import (
    Analytics,
    ContentModeration,
    Analytics,
    ContentModeration,
    Analytics,
    ContentModeration,
)
from .serializers import (
    AnalyticsSerializer,
    ContentModerationSerializer,
    AnalyticsSerializer,
    ContentModerationSerializer,
    AnalyticsSerializer,
    ContentModerationSerializer,
)
from rest_framework import viewsets


class AnalyticsViewSet(viewsets.ModelViewSet):
    serializer_class = AnalyticsSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Analytics.objects.all()


class ContentModerationViewSet(viewsets.ModelViewSet):
    serializer_class = ContentModerationSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = ContentModeration.objects.all()
