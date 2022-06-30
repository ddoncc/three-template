import './style.css'

import * as THREE from 'three'

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Particle } from "./particle"
import { randFloat } from 'three/src/math/MathUtils';



// Init
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg")
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.set(5, 5, 5)

// Orbit camera controls
const controls = new OrbitControls(camera, renderer.domElement)

// Helper grid
const grid = new THREE.GridHelper()
scene.add(grid)

// Ambient lighting so we can see
const l = new THREE.AmbientLight(0xffffff)
scene.add(l)

// Test particle
const p = new Particle(1, 0, 0, 0, scene)

// Draw loop
function animate() {
    requestAnimationFrame(animate)

    controls.update()

    renderer.render(scene, camera)

}
animate()

window.addParticle = function() {
    const p = new Particle(randFloat(0.001, 2), randFloat(-5, 5), randFloat(-5, 5), randFloat(-5, 5), scene)
}