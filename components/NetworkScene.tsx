"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Animated Node
function Node({ position, size = 0.06, pulseOffset = 0 }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + pulseOffset;
    const scale = 1 + Math.sin(t * 2.5) * 0.35;
    if (meshRef.current) meshRef.current.scale.setScalar(scale);
    if (glowRef.current) {
      glowRef.current.scale.setScalar(scale * 1.8);
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity = 0.15 + Math.sin(t * 2.5) * 0.1;
    }
  });
  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial color="#C8A84E" emissive="#C8A84E" emissiveIntensity={1.5} roughness={0.2} metalness={0.3} />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[size * 1.5, 16, 16]} />
        <meshBasicMaterial color="#C8A84E" transparent opacity={0.2} depthWrite={false} />
      </mesh>
    </group>
  );
}

// Animated Edge
function Edge({ start, end }) {
  const lineRef = useRef<THREE.Line>(null);
  const points = useMemo(() => {
    const s = new THREE.Vector3(...start), e = new THREE.Vector3(...end);
    const mid = s.clone().add(e).multiplyScalar(0.5); mid.y += 0.15;
    return new THREE.QuadraticBezierCurve3(s, mid, e).getPoints(24);
  }, [start, end]);
  useFrame(({ clock }) => {
    if (!lineRef.current) return;
    const t = clock.getElapsedTime();
    (lineRef.current.material as THREE.LineBasicMaterial).opacity = 0.08 + Math.sin(t * 1.5 + start[0] * 3) * 0.05;
  });
  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);
  return (<line ref={lineRef} geometry={geometry}><lineBasicMaterial color="#5C4A31" transparent opacity={0.12} depthWrite={false} /></line>);
}

// DataPacket
function DataPacket({ start, end, speed = 1 }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const curve = useMemo(() => {
    const s = new THREE.Vector3(...start), e = new THREE.Vector3(...end);
    const mid = s.clone().add(e).multiplyScalar(0.5); mid.y += 0.15;
    return new THREE.QuadraticBezierCurve3(s, mid, e);
  }, [start, end]);
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = (clock.getElapsedTime() * speed * 0.3) % 1;
    meshRef.current.position.copy(curve.getPointAt(t));
  });
  return (<mesh ref={meshRef}><sphereGeometry args={[0.02, 8, 8]} /><meshBasicMaterial color="#C8A84E" transparent opacity={0.9} /></mesh>);
}

// CoreRing
function CoreRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.y += 0.002;
      ringRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });
  return (<mesh ref={ringRef} rotation={[Math.PI / 2.5, 0, 0]}><torusGeometry args={[0.45, 0.008, 16, 80]} /><meshStandardMaterial color="#C8A84E" emissive="#C8A84E" emissiveIntensity={0.5} roughness={0.4} metalness={0.6} transparent opacity={0.5} /></mesh>);
}

// SceneContent
function SceneContent() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  const targetRotation = useRef({ x: 0, y: 0 });
  useFrame(() => {
    if (groupRef.current) {
      targetRotation.current.x += (mouse.y * 0.3 - targetRotation.current.x) * 0.04;
      targetRotation.current.y += (mouse.x * 0.5 - targetRotation.current.y) * 0.04;
      groupRef.current.rotation.x = targetRotation.current.x;
      groupRef.current.rotation.y = targetRotation.current.y;
    }
  });
  const nodes = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 14; i++) {
      const angle = (i / 14) * Math.PI * 2;
      positions.push([Math.cos(angle) * (0.7 + Math.random() * 0.6), (Math.random() - 0.5) * 1.2, Math.sin(angle) * (0.7 + Math.random() * 0.6)]);
    }
    return positions;
  }, []);
  const edges = useMemo(() => {
    const result = [];
    for (let i = 0; i < nodes.length; i++) {
      for (const j of [(i + 1) % nodes.length, (i + 3) % nodes.length, (i + 5) % nodes.length]) {
        if (!result.some(([a, b]) => (a === i && b === j) || (a === j && b === i))) result.push([i, j]);
      }
    }
    return result;
  }, [nodes]);
  return (
    <group ref={groupRef}>
      <CoreRing />
      {Array.from({ length: 40 }).map((_, i) => (<mesh key={`particle-${i}`} position={[(Math.random() - 0.5) * 2.5, (Math.random() - 0.5) * 2.5, (Math.random() - 0.5) * 2.5]}><sphereGeometry args={[0.008, 4, 4]} /><meshBasicMaterial color="#C8A84E" transparent opacity={0.15 + Math.random() * 0.2} depthWrite={false} /></mesh>))}
      {nodes.map((pos, i) => <Node key={`node-${i}`} position={pos} pulseOffset={i * 0.4} />)}
      {edges.map(([a, b], i) => <Edge key={`edge-${i}`} start={nodes[a]} end={nodes[b]} />)}
      {edges.slice(0, 12).map(([a, b], i) => <DataPacket key={`packet-${i}`} start={nodes[a]} end={nodes[b]} speed={0.6 + Math.random() * 1.2} />)}
    </group>
  );
}

export default function NetworkScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0.2, 1.8], fov: 55, near: 0.1, far: 10 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.0 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.15} />
        <pointLight position={[1, 1, 1]} intensity={0.5} color="#C8A84E" />
        <pointLight position={[-1, -0.5, -0.5]} intensity={0.3} color="#8B7355" />
        <SceneContent />
      </Canvas>
    </div>
  );
}