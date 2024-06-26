from rest_framework import views, viewsets, permissions, response, status

from core.permissions import *
from app.models import ContactFormModel


class ContactFormViewSet(views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        try:
            acceptable_fields = ["first_name", "last_name",
                                 "email", "subject", "message"]
            cur_form = ContactFormModel()
            for attr in request.data:
                if attr in acceptable_fields:
                    setattr(cur_form, attr, request.data.get(attr))
            cur_form.save()
            return response.Response(status=status.HTTP_201_CREATED, data={"success": True})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})
