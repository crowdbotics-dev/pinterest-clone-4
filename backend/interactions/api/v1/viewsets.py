from rest_framework import authentication
from interactions.models import Like, Repin, Like, Repin, Like, Repin
from .serializers import (
    LikeSerializer,
    RepinSerializer,
    LikeSerializer,
    RepinSerializer,
    LikeSerializer,
    RepinSerializer,
)
from rest_framework import viewsets


class LikeViewSet(viewsets.ModelViewSet):
    serializer_class = LikeSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Like.objects.all()


class RepinViewSet(viewsets.ModelViewSet):
    serializer_class = RepinSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Repin.objects.all()
