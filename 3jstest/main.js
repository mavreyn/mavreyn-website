var container=document.getElementById("container")
var renderer = new THREE.WebGLRenderer({antialias: true});
var camera = new THREE.PerspectiveCamera(80,container.clientWidth/container.clientHeight,0.1,10000);
var scene = new THREE.Scene();

scene.add(camera);
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setClearColor(0x000000)
container.append(renderer.domElement);

///////////////////////////////////////////////

// Camera
camera.position.z = 2;

// Material
var material = new THREE.LineBasicMaterial({
    color: 0x42a4ff,
    linewidth: 100
});
/*var material = new THREE.MeshPhongMaterial({
  color      :  new THREE.Color("rgb(226,35,213)"),
  emissive   :  new THREE.Color("rgb(255,128,64)"),
  specular   :  new THREE.Color("rgb(255,155,255)"),
  shininess  :  10,
  shading    :  THREE.FlatShading,
  transparent: 0.1,
  opacity    : 1
});*/

/*
var L1 = new THREE.PointLight( 0xffffff, 1);
L1.position.z = 100;
L1.position.y = 100;
L1.position.x = 100;
scene.add(L1);

var L2 = new THREE.PointLight( 0xffffff, 0.8);
L2.position.z = 200;
L2.position.y = 50;
L2.position.x = -100;
scene.add(L2);
*/

// IcoSphere -> THREE.IcosahedronGeometry(80, 1) 1-4
var geometry = new THREE.IcosahedronGeometry(1,1)
var edges = new THREE.EdgesGeometry(geometry)
var Ico = new THREE.LineSegments(edges, material)

//var Ico = new THREE.Mesh(geometry, material);
scene.add(Ico);

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = 4;
controls.maxDistance = 2;
controls.enablePan = false;
controls.update();

// Render
function play() {
    requestAnimationFrame(play);	
    Ico.rotation.y+= 0.001
    Ico.rotation.x+= 0.001
    renderer.render(scene, camera);
}

play();

window.addEventListener('resize', onWindowResize);

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}