import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface AnimatedLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    isActive?: boolean;
}

export function AnimatedLink({
    href,
    children,
    className = "",
    isActive = false
}: AnimatedLinkProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <Link
                href={href}
                className={className}
            >
                {children}
            </Link>
            {isActive && (
                <motion.div
                    className="h-0.5 bg-gradient-to-r from-green-1 to-green-2"
                    layoutId="activeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                />
            )}
        </motion.div>
    );
} 