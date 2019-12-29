import React from 'react'
import './ContactList.scss'
import { Link } from 'react-router-dom'

import ContactPreview from '../ContactPreview/ContactPreview'

export default function ({ contacts }) {
    return (<ul className="clean-list">
        {contacts.map(contact => {
            return (
                <Link to={`contact/${contact._id}`} key={contact._id}>
                    <ContactPreview contact={contact} />
                </Link>
            )
        })}
    </ul>)
}