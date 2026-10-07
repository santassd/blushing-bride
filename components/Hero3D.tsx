'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { hero } from '@/data/weddingPackages'

function GoldParticles() {
  const points = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(300 * 3)
    for (let i = 0; i < 300; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 25
      arr[i * 3 + 1] = (Math.random() - 0.5) * 15
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!points.current) return
    points.current.rotation.y = state.clock.elapsedTime * 0.03
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#B08D57" transparent opacity={0.7} />
    </points>
  )
}

export default function Hero3D() {
  return (
    <section id="top" className="hero">
      <div className="hero-canvas">
        <Canvas camera={{ position: [0, 0, 9], fov: 55 }} dpr={[1, 2]}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} color="#B08D57" />
          <GoldParticles />
        </Canvas>
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-label"
        >
          {hero.label}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-title"
        >
          Six ways to hold onto
          <br />
          <span className="gradient-text" style={{ fontStyle: 'italic' }}>
            one day, forever.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="hero-sub"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hero-actions"
        >
          <a href="#packages" className="btn-outline-gold">View Our Work</a>
          <a href="#contact" className="btn-gold">Book Your Date</a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hero-scroll"
      >
        <span>Scroll to explore</span>
        <ArrowDown size={14} style={{ color: '#B08D57' }} />
      </motion.div>
    </section>
  )
}