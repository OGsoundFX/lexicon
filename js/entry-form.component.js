const entryForm = {
    bindings: {
        data: '=',
        submit: '&'
    },
    controller: 'FormController as form',
    templateUrl: 'templates/entry-form.html'
};

angular
    .module('app')
    .component('entryForm', entryForm)