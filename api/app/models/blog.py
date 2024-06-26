from django.db import models
from django.conf import settings
from django.core.validators import FileExtensionValidator
from django.utils.text import slugify

from core.models.general import TimeStampedUUIDModel

BLOG_LABEL_TYPE_CHOICES = [
    ('TAG', 'TAG'),
    ('CATEGORY', 'CATEGORY'),
]


class Blog(TimeStampedUUIDModel):
    writer = models.ForeignKey(settings.AUTH_USER_MODEL,
                               on_delete=models.SET_NULL, related_name='blog_writer', blank=True, null=True)
    title = models.CharField(null=True, blank=True, max_length=2048)
    content = models.TextField(null=True, blank=True)
    excerpt = models.CharField(null=True, blank=True, max_length=2048)
    preview_photo = models.FileField(upload_to='blogs/', null=True, blank=True,
                                     validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png'])])
    preview_photo_from_url = models.CharField(
        null=True, blank=True, max_length=2048)
    slug = models.SlugField(unique=True, blank=True, max_length=2048)
    is_draft = models.BooleanField(default=True)
    published_date = models.DateTimeField(blank=True, null=True)
    is_popular = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Blogs"
        ordering = ('-created_at', 'title')


class Label(TimeStampedUUIDModel):
    title = models.CharField(unique=True, max_length=2048)
    label_type = models.CharField(
        max_length=64, choices=BLOG_LABEL_TYPE_CHOICES)

    def __str__(self):
        return f"{self.label_type}: {self.title}"

    class Meta:
        verbose_name_plural = "Labels"
        ordering = ('title', 'label_type')


class BlogLabel(TimeStampedUUIDModel):
    blog = models.ForeignKey(Blog,
                             on_delete=models.CASCADE, related_name='blog_label_blog')
    label = models.ForeignKey(Label,
                              on_delete=models.CASCADE, related_name='blog_label_label')

    def __str__(self):
        return f"{self.label.title}: {self.blog.title}"

    class Meta:
        verbose_name_plural = "Blog Labels"
        ordering = ('-created_at',)
