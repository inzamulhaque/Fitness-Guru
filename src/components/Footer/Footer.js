import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <footer className={`bg-black py-2 md:py-3 lg:py-5`}>
                <p className="text-center text-[18px] text-white">
                    copyright &copy; {year}
                </p>
            </footer>
        </>
    );
};

export default Footer;