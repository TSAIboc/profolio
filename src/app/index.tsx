'use client';
import './index.scss';
import Viewer from '@component/Viewer';
import Sidebar from '@component/Sidebar';
import GitButton from '@component/GitButton';

const Index = () => {
    return (
        <main>
            <div className='panel'>
                <Sidebar />
            </div>
            <div className='viewer' >
                <Viewer />
            </div>
            <div className='git'>
                <GitButton />
            </div>
        </main >
    )
}
export default Index;
