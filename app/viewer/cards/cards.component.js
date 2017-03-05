app.CardsComponent = CardsComponent;
CardsComponent.annotations = [
    new ng.core.Component({
        selector: 'cards',
        templateUrl: 'app/viewer/cards/cards.component.html',
        inputs: [
            'users'
        ]
    })
];
function CardsComponent() {
}
