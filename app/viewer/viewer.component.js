app.ViewerComponent = ViewerComponent;
app.ViewerComponent.prototype.Users = [];
ViewerComponent.annotations = [
  new ng.core.Component({
    selector: 'viewer',
    templateUrl: 'app/viewer/viewer.component.html'
  })
];
app.ViewerComponent.prototype.ARROW_DOWN = '▲';
app.ViewerComponent.prototype.ARROW_UP = '▼';

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
app.ViewerComponent.prototype.descByName = true;
app.ViewerComponent.prototype.descByAge = false;
app.ViewerComponent.prototype.descByGender = false;
app.ViewerComponent.prototype.descByDepartment = false;
app.ViewerComponent.prototype.descByAddress = false;
app.ViewerComponent.prototype.descByPhone = false;
app.ViewerComponent.prototype.descByEmail = false;
function ViewerComponent() {
  loadJSON('mock.json',
    function (data) {
      app.ViewerComponent.prototype.Users = data;
      app.ViewerComponent.prototype.sortByName();
    },
    function (xhr) { alert(xhr); });
  app.ViewerComponent.prototype.showTable();
}
function dynamicSort(property, isSortDesc) {
  return function (a, b) {
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    var sortingDirection = -1 + 2 * isSortDesc;
    return result * sortingDirection;
  }
}
app.ViewerComponent.prototype.sortByName = function () {
  app.ViewerComponent.prototype.Users.sort(dynamicSort('name', app.ViewerComponent.prototype.descByName));
  app.ViewerComponent.prototype.descByName = !app.ViewerComponent.prototype.descByName;
}
app.ViewerComponent.prototype.sortByAge = function () {
  app.ViewerComponent.prototype.Users.sort(dynamicSort('age', this.descByAge));
  app.ViewerComponent.prototype.descByAge = !app.ViewerComponent.prototype.descByAge;
}
app.ViewerComponent.prototype.sortByGender = function () {
  app.ViewerComponent.prototype.Users.sort(dynamicSort('gender', this.descByGender));
  app.ViewerComponent.prototype.descByGender = !app.ViewerComponent.prototype.descByGender;
}
app.ViewerComponent.prototype.sortByDepartment = function () {
  app.ViewerComponent.prototype.Users.sort(dynamicSort('department', this.descByDepartment));
  app.ViewerComponent.prototype.descByDepartment = !app.ViewerComponent.prototype.descByDepartment;
}
app.ViewerComponent.prototype.sortByAddress = function () {
  app.ViewerComponent.prototype.Users.sort(dynamicSort('address', this.descByAddress));
  app.ViewerComponent.prototype.descByAddress = !app.ViewerComponent.prototype.descByAddress;
}
app.ViewerComponent.prototype.sortByPhone = function () {
  app.ViewerComponent.prototype.Users.sort(dynamicSort('phone', this.descByPhone));
  app.ViewerComponent.prototype.descByPhone = !app.ViewerComponent.prototype.descByPhone;
}
app.ViewerComponent.prototype.sortByEmail = function () {
  app.ViewerComponent.prototype.Users.sort(dynamicSort('email', this.descByEmail));
  app.ViewerComponent.prototype.descByEmail = !app.ViewerComponent.prototype.descByEmail;
}
