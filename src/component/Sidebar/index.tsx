import './index.scss';
import { projects } from '@constant/project';
import Content from './Content';
const Sidebar = () => {
    return (
        <section className='contentWrapper'>
            <div className="inputsearch" />
            <div className="content">
                <Content
                    projects={projects}
                />
            </div>
        </section>
    )


}
export default Sidebar;