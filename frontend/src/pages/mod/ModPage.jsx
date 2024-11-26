import React from 'react'
import ModSidebar from '../../components/mod/ModSidebar'
import DataTable from "react-data-table-component"

const ModPage = () => {
    // A super simple expandable component.
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

    const columns = [
        {
            name: 'Name',
            selector: row => row.title,
        },
        {
            name: 'Date',
            selector: row => row.date,
        },
        {
            name: 'Area',
            selector: row => row.area,
        },
        {
            name: 'Company',
            selector: row => row.company,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'MOD',
            date: '24-Nov-2024',
            area: "al quoz 3 Industrial, Dubai, UAE",
            company: "Choppershoot LLC",
        },

        {
            id: 2,
            title: 'MOD',
            date: '24-Nov-2024',
            area: "al quoz 3 Industrial, Dubai, UAE",
            company: "Choppershoot LLC",
        },

        {
            id: 3,
            title: 'MOD',
            date: '24-Nov-2024',
            area: "al quoz 3 Industrial, Dubai, UAE",
            company: "Choppershoot LLC",
        },

        {
            id: 4,
            title: 'MOD',
            date: '24-Nov-2024',
            area: "al quoz 3 Industrial, Dubai, UAE",
            company: "Choppershoot LLC",
        },

        {
            id: 5,
            title: 'MOD',
            date: '24-Nov-2024',
            area: "al quoz 3 Industrial, Dubai, UAE",
            company: "Choppershoot LLC",
        },

        {
            id: 6,
            title: 'MOD',
            date: '24-Nov-2024',
            area: "al quoz 3 Industrial, Dubai, UAE",
            company: "Choppershoot LLC",
        },

    ]
    return (
        <>
            <ModSidebar />
            <div className='position-absolute top-20 end-0 w-75 h-100'>
                <div className='container main-section-dashboard rounded px-3 py-3'>
                    <h1>Dashboard</h1>
                    <DataTable
                        columns={columns}
                        data={data}
                        expandableRows
                        expandableRowsComponent={ExpandedComponent}
                    />
                </div>
            </div>
        </>
    )
}

export default ModPage