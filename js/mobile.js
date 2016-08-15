define(['helpers', 'bridge'], function(helpers, bridge) {
    var lastUpdate = Date.now();

    function handleOrientation(event) {
        if (Date.now() - lastUpdate > 1000 / 5) {
            lastUpdate = Date.now();

            var data = new bridge.Message(
                event.alpha,
                event.beta,
                event.gamma
            );

            helpers.logData(data);

            bridge.send(data);
        }
    }

    return {
        init: function() {
            window.addEventListener("deviceorientation", handleOrientation, true);
        }
    }
});
