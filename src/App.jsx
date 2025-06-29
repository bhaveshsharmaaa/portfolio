import React from "react";
import { useState, useEffect } from "react";
import chatapp from "./assets/chatapp.png";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Moon,
  Sun,
  Code,
  Database,
  Server,
  Globe,
  GitBranch,
  Layers,
  Cloud,
  Zap,
  ArrowRight,
  Star,
  Sparkles,
  ChevronDown,
  TabletSmartphone,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Badge } from "./components/ui/badge";
import "./App.css";

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

// Animated background grid
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(255,255,255,.05)_25px,rgba(255,255,255,.05)_26px,transparent_27px,transparent_74px,rgba(255,255,255,.05)_75px,rgba(255,255,255,.05)_76px,transparent_77px),linear-gradient(rgba(255,255,255,.05)_24px,transparent_25px,transparent_26px,rgba(255,255,255,.05)_27px,rgba(255,255,255,.05)_74px,transparent_75px,transparent_76px,rgba(255,255,255,.05)_77px)] bg-[length:100px_100px]" />
    </div>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const skills = [
    {
      name: "React.js",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
      level: 95,
    },
    {
      name: "Node.js",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-400 to-green-600",
      level: 90,
    },
    {
      name: "Express.js",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-400 to-yellow-600",
      level: 88,
    },
    {
      name: "MongoDB",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-green-700",
      level: 85,
    },
    {
      name: "Tailwind CSS",
      icon: <Layers className="w-6 h-6" />,
      color: "from-cyan-400 to-cyan-600",
      level: 92,
    },
    {
      name: "Redux",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600",
      level: 87,
    },
    {
      name: "Git",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-orange-400 to-orange-600",
      level: 90,
    },
    {
      name: "React Native",
      icon: <TabletSmartphone className="w-6 h-6" />,
      color: "from-red-400 to-red-600",
      level: 90,
    },
  ];

  const projects = [
    {
      title: "NEBULA",
      subtitle: "E-Learning Platform",
      description:
        "Nebula is a modern social media mobile application built with React Native and Expo. It allows users to sign up, share posts, like and comment, and follow others in real time. With a clean UI and fast performance, Nebula delivers a seamless and interactive social experience. It leverages Convex for its backend, ensuring live updates and scalable data handling.",
      technologies: [
        "MERN Stack",
        "Tailwind CSS",
        "Framer Motion",
        "Convex",
        "React Native",
        "Expo",
        "Clerk",
      ],
      github: "https://github.com/bhaveshsharmaaa/Nebula-App",
      demo: "https://nebula-demo.vercel.app",
      image: "https://via.placeholder.com/600x400/667eea/ffffff?text=NEBULA",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "ChatSphere",
      subtitle: "Real-Time Messaging",
      description:
        "The Chat App is a real-time messaging platform built using the MERN stack (MongoDB, Express, React, Node.js). It enables users to register, log in, and engage in instant one-on-one conversations. With socket.io integration, the app ensures fast and reliable message delivery. A responsive UI and secure authentication provide a smooth and safe user experience.",
      technologies: [
        "MERN Stack",
        "Socket.IO",
        "JWT",
        "Tailwind CSS",
        "WebRTC",
      ],
      github: "https://github.com/bhaveshsharmaaa/chatApp",
      demo: "https://chatapp-xan2.onrender.com/",
      image: chatapp,
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
        <AnimatedGrid />

        {/* Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl z-40 border-b border-gray-200/50 dark:border-gray-700/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                Bhavesh Sharma
              </motion.div>
              <div className="flex items-center space-x-6">
                <nav className="hidden md:flex space-x-8">
                  {["About", "Projects", "Skills", "Contact"].map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                      whileHover={{ y: -2 }}
                    >
                      {item}
                      <motion.div
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <FloatingParticles />
          <motion.div
            style={{ y, opacity, scale }}
            className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-800/50 dark:via-gray-900/30 dark:to-gray-800/50"
          />

          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-cyan-400/10 rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-8"
              >
                <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
                <span className="text-sm font-medium">
                  Available for new opportunities
                </span>
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="block"
                >
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Bhavesh
                  </span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="block bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent"
                >
                  Sharma
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                A Full Stack Developer specializing in the{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  MERN Stack
                </span>
                , focused on building{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  scalable
                </span>{" "}
                and{" "}
                <span className="font-semibold text-pink-600 dark:text-pink-400">
                  user-friendly
                </span>{" "}
                web applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a href="#projects" className="flex items-center">
                      View My Work
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 px-8 py-4 rounded-full transition-all duration-300 bg-transparent"
                  >
                    <a href="#contact" className="flex items-center">
                      Get In Touch
                      <Mail className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl font-bold mb-6"
                >
                  About{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Me
                  </span>
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
                />
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      I'm a passionate Full Stack Developer with expertise in
                      the{" "}
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        MERN stack
                      </span>
                      , specializing in building scalable and user-friendly web
                      applications. My technical background includes proficiency
                      in MongoDB, Express.js, React.js, and Node.js.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      I have hands-on experience with{" "}
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        cloud services
                      </span>{" "}
                      like Cloudinary and Firebase, and I'm skilled in building
                      full-stack applications from scratch. Beyond technical
                      skills, I bring strong teamwork and problem-solving
                      abilities to every project.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-4">
                      {[
                        "Problem Solving",
                        "Team Collaboration",
                        "Full-Stack Development",
                        "API Design",
                      ].map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant="secondary"
                            className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative w-80 h-80 mx-auto">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full p-1"
                    >
                      <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                        >
                          <Code className="w-16 h-16 text-white" />
                        </motion.div>
                      </div>
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                    >
                      <Star className="w-4 h-4 text-white" />
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, 20, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
                    >
                      <Sparkles className="w-3 h-3 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-800/50 relative"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl font-bold mb-6"
                >
                  Featured{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Projects
                  </span>
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "120px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"
                />
              </div>

              <div className="space-y-32">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative group"
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300`}
                        />
                        <Card className="relative overflow-hidden border-0 shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                          <div className="aspect-video relative overflow-hidden">
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}
                            />
                            <img
                              // src={"/placeholder.svg"}
                              // alt={project.title}
                              className="w-full  h-full object-cover mix-blend-overlay"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                              >
                                <ExternalLink className="w-8 h-8 text-white" />
                              </motion.div>
                            </div>
                          </div>
                          <CardContent className="p-8">
                            <div className="flex items-center justify-between mb-4">
                              <Badge
                                className={`bg-gradient-to-r ${project.gradient} text-white border-0`}
                              >
                                {project.subtitle}
                              </Badge>
                              <div className="flex space-x-2">
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <Button variant="ghost" size="icon" asChild>
                                    <a
                                      href={project.github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Github className="w-5 h-5" />
                                    </a>
                                  </Button>
                                </motion.div>
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <Button variant="ghost" size="icon" asChild>
                                    <a
                                      href={project.demo}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <ExternalLink className="w-5 h-5" />
                                    </a>
                                  </Button>
                                </motion.div>
                              </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">
                              {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <motion.div
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: techIndex * 0.1,
                                  }}
                                  viewport={{ once: true }}
                                >
                                  <Badge
                                    variant="outline"
                                    className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl font-bold mb-6"
                >
                  Skills &{" "}
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Technologies
                  </span>
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "140px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    className="group"
                  >
                    <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                      <CardContent className="p-6 text-center">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}
                        >
                          {skill.icon}
                        </motion.div>
                        <h3 className="font-semibold mb-3">{skill.name}</h3>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                          />
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-800/50 dark:via-gray-900/30 dark:to-gray-800/50 relative"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl font-bold mb-6"
                >
                  Get In{" "}
                  <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                    Touch
                  </span>
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-pink-600 to-red-600 mx-auto rounded-full"
                />
              </div>

              <div className="grid lg:grid-cols-2 gap-16">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Let's Connect
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        I'm always interested in new opportunities and
                        collaborations. Feel free to reach out if you'd like to
                        discuss a project or just say hello!
                      </p>
                    </div>

                    <div className="space-y-6">
                      <motion.div
                        whileHover={{ x: 10 }}
                        className="flex items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-600 dark:text-gray-400">
                            bsharma2684@gmail.com
                          </p>
                        </div>
                      </motion.div>
                      <a href="/Bhavesh Sharma Resume.pdf" download>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <Download className="w-5 h-5 mr-2" />
                            Download Resume
                          </Button>
                        </motion.div>
                      </a>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      {[
                        {
                          icon: Github,
                          href: "https://github.com/bhaveshsharmaaa",
                          color: "from-gray-600 to-gray-800",
                        },
                        {
                          icon: Linkedin,
                          href: "https://www.linkedin.com/in/bhavesh-sharma-5805a9269",
                          color: "from-blue-600 to-blue-800",
                        },
                        {
                          icon: Code,
                          href: "https://leetcode.com/u/bhavesh__sharma/",
                          color: "from-orange-500 to-red-600",
                        },
                      ].map((social, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.1, y: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            variant="outline"
                            size="icon"
                            className={`w-12 h-12 bg-gradient-to-r ${social.color} text-white border-0 hover:shadow-lg transition-all duration-300`}
                            asChild
                          >
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <social.icon className="w-6 h-6" />
                            </a>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Send a Message
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-6">
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <Input
                            placeholder="Your Name"
                            className="h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl transition-all duration-300"
                          />
                        </motion.div>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <Input
                            type="email"
                            placeholder="Your Email"
                            className="h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl transition-all duration-300"
                          />
                        </motion.div>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <Textarea
                            placeholder="Your Message"
                            rows={6}
                            className="border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl transition-all duration-300 resize-none"
                          />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            Send Message
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                        </motion.div>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-300"
            >
              © 2024 Bhavesh Sharma. Built with{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                React.js
              </span>
              ,{" "}
              <span className="font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Tailwind CSS
              </span>
              , and{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Framer Motion
              </span>
              .
            </motion.p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
