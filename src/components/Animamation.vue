<template>
    <div>
        
    </div>
</template>
<script>
import * as THREE from 'three';

export default {
    name: 'Animamation',
mounted() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.$el.appendChild(renderer.domElement);
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshPhongMaterial({ color: 0x0C7CEC, transparent: true, opacity: 0.8 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);
    const animate = function () {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;

        renderer.render(scene, camera);
    };

    // texture per la sfera 
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('../public/images/footer-bg.jpg');
    material.map = texture;
    animate();
    // controllo per il ridimensionamento della finestra
    window.addEventListener('resize', function () {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

}
};
</script>

<style lang="scss" scoped>

</style>