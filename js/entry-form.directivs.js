function entryForm () {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {
            data: '=',
            submit: '&',
        },
        controller: 'FormController as form',
        templateUrl: 'templates/entry-form.html'
    };
};


angular
    .module('app')
    .directive('entryForm', entryForm);