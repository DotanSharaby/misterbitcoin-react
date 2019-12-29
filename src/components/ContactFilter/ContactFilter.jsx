import React from 'react'

export function ContactFilter({ handleFilter }) {
    return (
        <input type="text" placeholder=" filter" onChange={(ev) => handleFilter(ev.target.value)} />
    )
}