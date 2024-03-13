from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    BoardViewSet,
    PinViewSet,
    BoardViewSet,
    PinViewSet,
    BoardViewSet,
    PinViewSet,
    BoardViewSet,
    PinViewSet,
)

router = DefaultRouter()
router.register("board", BoardViewSet)
router.register("pin", PinViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
