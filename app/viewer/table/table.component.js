app.TableComponent = TableComponent;
TableComponent.annotations = [
    new ng.core.Component({
        selector: 'table',
        templateUrl: 'app/viewer/table/table.component.html',
        inputs: [
            'users'
        ]
    })
];
function TableComponent() {
}
