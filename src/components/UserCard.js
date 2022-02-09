import React from 'react';

const UserCard = ({id,avatar_url,html_url}) => {
    return (
        <div>
            <img src={avatar_url} alt={avatar_url} />
            <h3>{html_url}</h3>
        </div>
    );
};

export default UserCard;