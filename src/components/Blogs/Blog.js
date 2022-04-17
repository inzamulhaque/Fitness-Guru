import React from 'react';

const Blog = ({ ans }) => {
    const { question, answer, answer2 } = ans || {};
    return (
        <div className="card p-7 mt-3 hover:scale-110 duration-500 ease-out">
            <h4 className="text-justify text-[23px] font-semibold">{question}</h4>
            <p className="text-justify text-[20px] font-medium mt-2">{answer}</p>
            {answer2 && <p className="text-justify text-[20px] font-medium mt-2">{answer2}</p>}
        </div>
    );
};

export default Blog;