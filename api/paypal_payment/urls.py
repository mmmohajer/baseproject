from django.urls import path
from .views import create_payment, execute_payment

urlpatterns = [
    path('create-payment/', create_payment, name='create_payment'),
    path('execute-payment/', execute_payment, name='execute_payment'),
]