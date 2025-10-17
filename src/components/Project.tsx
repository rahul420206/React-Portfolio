import React from "react";
import proj1 from "../assets/images/1.jpg";
import proj2 from "../assets/images/project-2.png";
import proj3 from "../assets/images/project.png";
import proj4 from "../assets/images/llm.png";
import proj5 from "../assets/images/healt.png";
import proj6 from "../assets/images/alu.png";
import "../assets/styles/Project.scss";

const projects = [
  {
    id: 1,
    img: proj1,
    title: "Self Aware Fairness Influence Maximization",
    demo: "https://colab.research.google.com/drive/13gjIfwDDMn_facgR6DDawX8gc-bBaT5m#scrollTo=dZYIX3X5-alA",
    description:
      "Implemented a fairness-aware influence maximization algorithm using adversarial graph embeddings to ensure unbiased influence spread across social networks.",
  },
  {
    id: 2,
    img: proj2,
    title: "Information Management System",
    demo: "https://github.com/",
    description:
      "Developed a full-stack web application for managing institutional records using PHP, MySQL, and JavaScript with user authentication and CRUD operations.",
  },
  {
    id: 3,
    img: proj3,
    title: "Semi-Supervised Classification with GCN",
    demo: "https://github.com/rahul420206/Semi-Supervised-Classification-with-Graph-Convolutional-Networks/blob/main/Node_Classification_GCN_Semi-Sup_CORA.ipynb",
    description:
      "Trained Graph Convolutional Networks (GCNs) for semi-supervised node classification on citation datasets using PyTorch and NumPy.",
  },
  {
    id: 4,
    img: proj4,
    title: "LLM Based RAG Search",
    demo: "https://live-demo-link.com/project-4",
    description:
      "Built a retrieval-augmented generation (RAG) system integrating Cohere API, Flask, and Streamlit for intelligent document-based Q&A.",
  },
  {
    id: 5,
    img: proj5,
    title: "Health Report Analyzer",
    demo: "https://live-demo-link.com/project-5",
    description:
      "Created an AI-driven app to analyze health reports using Python, Pandas, and NLP to extract and summarize medical insights.",
  },
  {
    id: 6,
    img: proj6,
    title: "Alumni Web Portal",
    demo: "https://rahul420206.github.io/My-First-Project/",
    description:
      "Developed an alumni portal for event updates and communication between alumni and students using HTML, CSS, and JavaScript.",
  },
];

const Project = () => {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <a href={project.demo} target="_blank" rel="noreferrer">
              <img
                src={project.img}
                className="zoom"
                alt={project.title}
                style={{ width: "582px", height: "383px", objectFit: "cover" }}
              />
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer">
              <h2>{project.title}</h2>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;