function entryForm () {
    return {
        restrict: 'E',
        templateUrl: 'templates/entry-form.html'
    };
};


angular
    .module('app')
    .directive('entryForm', entryForm);