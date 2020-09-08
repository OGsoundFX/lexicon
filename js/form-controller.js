function FormController () {
    this.onSubmit = function () {
        this.submit();
        // calls the submit tag from the form object in the index.html
        // which is binding to our submitEntry function from our entry-controller
    };
};

angular
    .module('app')
    .controller('FormController', FormController);