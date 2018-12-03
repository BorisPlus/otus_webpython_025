from django.db import models


class Message(models.Model):
    name = models.CharField(max_length=15)
    message = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
