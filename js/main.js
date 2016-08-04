define(['helpers', 'mobile', 'laptop'], function(helpers, mobile, laptop) {
    return function() {
        if (helpers.mobileCheck()) {
            console.log('go mobile');
            mobile.init();
        }
        else {
            console.log('go laptop');
            laptop.init();
        }
    }
});

