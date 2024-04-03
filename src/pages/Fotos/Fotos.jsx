import './Fotos.css';
import '../../../src/index.css'
import ImgCarrossel from '../../components/ImgCarrossel/ImgCarrossel';
import Navegacao from '../../components/Navegacao/Navegacao.jsx';

function Fotos() {
    return(
        <>
            <Navegacao />
            <h1>Fotos</h1>
            <ImgCarrossel />
        </>
    );
}

export default Fotos