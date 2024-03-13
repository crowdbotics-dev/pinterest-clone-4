from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    UserViewSet,
    UserProfileViewSet,
    UserViewSet,
    UserProfileViewSet,
    UserViewSet,
    UserProfileViewSet,
    UserViewSet,
    UserProfileViewSet,
)

router = DefaultRouter()
router.register("userprofile", UserProfileViewSet)
router.register("user", UserViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
