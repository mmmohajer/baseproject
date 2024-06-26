from django.contrib import admin


class ContactFormAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name',
                    'email', 'subject']
    list_per_page = 10
    search_fields = ['email__istartswith']
    list_filter = ['subject']
