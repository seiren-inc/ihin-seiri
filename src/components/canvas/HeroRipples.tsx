'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const RippleShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uResolution: { value: new THREE.Vector2() },
    uColor: { value: new THREE.Color('#e8f1f5') }, // 明るい淡い青（白背景に馴染むベース色）
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    uniform vec3 uColor;
    varying vec2 vUv;

    void main() {
      vec2 st = gl_FragCoord.xy / uResolution.xy;
      st.x *= uResolution.x / uResolution.y;
      
      vec2 mouse = uMouse;
      mouse.x *= uResolution.x / uResolution.y;

      float dist = distance(st, mouse);

      // 上質な波紋（大きく、ゆっくり、なめらかに）
      float ripple = sin(dist * 15.0 - uTime * 2.0) * 0.5 + 0.5;
      ripple *= exp(-dist * 2.0);

      // ベースカラーから、波紋部分だけをほのかに濃い「青墨色」へ
      vec3 rippleColor = vec3(0.5, 0.65, 0.75); 
      vec3 finalColor = mix(uColor, rippleColor, ripple * 0.4);

      // 端に行くほど自然に白(透明)へフェードアウト
      float alpha = 1.0 - smoothstep(0.1, 1.4, distance(vUv, vec2(0.5)));

      gl_FragColor = vec4(finalColor, alpha);
    }
  `,
};

function RipplePlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size, viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uColor: { value: new THREE.Color('#1e4f66') },
    }),
    [size]
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      // マウス座標の正規化 (0.0 ~ 1.0)
      const x = (state.pointer.x * 0.5 + 0.5);
      const y = (state.pointer.y * 0.5 + 0.5);
      // マウス位置を滑らかに追従
      materialRef.current.uniforms.uMouse.value.lerp(new THREE.Vector2(x, y), 0.05);
    }
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={RippleShaderMaterial.vertexShader}
        fragmentShader={RippleShaderMaterial.fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  );
}

export function HeroRipples() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
        <RipplePlane />
      </Canvas>
    </div>
  );
}
