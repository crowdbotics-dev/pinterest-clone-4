from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    LikeViewSet,
    RepinViewSet,
    LikeViewSet,
    RepinViewSet,
    LikeViewSet,
    RepinViewSet,
    LikeViewSet,
    RepinViewSet,
)

router = DefaultRouter()
router.register("like", LikeViewSet)
router.register("repin", RepinViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
