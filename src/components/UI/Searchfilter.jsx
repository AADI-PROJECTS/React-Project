import React from "react";
export const SearchFiter =({search,setsearchfilter,filer,setfileter})=>{
    const handleInputChange=(evt)=>{
        evt.preventDefault();
        setsearchfilter(evt.target.value);
    };

    const handleSelectChange=(evt)=>{
        evt.preventDefault();
        setfileter(evt.target.value);
    };
    return (
    <section className="section-searchFilter container ">
    <input type="text" 
    placeholder="Search"
    value={search}
    onChange={handleInputChange}
    />
    <div>
        <select className="select-section" value={filer} onChange={handleSelectChange}>
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Europe">Europe</option>
            <option value="Australia">Australia</option>
            <option value="Antarctica">Antarctica</option>
        </select>
    </div>
    </section>
    )
}