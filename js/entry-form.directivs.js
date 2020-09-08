function entryForm () {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {
            data: '='
        },
        controller: 'FormController as form',
        templateUrl: 'templates/entry-form.html'
    };
};


angular
    .module('app')
    .directive('entryForm', entryForm);