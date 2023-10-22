

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Character(props) {
  const { nodes, materials } = useGLTF('/.gltf/character-transformed.glb    ')
    console.log(materials)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.HG_Body.geometry} material={materials.PaletteMaterial001} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.HG_Dress_Pants_Male001.geometry} material={materials.PaletteMaterial002} rotation={[Math.PI / 2, 0, 0]} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.HG_Eyes_1.geometry} material={materials.PaletteMaterial004} />
        <mesh geometry={nodes.HG_Eyes_2.geometry} material={materials.PaletteMaterial003} />
      </group>
      <mesh geometry={nodes.HG_Leather_Dress_Shoe_Male001.geometry} material={materials.PaletteMaterial005} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/character-transformed.glb')
