import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.157.0/build/three.module.js';
import SimplexNoise from 'https://cdn.jsdelivr.net/npm/simplex-noise@3.0.0/dist/esm/simplex-noise.js';




const container = document.getElementById('three-canvas');
const width = container.clientWidth;
const height = container.clientHeight;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.set(1, 1.8, 1.5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
container.appendChild(renderer.domElement);
renderer.setClearColor(0x000000, 0);

const pointLight = new THREE.PointLight(0xffffff, 10);
pointLight.position.set(2, 2, 2);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const radius = 1;
const widthSegments = 64;
const heightSegments = 64;
const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
const material = new THREE.MeshStandardMaterial({
  color: 0xfdf0d5,
  roughness: 0.0,
  metalness: 0.5,
  flatShading: false,
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const originalPositions = Float32Array.from(geometry.attributes.position.array);

const simplex = new SimplexNoise();

function animate(time = 0) {
  requestAnimationFrame(animate);

  const t = time * 0.001;

  const positions = geometry.attributes.position.array;
  const vertexCount = positions.length / 3;

  for (let i = 0; i < vertexCount; i++) {
    const ix = i * 3;
    const iy = ix + 1;
    const iz = ix + 2;

    const ox = originalPositions[ix];
    const oy = originalPositions[iy];
    const oz = originalPositions[iz];

    const noise = simplex.noise4D(ox * 1.5, oy * 1.5, oz * 1.5, t * 1.5);

    const displacement = 0.35 * noise;

    const length = Math.sqrt(ox * ox + oy * oy + oz * oz);
    const nx = ox / length;
    const ny = oy / length;
    const nz = oz / length;

    positions[ix] = ox + nx * displacement;
    positions[iy] = oy + ny * displacement;
    positions[iz] = oz + nz * displacement;
  }

  geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals();

  sphere.rotation.y += 0.002;
  sphere.rotation.x += 0.004;

  renderer.render(scene, camera);
}

animate();
