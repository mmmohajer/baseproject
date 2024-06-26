from django.db import models
from django.conf import settings
from django.core.validators import FileExtensionValidator

from core.models.general import TimeStampedUUIDModel


class UploadedMedia(TimeStampedUUIDModel):
    name = models.CharField(max_length=255, blank=True, null=True)
    uploaded_file = models.FileField(upload_to='uploaded_media/', validators=[
                                     FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'mp4'])])

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Uploaded Media"
        ordering = ('name',)
