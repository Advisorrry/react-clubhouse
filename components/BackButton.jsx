import Link from 'next/link'
import React from 'react'
import PropTypes from 'prop-types'

export const BackButton = ({title, href}) => {
    return (
        <>
            <Link href={href}>
                <div className="d-flex mb-30 cup">
                    <img src="/static/back-arrow.svg" alt="Back" className="mr-10" />
                    <h3>{title}</h3>
                </div>
            </Link>
        </>
    )
}

BackButton.propTypes = {
    title: PropTypes.string,
    href: PropTypes.string.isRequired
}
