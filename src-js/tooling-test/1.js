// if I renamed this, there's no tooling to tell me to update line 16 (no build error)
let toolingTest = (function(){
    function privateMethod() {
    }
    
    var publicApi = {
        publicMethod: function() {
        }
    };
    return publicApi;
})();

// privateOne isn't actually accessible here
// but intellisense gave it to me as a suggestion
// as well as publicApi and toolingTest even though those make no sense after the .
toolingTest.privateMethod();