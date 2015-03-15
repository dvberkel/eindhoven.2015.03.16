;(function(factors){
    var input = document.getElementById('n');
    var output = document.getElementById('factors');

    function calculateFactors(){
        try {
            var n = parseInt(input.value);
            var result = factors.of(n);
            output.innerHTML = result.join('&times;');
        } catch(e) {
            /* do nothing */
        }
    }

    input.addEventListener('change', calculateFactors);

    calculateFactors();
})(factors);
