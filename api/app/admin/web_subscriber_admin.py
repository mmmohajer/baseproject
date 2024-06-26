from django.contrib import admin


class WebSubscriberAdmin(admin.ModelAdmin):
    list_display = ['email']
    list_per_page = 10
    search_fields = ['email__istartswith']
