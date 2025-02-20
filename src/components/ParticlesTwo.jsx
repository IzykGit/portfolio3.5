import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const ParticlesTwo = () => {
    const [particles, setParticles] = useState([])

    const generateColor = () => {

        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)

        return `rgb(${r}, ${g}, ${b})`
    }


    const generateRandomParticleAnimation = () => {
        const randomXStart = Math.random() * window.innerWidth;
        const randomYStart = Math.random() * window.innerHeight;
        const randomXEnd = Math.random() * window.innerWidth;
        const randomYEnd = Math.random() * window.innerHeight;

        const randomDuration = Math.random() * (30 - 15) + 15;

        return {
            x: [randomXStart, randomXEnd],
            y: [randomYStart, randomYEnd],
            opacity: [0, 0.9, 0],
            transition: { duration: randomDuration, ease: "easeInOut", repeat: Infinity }
        };
    }

    const generateRandomParticleSize = () => {
        return Math.floor(Math.random() * (80 - 20)) + 20
    }


    useEffect(() => {
        const particleCount = 40;
        const newParticles = Array.from({ length: particleCount }, (_, i) => {
            return {
                id: i,
                size: generateRandomParticleSize(),
                animation: generateRandomParticleAnimation(),
                color1: generateColor(),
                color2: generateColor()
            };
        });

        setParticles(newParticles);
    }, []);

    return (
            <div className="fixed z-0 overflow-hidden w-screen h-screen">
                {particles.map((particle) => (
                    <motion.div key={particle.id}
                        initial={{ opacity: 0 }}
                        animate={particle.animation}
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            backgroundImage: `linear-gradient(${particle.color1}, ${particle.color2})`,
                        }}
                    >
                    </motion.div>
                ))}
            </div>
    )
}

export default ParticlesTwo;