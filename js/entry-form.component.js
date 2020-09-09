const entryForm = {
    bindings: {
        data: '=',
        submit: '&'
    },
    controller: 'FormController',
    templateUrl: 'templates/component-entry-form.html'
};

angular
    .module('app')
    .component('entryForm', entryForm)