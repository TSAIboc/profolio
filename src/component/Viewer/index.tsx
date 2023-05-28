import { useSelector } from "react-redux";
import { projectKeySelector, StateType } from '@feature/projectListSlice';
const Viewer: React.FC = () => {
    const project = useSelector(projectKeySelector) as StateType;
    return (
        <>
            <iframe
                id="viewer"
                name="viewer"
                allow="fullscreen"
                src={project.iframe}
            />
        </>
    )
}
export default Viewer;