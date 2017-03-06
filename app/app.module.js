var WelcomeComponent = app.WelcomeComponent;
var ViewerComponent = app.ViewerComponent;
var CardsComponent = app.CardsComponent;
var TableComponent = app.TableComponent;
var TilesComponent = app.TilesComponent;
var FilterPipe = app.FilterPipe;
const appRoutes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'viewer', component: ViewerComponent },
  { path: '**', redirectTo: '/welcome' }
];
(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule, ng.router.RouterModule.forRoot(appRoutes) ],
      declarations: [ app.AppComponent, WelcomeComponent, ViewerComponent, CardsComponent, TableComponent, TilesComponent, FilterPipe ],
      bootstrap: [ app.AppComponent ]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));