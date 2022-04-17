import React from 'react';

const About = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto mt-3">
            <div className="order-2 md:order-1 p-5">
                <h3 className="text-[25px] font-bold">I'm Md Inzamul Haque</h3>
                <p className="mt-2 text-[20px] font-medium text-justify">
                    I am a student. I like coding a lot. Likes to do challenging coding. I wish I was a web developer. Inn Sha Allah I wiil do intership as web developer in three months.
                </p>
            </div>
            <div className="order-1 md:order-2 p-5">
                <p className="mt-2 text-[20px] font-medium text-justify">
                    I will upload the picture as soon as possible
                </p>
            </div>
        </div>
    );
};

export default About;