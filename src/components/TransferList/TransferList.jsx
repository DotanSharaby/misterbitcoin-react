import React from 'react';

export function TransferList({ transfers }) {

    if (transfers.length) return (
        <ul className="clean-list">
            {transfers.map((value, index) => {
                return <li key={index}>{value.to}</li>
            })}
        </ul>
    ); else return (
        <>
            <h4>No previous transfers</h4>
        </>
    )
}