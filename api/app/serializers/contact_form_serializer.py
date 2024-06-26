from rest_framework import serializers
from app.models import ContactFormModel


class ContactFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactFormModel
        fields = ['id', 'uuid', 'first_name', 'last_name', 'email',
                  'subject', 'message', 'created_at', 'updated_at']
