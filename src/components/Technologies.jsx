import { SiSalesforce, SiJavascript, SiPostman } from "react-icons/si";
import { FaAws, FaGitAlt, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import agentforceImg from "../assets/Agentforce.png";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
});

function Technologies() {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                {/* Salesforce */}
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSalesforce className="text-7xl text-[#00A1E0]" />
                </motion.div>

                {/* Agentforce (AI) */}
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center">
                    <img src={agentforceImg} alt="Agentforce" className="w-[72px] h-[72px] object-contain" />
                </motion.div>

                {/* JavaScript (LWC) */}
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className="text-7xl text-[#F7DF1E]" />
                </motion.div>

                {/* Postman (REST APIs) */}
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPostman className="text-7xl text-[#FF6C37]" />
                </motion.div>

                {/* AWS */}
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaAws className="text-7xl text-[#FF9900]" />
                </motion.div>

                {/* Git */}
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-7xl text-[#F05032]" />
                </motion.div>

                {/* GitHub */}
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGithub className="text-7xl text-neutral-100" />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Technologies;