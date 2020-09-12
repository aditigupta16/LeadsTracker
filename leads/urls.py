from django.urls import path
from . import views


urlpatterns = [
	path('api/lead/', views.LeadListCreateAPIView.as_view()),
]