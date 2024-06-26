from django.contrib import admin


class UploadedMediaAdmin(admin.ModelAdmin):
    list_display = ['name']
    list_per_page = 10
    search_fields = ['name']
