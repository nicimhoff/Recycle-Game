import React from 'react';
import THREE from 'etc/three.js'
var THREE = require('three');
var scene = new THREE.scene
scene.background = new THREE.Color( 0xf0f0f0 );
var camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 1000;

class GameComponent extends React.Component {  
  constructor(props) {
    super(props);

    this.state = {
      gameScore: 0
    };
  }
  init() {
    scene.add(new THREE.AmbientLight(0x0f0f0f));
      var light = new THREE.SpotLight( 0xffffff, 1.5 );
      light.position.set( 0, 500, 2000 );

      scene.add(light);
  }
  animate(){
      requestAnimationFrame(this.animate())

      renderer.render(scene,camera)
  }
    render() {

        init()
        animate()
    }
}


export default GameComponent;