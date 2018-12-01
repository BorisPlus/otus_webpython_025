from . import views
from rest_framework.routers import DefaultRouter

#
# router = DefaultRouter()
# router.register(r'messages', views.MessageViewSet)
#
#
# urlpatterns = router.urls

from django.urls import path
urlpatterns = [
    path('messages/', views.MessageList.as_view()),
]
