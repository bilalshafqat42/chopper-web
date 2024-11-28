import React, { useState, useEffect } from 'react'
import ModSidebar from '../../components/mod/ModSidebar'

const ModPage = () => {

    const [mods, setMods] = useState([])

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

        fetchMod()

    }, [])


    return (
        <>
            <ModSidebar />
            <div className='position-absolute top-20 end-0 w-75 h-100'>
                <div className='container main-section-dashboard rounded px-5 py-5'>
                    <h1>Dashboard</h1>
                    {Array.isArray(mods) && mods.map(mod => (
                        <div className='mod-details' key={mod.id}>
                            <h4>{mod.name}</h4>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default ModPage