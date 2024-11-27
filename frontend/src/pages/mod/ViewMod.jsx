import React from 'react'
import ModSidebar from '../../components/mod/ModSidebar'

const ViewMod = () => {
    return (
        <>
            <ModSidebar />
            <div className='position-absolute top-20 end-0 w-75 h-100'>
                <div className='container main-section-dashboard rounded px-5 py-5'>
                    <h1>Dashboard</h1>
                    <DataTable
                        columns={columns}
                        data={data}
                    // expandableRows
                    // expandableRowsComponent={ExpandedComponent}
                    />
                </div>
            </div>
        </>
    )
}

export default ViewMod