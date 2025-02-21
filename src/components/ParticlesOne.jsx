import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const ParticlesOne = () => {
    const [particles, setParticles] = useState([])


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
                        className="rounded-full"
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            border: "1px solid black"
                        }}
                    >
                    </motion.div>
                ))}
            </div>
    )
}

export default ParticlesOne;