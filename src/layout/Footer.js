import React from 'react'

export default function Footer() {
    return (
        <div className="container-fluid bg-color">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
            <p className="col-md-4 mb-0 text-black">© {new Date().getFullYear()} Company, Inc</p>
        </footer>
        </div>
    )
}
