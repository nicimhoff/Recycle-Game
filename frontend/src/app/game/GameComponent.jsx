import React from 'react';
//import THREE from 'etc/three.js'
var THREE = require('three');
var scene = new THREE.scene
scene.background = new THREE.Color( 0xf0f0f0 );
var camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var objects = [];

camera.position.z = 1000;


  function init() {
    scene.add(new THREE.AmbientLight(0x0f0f0f));
      var light = new THREE.SpotLight( 0xffffff, 1.5 );
      light.position.set( 0, 500, 2000 );

      scene.add(light);
      var geometry = new THREE.SphereGeometry(40,40,40);

      for (var i = 0; i < 100; i++) {
          var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

          object.position.x = Math.random() * 1000 - 500;
          object.position.y = Math.random() * 600 - 300;
          object.position.z = Math.random() * 800 - 400;

          object.castShadow = true;
          object.receiveShadow = true;

          scene.add( object );

          objects.push( object );
      }

      var controls = new THREE.DragControls( objects, camera, renderer.domElement );
      controls.addEventListener( 'dragstart', dragStartCallback );
      controls.addEventListener( 'dragend', dragendCallback );
  }
  function animate(){
      requestAnimationFrame(this.animate())

      renderer.render(scene,camera)
  }
 init()
 animate()



