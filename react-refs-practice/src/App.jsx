import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => {
      // If selected project id is null we are adding a new project
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== taskId)
      };
    });
  }

  function handleSelectProject(projId) {
    setProjectsState((prevState) => {
      // If selected project id is null we are adding a new project
      return {
        ...prevState,
        selectedProjectId: projId
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      // If selected project id is null we are adding a new project
      return {
        ...prevState,
        selectedProjectId: null
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      // If selected project id is null we are adding a new project
      return {
        ...prevState,
        selectedProjectId: undefined
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      // If selected project id is null we are adding a new project
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} tasks={projectsState.tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}/>;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar selectedProjectId={projectsState.selectedProjectId} onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;
