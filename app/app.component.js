(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<welcome></welcome>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));