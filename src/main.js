import Vue from 'vue'
import App from './App.vue'
import * as THREE from '../three/three';
//import controls from 'three/three/examples/js/controls/OrbitControls.js'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');



var scene = new THREE.Scene();
scene.background = new THREE.Color(0x2E2B30);


var camera = new THREE.PerspectiveCamera(45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);


document.getElementById('pyramide').appendChild(renderer.domElement);
//document.body.appendChild(renderer.domElement);

//controls = new THREE.OrbitControls(camera, renderer.domElement);


window.addEventListener('resize', function () {

  var width = window.innerWidth;
  var height = window.innerHeight;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

});

camera.position.z = 4;


var keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
keyLight.position.set(-100, 0, 100);


var fillLight = new THREE.DirectionalLight(0xffffff, .5);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();


scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);




var objLoader = new THREE.OBJLoader();

objLoader.load('louvre.obj', function (object){
  scene.add(object);

  function animate(){
    requestAnimationFrame(animate);

    object.rotation.y += 0.005;
  }

  animate();
});



var render = function () {
  renderer.render(scene, camera);
};

var GameLoop = function () {
  requestAnimationFrame(GameLoop);
  render();
};

GameLoop();



