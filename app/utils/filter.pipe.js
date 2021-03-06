app.FilterPipe = ng.core.Pipe({
  name: 'filter',
  pure: false
}).Class({
  constructor: function () { },
  transform: function (items, field, value) {
    if (!items) return [];
    return items.filter(it => it[field] == value);
  }
});