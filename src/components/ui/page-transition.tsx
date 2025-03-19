import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 },
};

interface PageTransitionProps extends PropsWithChildren {
    className?: string;
}

export function PageTransition({
    children,
    className = ""
}: PageTransitionProps) {
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 25 }}
            className={className}
        >
            {children}
        </motion.div>
    );
} 