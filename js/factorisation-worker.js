(function(worker){
    worker.addEventListener('message', function(){
        worker.postMessage('pong');
    });
})(this);
