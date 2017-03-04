var WelcomeComponent = app.WelcomeComponent;
var ViewerComponent = app.ViewerComponent;
(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule ],
      declarations: [ app.AppComponent, WelcomeComponent, ViewerComponent ],
      bootstrap: [ app.AppComponent ]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));