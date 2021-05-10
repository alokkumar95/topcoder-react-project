import React from 'react'

function MineSiteOverview(props) {
    const ores=props.location.state || {}
    const oresListKey = Object.keys(ores);
    const sortedOresList = oresListKey.map(data=>(ores[data]));
    sortedOresList.sort()
    return (
        <div style={{marginTop:"50px"}}>
            <ul className="list-group" style={{width:"50%" ,margin:"auto"}}>
                {sortedOresList.map((data,id)=>(<li key={id} className="list-group-item">{data}</li>))}
            </ul>
        </div>
    )
}

export default MineSiteOverview
