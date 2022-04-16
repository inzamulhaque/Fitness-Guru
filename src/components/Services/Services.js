import React from 'react';
import useData from '../../hooks/useData';
import Card from '../Card/Card';

const Services = () => {
    const data = useData();
    return (
        <>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
                {
                    data.map(item => <Card key={item.id} data={item} />)
                }
            </div>
        </>
    );
};

export default Services;