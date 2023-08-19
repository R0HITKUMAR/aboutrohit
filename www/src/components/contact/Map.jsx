import React from 'react'

export default function Map() {
    return (
        <section id="map" className="map">
            <div className="container  text-center">
                <div className="section-title">
                    <h2>How to find Me.</h2>
                    <p>Map</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.508021932006!2d77.44337981508262!3d28.634212782417155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee22c60837b7%3A0x7c35343eceb7bde0!2sABES%20Engineering%20College!5e1!3m2!1sen!2sin!4v1621085039494!5m2!1sen!2sin" width="90%" height={400} style={{border: 0}} allowFullScreen title='Get Connected to Rohit' />
            </div>
        </section>
    )
}
