"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  PerspectiveCamera, 
  Environment, 
  MeshDistortMaterial,
  GradientTexture
} from "@react-three/drei";
import * as THREE from "three";

function WaterMesh() {
  const mesh = useRef<THREE.Mesh>(null);
  
  // Optimize animation by using useMemo for timing parameters
  const animParams = useMemo(() => ({
    speedFactor: 0.15,  // Daha yavaş animasyon
    amplitudeFactor: 0.02  // Daha küçük genlik
  }), []);
  
  useFrame((state) => {
    if (mesh.current) {
      // Performans için basitleştirilmiş ve daha yumuşak animasyon
      const t = state.clock.getElapsedTime();
      mesh.current.rotation.x = 0.05 + Math.sin(t * animParams.speedFactor) * animParams.amplitudeFactor;
      mesh.current.rotation.y = Math.cos(t * animParams.speedFactor * 0.8) * animParams.amplitudeFactor;
      mesh.current.position.y = -0.5 + Math.sin(t * animParams.speedFactor * 1.2) * 0.015;
    }
  });

  return (
    <mesh
      ref={mesh}
      scale={[2.7, 0.4, 2.7]} // Daha geniş ve yassı havuz şekli
      position={[0, -0.5, 0]}
    >
      <boxGeometry args={[1, 0.15, 1]} /> {/* Daha basit ve yassı geometri */}
      <MeshDistortMaterial
        color="#7DD3FC" // Daha açık ve canlı mavi tonu (sky-400)
        attach="material"
        distort={0.15} // Daha az bozulma
        speed={0.6} // Daha yavaş animasyon
        roughness={0.1}
        metalness={0.3}
      >
        <GradientTexture
          stops={[0, 0.3, 0.6, 0.9, 1]}
          colors={['#BAE6FD', '#7DD3FC', '#38BDF8', '#0EA5E9', '#0284C7']} // Yeni ve daha açık mavi tonları
          size={256} // Daha küçük doku boyutu ile performans iyileştirmesi
        />
      </MeshDistortMaterial>
    </mesh>
  );
}

// Havuzun kenarlarını temsil eden statik mesh
function PoolEdges() {
  return (
    <mesh position={[0, -0.55, 0]} rotation={[0, 0, 0]}>
      <boxGeometry args={[3.0, 0.1, 3.0]} />
      <meshStandardMaterial color="#0EA5E9" roughness={0.2} /> {/* Daha açık mavi kenarlar */}
    </mesh>
  );
}

// Havuz zemini
function PoolBottom() {
  return (
    <mesh position={[0, -0.65, 0]} rotation={[0, 0, 0]}>
      <boxGeometry args={[2.7, 0.05, 2.7]} />
      <meshStandardMaterial color="#0284C7" roughness={0.3} /> {/* Daha açık mavi zemin */}
    </mesh>
  );
}

// Havuz tabanındaki karoları temsil eden mesh
function PoolTiles() {
  return (
    <group position={[0, -0.64, 0]}>
      {/* Karo deseni oluştur */}
      <mesh>
        <planeGeometry args={[2.65, 2.65]} />
        <meshStandardMaterial color="#0369A1" roughness={0.5}>
          <GradientTexture
            stops={[0, 1]}
            colors={['#0284C7', '#0369A1']}
            size={64}
          />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
}

export default function WaterAnimation() {
  // useMemo ile gereksiz yeniden render'ları önle
  const lights = useMemo(() => (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, 5, -5]} intensity={0.6} color="#BAE6FD" />
      <spotLight position={[0, 4, 2]} angle={0.3} penumbra={1} intensity={1} />
    </>
  ), []);

  return (
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-sky-300 to-sky-500">
      {/* Arkaplan gradyenti - daha açık ve canlı mavi tonları */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-400 to-sky-500 opacity-80"></div>
      
      {/* Canvas havuz gösterimi için - performans optimizasyonu */}
      <div className="absolute inset-0">
        <Canvas dpr={[1, 1.5]} performance={{ min: 0.5, max: 0.75 }}>
          <PerspectiveCamera makeDefault position={[0, 1.5, 3.5]} fov={40} />
          {lights}
          
          {/* Havuz bileşenleri */}
          <PoolTiles />
          <PoolBottom />
          <PoolEdges />
          <WaterMesh />
          
          <Environment preset="sunset" />
        </Canvas>
      </div>
      
      {/* Sayfa içeriğiyle uyum sağlayan overlay - daha açık ve parlak */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-300/10 to-sky-400/30 pointer-events-none"></div>
      
      {/* Işık yansımaları - su yüzeyindeki parlaklık */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] left-[20%] w-[100px] h-[60px] bg-white/20 blur-xl rounded-full transform rotate-45"></div>
        <div className="absolute top-[40%] left-[60%] w-[70px] h-[40px] bg-white/15 blur-xl rounded-full transform -rotate-15"></div>
      </div>
      
      {/* Kabarcık efektleri - optimize edilmiş ve daha az sayıda */}
      <div className="bubble" style={{ left: '15%', animationDelay: '0s', width: '25px', height: '25px' }}></div>
      <div className="bubble" style={{ left: '40%', animationDelay: '3s', width: '20px', height: '20px' }}></div>
      <div className="bubble" style={{ left: '65%', animationDelay: '6s', width: '30px', height: '30px' }}></div>
      <div className="bubble" style={{ left: '85%', animationDelay: '2s', width: '15px', height: '15px' }}></div>
    </div>
  );
} 