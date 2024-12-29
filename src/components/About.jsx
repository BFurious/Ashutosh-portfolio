import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

function ServiceCard({ index, title, icon, content }) {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
            className="card-parent xs:w-[250px] w-full  p-[1px] rounded-[20px]"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="card bg-jetLight rounded-[20px] shadow-card min-h-[280px] items-center flex-col"
            >

                <div className="card-front">
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                    <h3 className="text-taupe text-[18px] font-bold text-center">
                        {title}
                    </h3>
                </div>
                <div className="card-back">
                    <h3 className="text-taupe text-[16px] mx-[18px] text-center">
                        {content}
                    </h3>
                </div>
            </div>
        </motion.div>
    )
}

function About() {
    return (
        <div className="-mt-[6rem]">
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
            >
                I am a skilled Software Developer with over a year of industry
                experience, specializing in full-stack development. With a B.Tech in
                Computer Engineering from Delhi Technological University and proficiency
                in a range of technologies including the MERN stack, SQL, and NoSQL,
                Ashutosh is adept at streamlining financial processes and enhancing user
                experiences. i have a proven track record of delivering high-quality
                code and optimizing performance, having achieved significant cost
                savings and positive feedback in his role at Credflow. i excels in
                collaborating with cross-functional teams and has developed various
                projects, including an E-commerce website, Hospital management system and a sponsorship management system.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(About, 'about')
