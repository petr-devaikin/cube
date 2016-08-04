define(['scene', 'bridge', 'helpers'], function(scene, bridge, helpers) {
    return {
        init: function() {
            scene.create();

            function updateSubscription() {
                bridge.subscribe().then(function(m) {
                    helpers.logData(m);
                    scene.updatePosition(m);
                    updateSubscription();
                });
            }

            updateSubscription();
        }
    }
});
