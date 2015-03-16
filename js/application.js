;(function(factors){
    var worker = new Worker('js/factorisation-worker.js');

    var input = document.getElementById('n');
    var output = document.getElementById('factors');

    worker.addEventListener('message', function(event){
        if (event.data.type == 'factor') {
            output.innerHTML += event.data.d;
            output.innerHTML += '&times;'
        }
        if (event.data.type == 'finish') {
            output.innerHTML += '1'
        }
        console.log(event.data);

    });

    function calculateFactors(){
        try {
            output.innerHTML = '';
            var n = parseInt(input.value);
            worker.postMessage({ 'n': n });
        } catch(e) {
            /* do nothing */
        }
    }

    input.addEventListener('change', calculateFactors);

    calculateFactors();

    var connection = new WebSocket('ws://localhost:8080');
    connection.onopen = function(){
        console.log('open connection');
    }
    connection.onclose = function(){
        console.log('close connection');
    }
})(factors);
