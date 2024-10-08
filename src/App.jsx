import React from 'react';
import Navbar from './components/Navbar';


const items = [
    {
        image: "https://avatars.mds.yandex.net/i?id=5758bc777a4147d2acddc08aa14df445056e5988-10346227-images-thumbs&n=13",
        title: 'Comaro',
        price: '$100,000',
    },
    {
        image: 'https://avatars.mds.yandex.net/i?id=ac9492b16e89fcba5cbc9394b47a15f18d391004-12422060-images-thumbs&n=13',
        title: 'Ferari',
        price: '$200,000',
    },
    {
        image: 'https://avatars.mds.yandex.net/i?id=bec343522c82faba3f33f3fd479bbf46b678061a-4210718-images-thumbs&n=13',
        title: 'Bugatti',
        price: '$300,000',
    },
    {
        image: 'https://avatars.mds.yandex.net/i?id=72ad92a4c3c862a70b8d6103d1fb2bf4a857cc1f-4428810-images-thumbs&n=13',
        title: 'Lombargini',
        price: '$400,000',
    },
];
const App = () => {

    return (
        <div className="flex flex-wrap justify-center">
            {items.map((item, index) => (
                <Navbar key={index} image={item.image} title={item.title} price={item.price} />
            ))}
        </div>
    );
};

export default App;

