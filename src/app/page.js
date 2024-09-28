"use client"

import { Environment, OrbitControls, ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Mecbook from "./component/mecbook"

function page() {
  return (
    <div className="w-full h-screen   ">
        <div className="navbar line pt-10 pb-3 flex gap-10 absolute top-0 left-1/2 -translate-x-1/2">
        {["iPhon","ios","iPad","services","mac","Products","iPhon","ios","iPad","services","mac","Products"].map((e, index) => (
  <a key={index} href="" className="text-white text-sm capitalize font-[400]">
    {e}
  </a>
))}

        </div>


      <div className="absolute flex flex-col items-center top-28 left-1/2 -translate-x-1/2 ">
     <h3 className="masked text-5xl tracking-tighter font-[700]">macbook pro.</h3>
     <h5>oh so pro !</h5>
     <p className="text-center leading-4 text-sm w-3/4">lorem input doller how none into product system </p>
      </div>
    <Canvas camera={{fov:20, position:[0,-10,150]}}>
      <Environment files={["./light.exr"]}/>
      <ScrollControls pages={4}>
        <Mecbook/>
    </ScrollControls>
    </Canvas>
    </div>

  )
}

export default page
