import imgNotFond from "../../assets/img-not-found.png";
import './Atracao.css'

function Atracao() {
    return (
        <div className="ctn-atracao">
            <img src={imgNotFond} />
            <p>Lorem Ipsum</p>
        </div>
    );
}

export default Atracao;