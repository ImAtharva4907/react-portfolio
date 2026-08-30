import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";
import { SiSalesforce } from "react-icons/si";

function Certifications() {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h2>

      <div className="flex flex-col items-center gap-8">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-neutral-900/70 hover:shadow-xl hover:shadow-cyan-500/5"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Certification Badge Image */}
              <div className="relative h-36 w-36 flex-shrink-0 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-2 shadow-lg flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Certification Details */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-neutral-100 leading-snug">
                    <FaAward className="inline-block text-[#00A1E0] text-lg mr-2 -mt-1" />
                    {cert.title}
                  </h3>
                  <span className="self-center md:self-auto rounded-full bg-cyan-950/60 border border-cyan-800/50 px-3 py-1 text-xs font-medium text-cyan-300">
                    {cert.issuer}
                  </span>
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-[11px] sm:text-xs text-neutral-400 font-light mb-3 whitespace-nowrap overflow-x-auto">
                  <span>
                    <strong className="text-neutral-300">Issued:</strong> {cert.date}
                  </span>
                  <span className="text-neutral-600">•</span>
                  <span>
                    <strong className="text-neutral-300">Credential ID:</strong> {cert.credentialId}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills Tags & Verification Button */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-neutral-800/80">
                  <div className="flex flex-wrap justify-center md:justify-start gap-1.5">
                    {cert.skills &&
                      cert.skills.map((skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="rounded bg-neutral-950 px-2 py-0.5 text-[11px] font-medium text-purple-300 border border-neutral-800"
                        >
                          {skill}
                        </span>
                      ))}
                  </div>

                  {cert.verificationLink && (
                    <a
                      href={cert.verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-xl bg-neutral-900 border border-neutral-700 px-4 py-2 text-xs font-semibold text-neutral-200 transition-all duration-300 hover:border-[#00A1E0] hover:bg-[#00A1E0]/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-500/10"
                    >
                      <SiSalesforce className="text-[#00A1E0] text-sm group-hover:scale-110 transition-transform" />
                      Verify on Trailhead
                      <FaExternalLinkAlt className="text-[10px] text-neutral-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
