import React from 'react'
import { CONTACT } from '../constants'
import { animate, motion } from "framer-motion"

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20" >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">Get in Touch</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4">{CONTACT.address}</motion.p>
        <a href={`mailto:${CONTACT.email}`} className="border-b text-neutral-300 hover:text-white transition-colors">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact