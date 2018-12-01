from django.db import models


class Message(models.Model):
    name = models.CharField(max_length=50)
    message = models.CharField(max_length=128)
    created_at = models.DateTimeField(auto_now_add=True)
