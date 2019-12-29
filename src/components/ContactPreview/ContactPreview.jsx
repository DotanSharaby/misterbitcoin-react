import React from 'react'

export default function ContactPreview(props) {
    const { contact } = props;
    return (
        <li>
            <span>
                <img height="50px" src={`https://robohash.org/${contact.name}.png`} alt="" />
            </span>
            <span>{contact.name}</span>
        </li>
    )
}