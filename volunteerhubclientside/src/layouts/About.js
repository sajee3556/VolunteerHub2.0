import React from 'react';
import volunteer from '../imgs/volunteer.png';

export default () => {
    return (
        <div>
            <img src={volunteer} alt="Volunteer Hub"/>
            <h1 className="display-4"> Want to work with us? Join with our community</h1>
            <hr/>
            <p className="text-success"><b> The Volunteer Community Life  allows you to search for activities, events and volunteering opportunities that are on offer within the City.<br/>
                Listings can be filtered by suburb, date and type to ensure you find the information that interests you.<br/>
                The site also provides resources such as maps, public transport options and the ability to link to Facebook <br/> and Twitter if you’d like to share what you’ve found with friends.</b></p>
            <div className="list">
                <ul className="list-group">
                    <li className="list-group-item"><b>Email: volunteerCommunity@dep.vc.lk</b></li>
                    <li className="list-group-item"><b>Phone: +94 23 3441 234</b></li>
                </ul>
            </div>
        </div>
    );
};