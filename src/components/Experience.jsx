import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

function Experience() {
    return (
        <div className="border-b border-neutral-900 pb-16">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                Experience
            </motion.h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
                        {/* Year & Location */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4 mb-2 lg:mb-0">
                            <p className="text-sm font-medium text-neutral-300">{experience.year}</p>
                            {experience.location && (
                                <p className="text-xs text-neutral-500 font-light mt-0.5">{experience.location}</p>
                            )}
                        </motion.div>

                        {/* Experience Content */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">

                            {/* Nested Roles under Single Company */}
                            {experience.roles ? (
                                <div>
                                    <h6 className="mb-3 font-semibold text-lg text-neutral-100">
                                        {experience.company}
                                    </h6>
                                    <div className="relative border-l-2 border-neutral-800 ml-1 pl-4 space-y-6 my-4">
                                        {experience.roles.map((role, rIndex) => (
                                            <div key={rIndex} className="relative">
                                                {/* Timeline Node */}
                                                <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-purple-500 ring-4 ring-neutral-950" />
                                                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                                                    <h5 className="font-semibold text-neutral-200">{role.title}</h5>
                                                    <span className="text-xs text-neutral-400 font-light">{role.period}</span>
                                                </div>
                                                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                                                    {role.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                /* Standard Single Role Entry */
                                <div>
                                    <h6 className="mb-2 font-semibold">
                                        {experience.role} -{" "}
                                        <span className="text-sm text-purple-100">{experience.company}</span>
                                    </h6>
                                    <p className="mb-4 text-sm text-neutral-400 font-light leading-relaxed">
                                        {experience.description}
                                    </p>
                                </div>
                            )}

                            {/* Technologies Tags */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {experience.technologies.map((tech, tIndex) => (
                                    <span
                                        key={tIndex}
                                        className="rounded bg-neutral-900 px-2.5 py-1 text-xs font-medium text-purple-400 border border-neutral-800">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;