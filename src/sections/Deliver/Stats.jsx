import React, { useContext } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { motion } from "framer-motion";
import { AnimationContext } from "../../context/animation";

const Stats = () => {
	const { riseUpVariant, riseUpItem } = useContext(AnimationContext);
	return (
		<>
			<motion.div
				variants={riseUpVariant}
				initial='hidden'
				whileInView='visible'
				className='flex flex-wrap justify-center lg:flex-nowrap gap-8 md:justify-between items-center mt-[3rem] pb-[2rem] border-b border-gray-600 text-[#dadada]'>
				<motion.div variants={riseUpItem}>
					<div className='flex items-start'>
						<p className='font-lato text-[3rem] lg:text-[5rem] font-bold'>
							900
						</p>
						<BiPlusMedical className='mt-[12px] text-[1.2rem] lg:text-[3rem] text-[#0476b5]' />
					</div>
					<p className='lg:mt-[-20px] mt-[-10px] text-[70%] lg:text-[1rem] font-medium text-[#929294]'>
						Projets Réussis
					</p>
				</motion.div>
				<motion.div variants={riseUpItem}>
					<div className='flex items-start'>
						<p className='font-lato text-[3rem] lg:text-[5rem] font-bold'>
							600
						</p>
						<BiPlusMedical className='mt-[12px] text-[1.2rem] lg:text-[3rem] text-[#f53627]' />
					</div>
					<p className='lg:mt-[-20px] mt-[-10px] text-[70%] lg:text-[1rem] font-medium text-[#929294]'>
						Clients Très Satisfaits
					</p>
				</motion.div>
				<motion.div variants={riseUpItem}>
					<div className='flex items-start'>
						<p className='font-lato text-[3rem] lg:text-[5rem] font-bold'>
							200
						</p>
						<BiPlusMedical className='mt-[12px] text-[1.2rem] lg:text-[3rem] text-[#ea8113]' />
					</div>
					<p className='lg:mt-[-20px] mt-[-10px] text-[70%] lg:text-[1rem] font-medium text-[#929294]'>
						Prix Publicitaires
					</p>
				</motion.div>
				<motion.div variants={riseUpItem} className='hidden lg:block'>
					<p className='text-[1rem] text-[#929294]'>
						Restez connecté avec nous et mettez en place votre stratégie de marketing digital. 
						Nous rendons le marketing digital simple.
					</p>
				</motion.div>
			</motion.div>
			<div className='flex flex-wrap justify-center gap-4 md:gap-0 lg:flex-nowrap items-center md:justify-between py-[1rem] border-b border-gray-600'>
				<p className='text-[1.2rem] lg:text-[3rem] uppercase'>SEO</p>
				<div className='bg-[#353535] hidden md:block h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] rounded-[50%]'></div>
				<p className='text-[1.2rem] lg:text-[3rem] uppercase'>
					Recherche de marque
				</p>
				<div className='bg-[#353535] hidden md:block h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] rounded-[50%]'></div>
				<p className='text-[1.2rem] lg:text-[3rem] uppercase'>CRO</p>
				<div className='bg-[#353535] hidden md:block h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] rounded-[50%]'></div>
			</div>
		</>
	);
};

export default Stats;