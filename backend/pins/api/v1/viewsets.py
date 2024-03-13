from rest_framework import authentication
from pins.models import Board, Pin, Board, Pin, Board, Pin
from .serializers import (
    BoardSerializer,
    PinSerializer,
    BoardSerializer,
    PinSerializer,
    BoardSerializer,
    PinSerializer,
)
from rest_framework import viewsets


class BoardViewSet(viewsets.ModelViewSet):
    serializer_class = BoardSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Board.objects.all()


class PinViewSet(viewsets.ModelViewSet):
    serializer_class = PinSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Pin.objects.all()
