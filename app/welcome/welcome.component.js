app.WelcomeComponent = WelcomeComponent; // "export"
WelcomeComponent.annotations = [
  new ng.core.Component({
    selector: 'welcome',
    templateUrl: 'app/welcome/welcome.component.html'
  })
];
function WelcomeComponent() {
}
