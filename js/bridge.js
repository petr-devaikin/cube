define([], function() {
    pubnub = PUBNUB({
        publish_key : 'pub-c-2d711ae1-64f5-48dc-ba98-67574a581153',
        subscribe_key : 'sub-c-3409ca66-595a-11e6-bd9c-0619f8945a4f'
    })

    return {
        Message: function(alha, beta, gamma) {
            this.alpha = alpha;
            this.beta = beta;
            this.gamma = gamma;
            this.timestamp = Date.new();
        },
        subscribe: function() {
            return new Promise(function(resolve, reject) {
                pubnub.subscribe({
                    channel : 'main_cube',
                    message : function (m) {
                        resolve(m);
                    },
                    error : function (error) {
                        console.log(JSON.stringify(error));
                        reject(error);
                    }
                });
            });
        },
        send: function(message) {
            return new Promise(function(resolve, reject) {
                pubnub.publish({
                    channel : 'main_cube',
                    message : message,
                    callback : function(m){
                        resolve(m);
                    }
                });
            });
        }
    }
});
