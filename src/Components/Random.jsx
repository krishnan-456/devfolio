import React from 'react';

export default function Random() {
    function getRandomColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16); // Generates a random number between 0 and 16777215 and converts it to hexadecimal
        return `#${randomColor}`;
    }
    const c1 = getRandomColor()
    const c2 = getRandomColor()
    return (
        <div>
            <div style={{ width: "40px", height: "40px", backgroundImage: `linear-gradient(${c1}, ${c2})`, borderRadius: "50%" }}></div>
        </div>
    );
}