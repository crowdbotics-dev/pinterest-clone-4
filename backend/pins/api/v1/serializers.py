from rest_framework import serializers
from pins.models import Board, Pin, Board, Pin


class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = "__all__"


class PinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pin
        fields = "__all__"
