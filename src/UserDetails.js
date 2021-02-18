import React from 'react';

const UserDetails = (props) => {
    return (
        <section className="user-details">
            <div className="user-details__location">
                <h3>Location</h3>
                <p>{props.location}</p>
            </div>
            <div className="user-details__diet">
                <h3>Eats</h3>
                <p>{props.diet}</p>
            </div>
            <div className="user-details__age">
                <h3>Age</h3>
                <p>{props.age}</p>
            </div>
            <div className="user-details__hobby">
                <h3>Likes</h3>
                <p>{props.hobby}</p>
            </div>
            <div className="user-details__social-media">
                <h3>Twitter</h3>
                <a href="#">
                    @{props.socialHandle}
                </a>
            </div>
        </section>
    )
}

export default UserDetails;