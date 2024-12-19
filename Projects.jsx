import React, { useState } from 'react';
import Lightbox from './Lightbox';
import pic1 from './sasuke.jpg';
import pic2 from './sasori.jpg';

const projects = [
  { title: 'Project One', imgSrc: pic1, description: 'A cool React app' },
  { title: 'Project Two', imgSrc: pic2, description: 'A portfolio website' },
  { title: 'Project Three', imgSrc: pic1, description: 'One thing like that' },
];

const Projects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openLightbox = (project) => {
    setSelectedProject(project);
    setLightboxOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-gray-200 text-center">
      <h3 className="text-3xl font-semibold mb-6">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative cursor-pointer"
            onClick={() => openLightbox(project)}
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center text-white text-xl font-bold">
              {project.title}
            </div>
          </div>
        ))}
      </div>
      {lightboxOpen && (
        <Lightbox
          imgSrc={selectedProject.imgSrc}
          description={selectedProject.description}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
};

export default Projects;
