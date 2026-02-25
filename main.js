(function(){
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x222222);

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(2, 2, 5);

  const renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(1.5,1.5,1.5);
  const material = new THREE.MeshStandardMaterial({color:0x00aaff, metalness:0.3, roughness:0.4});
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(5,10,7);
  scene.add(dirLight);
  scene.add(new THREE.AmbientLight(0x404040, 0.8));

  function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.013;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', ()=>{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
