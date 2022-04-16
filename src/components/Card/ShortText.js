import React from 'react';
import { useNavigate } from "react-router-dom";

const ShortText = ({ text, id }) => {

    const navigate = useNavigate();
    return (
        <>
            {text.slice(0, 150)}
            <span className='font-bold cursor-pointer' onClick={() => navigate(`/readmore/${id}`)}> ...Read More</span>
        </>
    );
};

export default ShortText;