(function (app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: `<nav></nav>
<router-outlet></router-outlet>`
    })
      .Class({
        constructor: function () { }
      });
})(window.app || (window.app = {}));