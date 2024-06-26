from django.contrib import admin


class BlogAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'is_draft', 'is_popular']
    list_editable = ['is_draft', 'is_popular']
    list_per_page = 10
    search_fields = ['title__istartswith', 'slug__istartswith']


class LabelAdmin(admin.ModelAdmin):
    list_display = ['title', 'label_type']
    list_editable = ['label_type']
    list_per_page = 10
    search_fields = ['title__istartswith']


class BlogLabelAdmin(admin.ModelAdmin):
    list_display = ['blog_title', 'label_title']
    list_per_page = 10
    search_fields = ['blog__title__istartswith', 'label__title__istartswith']

    @admin.display(ordering='blog__title')
    def blog_title(self, blog_label):
        return blog_label.blog.title

    @admin.display(ordering='label__title')
    def label_title(self, blog_label):
        return blog_label.label.title
