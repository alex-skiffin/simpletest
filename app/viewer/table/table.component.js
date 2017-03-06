app.TableComponent = TableComponent;
TableComponent.annotations = [
    new ng.core.Component({
        selector: 'view-table',
        templateUrl: 'app/viewer/table/table.component.html',
        inputs: [
            'users'
        ]
    })
];
var desc = true;
app.TableComponent.prototype.sortByName = function () {
    if (desc)
        this.users.sort((a, b) => a.name == b.name ? 0 : +(a.name > b.name) || -1);
    else
        this.users.sort((a, b) => a.name == b.name ? 0 : +(a.name < b.name) || -1);
    desc = !desc;
}
app.TableComponent.prototype.sortByAge = function () {
    if (desc)
        this.users.sort((a, b) => a.age == b.age ? 0 : +(a.age > b.age) || -1);
    else
        this.users.sort((a, b) => a.age == b.age ? 0 : +(a.age < b.age) || -1);
    desc = !desc;
}
app.TableComponent.prototype.sortByGender = function () {
    if (desc)
        this.users.sort((a, b) => a.gender == b.gender ? 0 : +(a.gender > b.gender) || -1);
    else
        this.users.sort((a, b) => a.gender == b.gender ? 0 : +(a.gender < b.gender) || -1);
    desc = !desc;
}
app.TableComponent.prototype.sortByDepartment = function () {
    if (desc)
        this.users.sort((a, b) => a.department == b.department ? 0 : +(a.department > b.department) || -1);
    else
        this.users.sort((a, b) => a.department == b.department ? 0 : +(a.department < b.department) || -1);
    desc = !desc;
}
app.TableComponent.prototype.sortByAddress = function () {
    if (desc)
        this.users.sort((a, b) => a.address == b.address ? 0 : +(a.address > b.address) || -1);
    else
        this.users.sort((a, b) => a.address == b.address ? 0 : +(a.address < b.address) || -1);
    desc = !desc;
}
app.TableComponent.prototype.sortByPhone = function () {
    if (desc)
        this.users.sort((a, b) => a.phone == b.phone ? 0 : +(a.phone > b.phone) || -1);
    else
        this.users.sort((a, b) => a.phone == b.phone ? 0 : +(a.phone < b.phone) || -1);
    desc = !desc;
}
app.TableComponent.prototype.sortByEmail = function () {
    if (desc)
        this.users.sort((a, b) => a.email == b.email ? 0 : +(a.email > b.email) || -1);
    else
        this.users.sort((a, b) => a.email == b.email ? 0 : +(a.email < b.email) || -1);
    desc = !desc;
}
function TableComponent() {
}
