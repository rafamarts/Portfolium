import React, { createContext, useContext, useState, useEffect } from "react";
import { getProjetos } from "../services/api";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjetos();
      setProjectData(data);
    }

    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider value={projectData}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);
