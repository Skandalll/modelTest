import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {Character} from "../Model/Character";

export default function Model() {
    return (
        <Canvas
            camera={{ position: [2, 0, 12.25], fov: 15 }}
            style={{
                backgroundColor: '#111a21',
                width: '100vw',
                height: '100vh',
            }}
        >
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
                <Character></Character>
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}