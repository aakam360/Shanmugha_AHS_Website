import React from 'react';

const ContactMap = () => {
    return (
        <div className="google-map-area">
            <div className="mapouter">
                <div className="gmap_canvas">
                    <center>
                    <h2 className='loc-heading'>We are located here</h2>
                    </center>
                    <iframe id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5296.655410670673!2d77.87611481898105!3d11.434658154257713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba961a63e2915fd%3A0xe9a891b827770304!2sSri%20Shanmugha%20Institute%20of%20Medical%20Science%20And%20Research!5e0!3m2!1sen!2sin!4v1769688814260!5m2!1sen!2sin"></iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactMap;