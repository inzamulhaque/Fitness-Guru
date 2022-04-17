import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [answer, setAnswer] = useState([]);
    useEffect(() => {
        fetch("answer.json")
            .then(res => res.json())
            .then(data => setAnswer(data));
    }, []);
    return (
        <>
            {/* show Q&A */}
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
                {
                    answer.map(ans => <Blog key={ans.id} ans={ans} />)
                }
            </div>
        </>
    );
};

export default Blogs;