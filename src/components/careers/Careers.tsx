import React from "react";
import Position from "./Position";
const positions = [
    {
        id: '1',
        title: 'Hairstylist',
        description: 'Responsible for cutting, styling, and treating hair according to customer preferences.',
        location: 'Lahore'
    },
    {
        id: '2',
        title: 'Barber',
        description: 'Specializes in cutting, trimming, and grooming mens hair and beards.',
        location: 'Lahore'
    },
    {
        id: '3',
        title: 'Nail Technician',
        description: 'Provides manicures, pedicures, and nail treatments to clients.',
        location: 'Islamabad'
    },
    {
        id: '4',
        title: 'Makeup Artist',
        description: 'Applies makeup and cosmetics to enhance a clients appearance for special occasions or daily wear.',
        location: 'Lahore'
    },
    {
        id: '5',
        title: 'Massage Therapist',
        description: 'Performs massages to relieve stress, promote relaxation, and improve circulation.',
        location: 'Islamabad'
    }
];

const Careers =()=> {
    return (
        <div className="flex flex-col w-full px-[120px] py-[60px] gap-y-[60px]">
            {positions.map((position) => (
                <Position key={position.id} title={position.title} location={position.location} description={position.description}/>
            ))}
        </div>
    )
}

export default Careers;