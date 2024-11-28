import React, { useState, useEffect } from 'react'
import ModSidebar from '../../components/mod/ModSidebar'
import DataTable from "react-data-table-component"

const PendingMod = () => {
    const [mods, setMods] = useState([]);

    useEffect(() => {
        const fetchMod = async () => {
            try {
                const response = await fetch('/api/mod');
                const json = await response.json();
                if (response.ok) {
                    setMods(json);
                } else {
                    console.error("API Error:", json);
                }
            } catch (error) {
                console.error("Fetch Error:", error);
            }
        };

        fetchMod();
    }, []);

    // Define the columns for the DataTable, including a column for status
    const columns = [
        {
            name: '#',
            selector: (row, index) => index + 1, // Row numbering starts at 1
            sortable: false,
            width: '50px', // Optional, adjust for better alignment
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Date From',
            selector: row => new Date(row.dateFrom).toLocaleDateString(),
            sortable: true,
        },
        {
            name: 'Date To',
            selector: row => new Date(row.dateTo).toLocaleDateString(),
            sortable: true,
        },
        {
            name: 'Area',
            selector: row => row.area,
            sortable: true,
        },
        {
            name: 'Company Name',
            selector: row => row.companyName,
            sortable: true,
        },
        {
            name: 'Text Area',
            selector: row => row.textArea,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.status ? 'Approved' : 'Pending', // Display Approved or Pending
            sortable: true,
        },
    ];

    return (
        <>
            <ModSidebar />
            <div className='position-absolute top-20 end-0 w-75 h-100'>
                <div className='container main-section-dashboard rounded px-5 py-5'>
                    <h1 className='mb-5'>Pending Applications</h1>

                    {/* Render DataTable only when mods data is available */}
                    {mods.length > 0 ? (
                        <DataTable
                            columns={columns}
                            data={mods}
                            pagination
                            responsive
                            highlightOnHover
                            striped
                        />
                    ) : (
                        <p>Loading mods...</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default PendingMod