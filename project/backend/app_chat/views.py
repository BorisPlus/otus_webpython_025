from . import models
from . import serializers
from rest_framework import generics, viewsets


class MessageList(generics.ListCreateAPIView):
    queryset = models.Message.objects.order_by('-created_at').all()
    serializer_class = serializers.MessageSerializer


# class MessageViewSet(viewsets.ReadOnlyModelViewSet):
#     queryset = models.Message.objects.all()
#
#     def get_serializer_class(self):
#         if self.action == 'list':
#             return serializers.MessagePreviewSerializer
#         return serializers.MessageSerializer
