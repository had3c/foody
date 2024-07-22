export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.2 }
    }
};

export const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

export const blokVariants = {
    hidden: {
        scale: 0.8,
        opacity: 0,
        rotate: -170.57
    },
    visible: {
        scale: 1,
        opacity: 1,
        rotate: -170.57,
        transition: { duration: 0.5 }
    }
};

export const imageVariants = {
    animate: {
        x: ["-10%", "10%", "-10%"],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 5,
                ease: "easeInOut"
            }
        }
    }
};

export const titleVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
};

export const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200
        }
    }
};

export const paragraphVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            staggerChildren: 0.02
        }
    }
};

export const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200
        }
    }
};