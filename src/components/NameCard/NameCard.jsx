import React from 'react';
import './NameCard.css';

const nameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain=';

const NameCard = ({ suggestedName }) => {
    return (
        <div className="result-name-card">
            <a className="card-link" href={`${nameCheapUrl}${suggestedName}`} target="_blank" rel="noreferrer">
                <p className="result-name">{suggestedName}</p>
            </a>
        </div>
    )
}
export default NameCard;