import "./index.scss";
import { useSelector } from "react-redux";
import { projectKeySelector, StateType } from "@feature/projectListSlice";
const GitButton = () => {
  const project = useSelector(projectKeySelector) as StateType;
  return project.source.length > 0 ? (
    <a href={project.source} target="_blank">
      <div className="button" />
    </a>
  ) : (
    <></>
  );
};

export default GitButton;
