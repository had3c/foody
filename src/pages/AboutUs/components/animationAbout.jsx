export const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } }
};

export const pulse = {
    initial: { scale: 1 },
    animate: { scale: [1, 1.1, 1], transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" } }
};

export const shift = {
    initial: { x: 0 },
    animate: { x: [-5, 5], transition: { duration: 1, repeat: Infinity, repeatType: "reverse" } }
};

