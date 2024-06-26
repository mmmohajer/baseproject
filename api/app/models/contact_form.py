from django.db import models
from django.core.validators import FileExtensionValidator

from core.models.general import TimeStampedUUIDModel


class ContactForm(TimeStampedUUIDModel):
    first_name = models.CharField(max_length=256, default="")
    last_name = models.CharField(max_length=256, default="")
    email = models.CharField(max_length=256, default="")
    subject = models.CharField(max_length=256, default="")
    message = models.TextField(default="")

    def __str__(self):
        return self.email

    class Meta:
        verbose_name_plural = "Contact Forms"
        ordering = ('-created_at',)
