import React, {useState} from 'react';
import classes from './ImagePicker.module.css'; // Import CSS module
import Slider from "react-slick";
import {Container} from "react-bootstrap";
import imageList from "../../data/avatars/images"

const ImagePicker = ({setSelectedImage}) => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 4,
        swipeToSlide: true,
        speed: 500,
        afterChange: (current) => handleImageChange(imageList[current].src)
    };

    const [selectedImage, setSelectedImageLocal] = useState('');

    const handleImageChange = (imageUrl) => {
        setSelectedImageLocal(imageUrl);
        setSelectedImage(imageUrl);
    };

    return (
        <Container style={{minWidth: '95%'}}>
            <div className={classes.imagePicker}>
                <div className="slider-container">
                    <Slider {...settings}>
                        {imageList.map((image) => (
                            <div className={classes.circle} key={image.id}>
                                <input
                                    type="radio"
                                    id={image.id}
                                    name="image"
                                    value={image.src}
                                    checked={selectedImage === image.src}
                                    onChange={() => handleImageChange(image.src)}
                                />
                                <label htmlFor={image.id}>
                                    <img src={image.src} alt={image.alt}/>
                                </label>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </Container>
    );
}

export default ImagePicker;
