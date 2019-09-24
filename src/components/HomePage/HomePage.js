import React, {useState, useEffect} from 'react';

import SubHeader from "../SubHeader/SubHeader";
import Header from "../Header/Header";
import Photoes from "../Photoes/Photoes";
import FixedMenu from "../FixesMenu/FixedMenu";

function HomePage({
                      uid,
                      onAddPhoto,
                      photos,
}) {
    const [images, setImages]= useState([]);
    const handleAddNewPhoto = src => {
        const newImages = [...images];
        const newPhoto = {
            ownerId: uid,
            src,
        };
        console.log(newPhoto);
        newImages.push(newPhoto);
        setImages(newImages);
        onAddPhoto(newPhoto)
    };

    useEffect(() => {
        if(photos) {
            const images = []
            for (const id in photos) {
                const image = {
                    id,
                    ...photos[id],
                }
                images.push(image)
            }
            setImages(images)
        }
    }, [photos]);

    return (
        <div>
            <Header/>
            <SubHeader/>
            <Photoes
            images={images}
            />
            <FixedMenu
            onAddNewPhoto={handleAddNewPhoto}
            />
        </div>

    );
}

export default HomePage;