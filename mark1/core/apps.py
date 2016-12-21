from django.apps import AppConfig
from suit.apps import DjangoSuitConfig
from suit.menu import ParentItem, ChildItem
from django.utils.translation import ugettext_lazy as _


class CoreConfig(AppConfig):
    name = 'mark1.core'
    verbose_name = _('Cadastros')


class SuitConfig(DjangoSuitConfig):
    # layout = 'vertical'
    menu = (
        # ParentItem('Content', children=[
        #     ChildItem(model='demo.country'),
        #     ChildItem(model='demo.continent'),
        #     ChildItem(model='demo.showcase'),
        #     ChildItem('Custom view', url='/admin/custom/'),
        # ], icon='fa fa-leaf'),
        # ParentItem('Integrations', children=[
        #     ChildItem(model='demo.city'),
        # ]),
        # ParentItem('Users', children=[
        #     ChildItem(model='auth.user'),
        #     ChildItem('User groups', 'auth.group'),
        # ], icon='fa fa-users'),
        # ParentItem('Right Side Menu', children=[
        #     ChildItem('Password change', url='admin:password_change'),
        #     ChildItem('Open Google', url='http://google.com', target_blank=True),
        #
        # ], align_right=True, icon='fa fa-cog'),

        ParentItem(app='core', icon='fa fa-leaf'),
        ParentItem(app='auth', icon='fa fa-users'),
        ParentItem('...', children=[
            ChildItem('App Android', url='http://google.com', target_blank=True),
            ChildItem('App Ios', url='http://google.com', target_blank=True),
        ], align_right=True, icon='fa fa-cog', url='#'),
    )

    # def ready(self):
    #     super(SuitConfig, self).ready()