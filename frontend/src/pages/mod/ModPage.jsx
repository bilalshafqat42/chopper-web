import React from 'react'
import ModSidebar from '../../components/ModSidebar'

const ModPage = () => {
    return (
        <>
            <ModSidebar />
            <div className='position-absolute top-20 end-0 w-75 h-100'>
                <div className='container main-section-dashboard'>
                    <h1>Dashboard</h1>
                </div>
            </div>
        </>
    )
}

export default ModPage