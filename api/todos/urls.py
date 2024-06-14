from django.urls import path
from todos.views import TodoListCreate, TodoRetrieveUpdateDestroy

urlpatterns = [
    path('todos/', TodoListCreate.as_view(), name='todo-list-create'),
    path('todos/<int:pk>/', TodoRetrieveUpdateDestroy.as_view(), name='todo-retrieve-update-destroy'),
]