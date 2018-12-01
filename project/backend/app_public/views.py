from django.views.generic import TemplateView


class Index(TemplateView):
    template_name = 'app_public/index.html'
