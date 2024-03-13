from rest_framework import serializers
from interactions.models import Like, Repin, Like, Repin


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = "__all__"


class RepinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Repin
        fields = "__all__"
