import React, { useState } from "react";

interface Project {
  name: string;
}

const Sidebar: React.FC = () => {
  // State for projects array
  const [projects, setProjects] = useState<Project[]>([
    { name: "Orbital Odyssey" },
    { name: "Digital Product Launch" },
    { name: "Brand Refresh" },
    { name: "Social Media Strategy" },
  ]);

  // State for new project name
  const [newProjectName, setNewProjectName] = useState<string>("");

  // Function to handle adding a new project
  const handleAddProject = () => {
    if (newProjectName !== "") {
      setProjects([...projects, { name: newProjectName }]);
      setNewProjectName("");
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Artificium - 01</h1>
      </div>
      <div className="user-dropdown">
        <span>Ryan Lee</span>
        <span>Novice</span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="billing">
        <h2>Billing</h2>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div>{project.name}</div>
          </div>
        ))}
        <input
          type="text"
          placeholder="Add new project"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
        />
        <button onClick={handleAddProject}>Add</button>
      </div>
      <div className="sidebar-footer">
        <div>Ryan Lee</div>
        <div>Novice</div>
      </div>
    </div>
  );
};

export default Sidebar;
