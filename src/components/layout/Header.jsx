import React from 'react'

export function Header() {
    return (
        <>
            <header class="main-header">
                <div class="container-fluid">
                    <div class="d-flex flex-wrap justify-content-center ">
                        <a href="/"
                            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 192 192" width="40"
                                height="32" viewBox="0 0 192 192">
                                <g>
                                    <g>
                                        <g>
                                            <path
                                                d="M113.89,84.4l25.27-19.25l11.22-24.21c-7.47-14.26-20.37-25.24-35.88-30.11L91.18,26.58L77.95,54.29l0,0 c4.3-5.21,10.75-8.49,18-8.49c13.02,0,23.43,10.53,23.43,23.43C119.37,75,117.29,80.32,113.89,84.4z"
                                                fill="#4285F4" />
                                            <path
                                                d="M95.94,8c-18.9,0-35.65,8.49-46.97,21.96l10.78,17.66l18.2,6.68c0.11-0.11,36.56-43.46,36.56-43.46 C108.62,9.02,102.39,8,95.94,8z"
                                                fill="#1A73E8" />
                                            <path
                                                d="M113.89,84.4c-4.3,5.09-10.7,8.38-17.95,8.38c-13.02,0-23.43-10.53-23.43-23.43 c0-5.55,2.26-11.09,5.43-15.05L51.09,73.5L40.71,98.66c6.45,14.03,17.09,25.35,28.07,39.5l28.78-22.9L113.89,84.4z"
                                                fill="#FBBC04" />
                                            <path
                                                d="M157.4,69.35c0-10.3-2.6-19.92-7.02-28.41l-81.61,97.22c3.62,4.64,7.13,9.62,10.64,15.05 C91.87,172.46,88.13,184,96.06,184c8.04,0,4.53-11.54,16.98-30.79C133.52,121.18,157.4,106.58,157.4,69.35z"
                                                fill="#34A853" />
                                            <path
                                                d="M77.95,54.29L48.97,29.96C40.03,40.6,34.6,54.41,34.6,69.35c0,11.54,2.26,20.94,6.11,29.31L77.95,54.29z"
                                                fill="#EA4335" />
                                        </g>
                                    </g>
                                </g>
                                <g />
                                <g />
                                <g />
                            </svg>

                            <span class="fs-4">eParking</span>
                        </a>

                        <ul class="nav nav-pills">
                            <li class="nav-item"><a href="#" class="nav-link text-dark" aria-current="page">Home</a></li>
                            <li class="nav-item"><a href="#" class="nav-link text-dark">Features</a></li>
                            <li class="nav-item"><a href="#" class="nav-link text-dark">FAQs</a></li>
                            <li class="nav-item"><a href="#" class="nav-link text-dark">About</a></li>
                        </ul>

                    </div>
                </div>
            </header>
        </>
    )
} 