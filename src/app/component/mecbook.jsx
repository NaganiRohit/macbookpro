"use client";

import { ScrollControls, useFBO, useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"
function Mecbook() {
    let model = useGLTF("./mac.glb");
    let tex = useTexture("./red.jpg")
    let meshesh ={};
    model.scene.traverse((e)=>{
       
        meshesh[e.name] =e;

      
      
    });
    meshesh.screen.rotation.x= THREE.MathUtils.degToRad(180)
   meshesh.matte.material.map=tex;
   meshesh.matte.material.emissiveIntensity=0;
   meshesh.matte.material.metalness=0;
   meshesh.matte.material.roughness=1;
    let data = useScroll();
    useFrame((state,delta)=>{
      meshesh.screen.rotation.x= THREE.MathUtils.degToRad(180-data.offset*90)
    });
 
    return (
 

  <group position={[0,-10,20]}>
     <primitive  object={model.scene}/>
  </group>
 

  
  

);
};

export default Mecbook;
