import './ImgCarrossel.css'
import Carousel from 'react-bootstrap/Carousel';
import {useEffect, useState} from 'react';
import jsonData from '../../assets/json/imagens.json'

function ImgCarrossel() {
    const [ImgCarrossel, setImgCarrossel] = useState([]);

    useEffect(() => {
        setCarouselImagens(jsonData);
    }, []);
    return (
        <div className='ctn-carrossel'>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={ImageBitmap.src}
                        alt={ImageBitmap.caption}
                        style={{"height": "600px"}}
                    />
                    <Carousel.Caption>
                        <h3>{Imagem.caption}</h3>
                        <p>{Animal.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ImgCarrossel;