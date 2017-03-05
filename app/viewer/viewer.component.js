app.ViewerComponent = ViewerComponent;
app.ViewerComponent.prototype.Users=[];
ViewerComponent.annotations = [
  new ng.core.Component({
    selector: 'viewer',
    templateUrl: 'app/viewer/viewer.component.html'
  })
];

app.ViewerComponent.prototype.showTable = function () {
  app.ViewerComponent.prototype.isTable = true;
  app.ViewerComponent.prototype.isCards = false;
  app.ViewerComponent.prototype.isTiles = false;
};
app.ViewerComponent.prototype.showCards = function () {
  app.ViewerComponent.prototype.isTable = false;
  app.ViewerComponent.prototype.isCards = true;
  app.ViewerComponent.prototype.isTiles = false;
};
app.ViewerComponent.prototype.showTiles = function () {
  app.ViewerComponent.prototype.isTable = false;
  app.ViewerComponent.prototype.isCards = false;
  app.ViewerComponent.prototype.isTiles = true;
};
function ViewerComponent() {
  loadJSON('mock.json',
         function(data) { app.ViewerComponent.prototype.Users=data; },
         function(xhr) { alert(xhr); });
  app.ViewerComponent.prototype.showTable();
}
