import React from 'react'

async function getData(id) {
    const res = await fetch('http://localhost:3000/api/attractions/'+id)
    return res.json()
}

export default async function Page({ params }) {
    const id = params.id
    const data = await getData(id)
    console.log(data)
    return (
        <div>
            <img src={data.coverimage}/>
            <p>{data.name}</p>
            <p>{data.detail}</p>
        </div>
    )
}
