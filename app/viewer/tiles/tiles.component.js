app.TilesComponent = TilesComponent;
TilesComponent.annotations = [
    new ng.core.Component({
        selector: 'tiles',
        templateUrl: 'app/viewer/tiles/tiles.component.html',
        inputs: [
            'users'
        ]
    })
];

app.TilesComponent.prototype.onlyUnique = function (value, index, self) {
    return self.findIndex((item) => { return item.department === value.department; }) === index;
};
function TilesComponent() {
}
app.TilesComponent.prototype.ngOnInit = function () {
    app.TilesComponent.prototype.departments = this.users.filter(this.onlyUnique).map(function(a) {return a.department;});
};