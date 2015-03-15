;(function(factors){
    // implement factors.of
    factors.of = function(n){
        var result = [];
        var d = 2;
        while (n >= d) {
            while (n % d == 0) {
                result.push(d);
                n = n/d;
            }
            d += 1;
        }
        return result;
    }
})(window.factors = window.factors || {});
