import React from 'react';
export default function Footer() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg" style={{ backgroundColor: "#1da1f2" }}>
                <div class="mx-auto mt-4 mb-4">
                    <h7 class="text-white text-center">Content written by NCC Cadet.</h7>
                    <button class="btn btn-white text-dark bg-white ms-3"></button>
                </div>
            </nav>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <div class="mx-auto mt-3">
                    <h1 class="text-white text-center fs-3">NCC</h1>
                    <h7 class="text-white text-center ms-5">Developed and hosted🤍 by SBMSIC</h7>
                    <p class="text-white text-center ms-5 mt-3 fs-6 md-3">FACEBOOK--TWITTER--INSTAGRAM</p>
                </div>
            </nav>
        </div>
    )
}