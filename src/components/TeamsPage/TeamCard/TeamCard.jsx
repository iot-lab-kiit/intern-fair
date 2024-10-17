"use client";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const TeamCard = ({ person }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-2xl w-72 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={person.img}
          fill
          alt={`${person.name}'s photo`}
          className="object-cover transition-transform duration-300 ease-in-out"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="p-6 flex flex-col items-center gap-4 relative">
        <h1 className="text-2xl font-bold text-[#081245]">{person.name}</h1>
        <p className="text-gray-600 text-center">{person.role}</p>
        <div className="flex items-center justify-center gap-6 w-full">
          <motion.a
            href={person.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#181717]"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            href={person.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#0A66C2]"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={30} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
