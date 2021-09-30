import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3887.5788645972325!2d77.58991841461228!3d12.998765990838049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae1649294a5637%3A0xb1f8b77e331512cf!2sBangalore%20Palace%2C%20Vasanth%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560052!3m2!1d12.998766!2d77.59210709999999!5e0!3m2!1sen!2sin!4v1632686980518!5m2!1sen!2sin" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen>

            </iframe>
       <div className="location_tag">
           <div>Location</div>

       </div>
        </div>
    );
};

export default Location;