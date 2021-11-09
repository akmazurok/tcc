import React from 'react';
import VagasDestaque from '../../components/VagasDestaque/VagasDestaque';
import PhotosCarousel from '../../components/Carousel/PhotosCarousel';
import './styles.css';


const HomeScreen = () => {
    return (
        <div className="main">
            <div className="container">
                <div>
                    <h4>Titulo</h4>
                    <PhotosCarousel />
                </div>

                <div className="vagas">
                    <h4>Cadastre-se em alguma dessas oportunidades!</h4>
                    <VagasDestaque />
                </div>

            </div>
        </div>
    );
}

export default HomeScreen;
