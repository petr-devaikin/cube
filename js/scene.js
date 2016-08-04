define([], function() {
    var targetQuaternion = new THREE.Quaternion();
    var currentQuaternion = new THREE.Quaternion();

    return {
        create: function() {
            var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera( 40, window.innerWidth/window.innerHeight, 0.1, 1000 );

            var renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setClearColor( 0xf9f9f9 );
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );

            light = new THREE.DirectionalLight( 0xffffff );
            light.position.set( 0, 0, 1 );
            scene.add( light );

            var geometry = new THREE.BoxGeometry( 1, 1, 1 );
            var material = new THREE.MeshBasicMaterial( {
                color: 0xffffff
            } );
            var cube = new THREE.Mesh( geometry, material );
            scene.add( cube );

            var egh = new THREE.EdgesHelper( cube, 0xcccccc );
            egh.material.linewidth = 2;
            scene.add( egh );

            camera.position.z = 5;

            var render = function () {
                requestAnimationFrame( render );

                currentQuaternion.slerp(targetQuaternion, 0.1);
                cube.rotation.setFromQuaternion( currentQuaternion, 'ZXY' );

                renderer.render(scene, camera);
            };

            render();
        },
        updatePosition: function(message) {
            var euler = new THREE.Euler(
                message.beta / 180 * Math.PI,
                message.gamma / 180 * Math.PI,
                0//-message.alpha / 180 * Math.PI,

            );
            targetQuaternion.setFromEuler(euler);
        }
    }
})
