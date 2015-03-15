;(function(factors){
    var worker = new Worker('js/factorisation-worker.js');
    worker.addEventListener('message', function(data){
        console.log(data);
    });
    worker.postMessage('ping');

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
