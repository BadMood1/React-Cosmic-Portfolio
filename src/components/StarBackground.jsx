import { useEffect, useState } from "react";

// id, size, x, y, opacity???, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
    }, []);

    const generateStars = () => {
        const numOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);

        const newStars = [];

        for (let i = 0; i < numOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };

    const generateMeteors = () => {
        const numOfMeteors = 6;

        const newMeteors = [];

        for (let i = 0; i < numOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() + 1,
                x: Math.random() * 80,
                y: Math.random() * 40,
                animationDuration: Math.random() * 3 + 5,
            });
        }

        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        top: `${star.y}%`,
                        left: `${star.x}%`,
                        animationDuration: `${star.animationDuration}s`,
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: `${meteor.size * 50}px`,
                        height: `${meteor.size * 2}px`,
                        top: `${meteor.y}%`,
                        left: `${meteor.x}%`,
                        animationDuration: `${meteor.animationDuration}s`,
                    }}
                />
            ))}
        </div>
    );
};
