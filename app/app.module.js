var WelcomeComponent = app.WelcomeComponent;
var ViewerComponent = app.ViewerComponent;
const appRoutes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'viewer', component: ViewerComponent },
  { path: '**', redirectTo: '/welcome' }
];
(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule, ng.router.RouterModule.forRoot(appRoutes) ],
      declarations: [ app.AppComponent, WelcomeComponent, ViewerComponent ],
      bootstrap: [ app.AppComponent ]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));