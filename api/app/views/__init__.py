from . import contact_form_view, web_subscriber_view, blog_view

ContactFormViewSet = contact_form_view.ContactFormViewSet.as_view()

WebSubscriberViewSet = web_subscriber_view.WebSubscriberViewSet.as_view()

BlogViewSet = blog_view.BlogViewSet.as_view()
BlogDetailViewSet = blog_view.BlogDetailViewSet.as_view()
