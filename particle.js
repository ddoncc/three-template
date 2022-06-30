import * as THREE from 'three'

class Particle {
    constructor(r, x, y, z, scene) {
        const geo = new THREE.SphereGeometry(r)
        const mat = new THREE.MeshStandardMaterial({
            color: THREE.MathUtils.randInt(0, 0xffffff / 1000) * 1000,
        })
        this.mesh = new THREE.Mesh(geo, mat)
        this.mesh.position.set(x, y, z)
        scene.add(this.mesh)
    }
}

export { Particle }