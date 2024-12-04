import React, { useState, useEffect } from 'react';
import ModSidebar from '../../components/mod/ModSidebar';
import DataTable from 'react-data-table-component';

const ModPage = () => {
    const [mods, setMods] = useState([]);
    const [selectedMod, setSelectedMod] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dateFrom: '',
        dateTo: '',
        area: '',
        companyName: '',
        textArea: '',
        status: false, // Make sure the status is included in the form data
    });

    useEffect(() => {
        const fetchMods = async () => {
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
        fetchMods();
    }, []);

    const handleEdit = (mod) => {
        setSelectedMod(mod);
        setFormData({
            name: mod.name,
            email: mod.email,
            dateFrom: mod.dateFrom,
            dateTo: mod.dateTo,
            area: mod.area,
            companyName: mod.companyName,
            textArea: mod.textArea,
            status: mod.status,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedMod) return;

        const updatedMod = {
            ...formData,
        };

        try {
            const response = await fetch(`/api/mod/${selectedMod._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedMod),
            });

            const result = await response.json();

            if (response.ok) {
                // Update the mod in the state
                setMods((prevMods) =>
                    prevMods.map((mod) =>
                        mod._id === selectedMod._id ? result : mod
                    )
                );
                // Reset the form and selected mod
                setSelectedMod(null);
                setFormData({
                    name: '',
                    email: '',
                    dateFrom: '',
                    dateTo: '',
                    area: '',
                    companyName: '',
                    textArea: '',
                    status: false,
                });
            } else {
                console.error("Error updating mod:", result.error);
            }
        } catch (error) {
            console.error("Fetch error during update:", error);
        }
    };

    const columns = [
        {
            name: '#',
            selector: (row, index) => index + 1,
            sortable: false,
            width: '50px',
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
            selector: row => (row.status ? 'Approved' : 'Pending'),
            sortable: true,
        },
        {
            name: 'Actions',
            button: true,
            cell: (row) => (
                <button onClick={() => handleEdit(row)} className="btn btn-primary">
                    Edit
                </button>
            ),
        },
    ];

    return (
        <>
            <ModSidebar />
            <div className='position-absolute top-20 end-0 w-75 h-100'>
                <div className='container main-section-dashboard rounded px-5 py-5'>
                    <h1 className='mb-5'>MOD Applications</h1>
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

                    {/* Display the edit form */}
                    {selectedMod && (
                        <div className="edit-form">
                            <h3>Edit Mod</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Date From</label>
                                    <input
                                        type="date"
                                        value={formData.dateFrom}
                                        onChange={(e) =>
                                            setFormData({ ...formData, dateFrom: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Date To</label>
                                    <input
                                        type="date"
                                        value={formData.dateTo}
                                        onChange={(e) =>
                                            setFormData({ ...formData, dateTo: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Area</label>
                                    <input
                                        type="text"
                                        value={formData.area}
                                        onChange={(e) =>
                                            setFormData({ ...formData, area: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Company Name</label>
                                    <input
                                        type="text"
                                        value={formData.companyName}
                                        onChange={(e) =>
                                            setFormData({ ...formData, companyName: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Text Area</label>
                                    <textarea
                                        value={formData.textArea}
                                        onChange={(e) =>
                                            setFormData({ ...formData, textArea: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Status</label>
                                    <select
                                        value={formData.status}
                                        onChange={(e) =>
                                            setFormData({ ...formData, status: e.target.value === 'true' })
                                        }
                                    >
                                        <option value={true}>Approved</option>
                                        <option value={false}>Pending</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-success">
                                    Update Mod
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ModPage;
