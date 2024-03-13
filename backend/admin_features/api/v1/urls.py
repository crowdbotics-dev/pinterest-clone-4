from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    AnalyticsViewSet,
    ContentModerationViewSet,
    AnalyticsViewSet,
    ContentModerationViewSet,
    AnalyticsViewSet,
    ContentModerationViewSet,
    AnalyticsViewSet,
    ContentModerationViewSet,
)

router = DefaultRouter()
router.register("analytics", AnalyticsViewSet)
router.register("contentmoderation", ContentModerationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
