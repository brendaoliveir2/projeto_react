import Styles from './Footer.module.css'
import logo from '../Imagens/logo.png'
import facebook from '../Imagens/icons8facebook.png'
import instagram from '../Imagens/icons8instagram.png'
import tik_tok from '../Imagens/icons8tiktok.png'
import linkedin from '../Imagens/icons8linkedin.png'


function Footer(){
    return(
        <div id={Styles.Footer}>

        <div className={Styles.logofooter}>
            <img src={logo} alt="logo" />
        </div>

        <div className={Styles.link_footer}>
            <p>LOGIN</p>
            <p>PRIVACIDADE</p>
            <p>SOBRE O IGNITE BANK</p>
            <p>ABRIR CONTA DIGITAL</p>
        </div>

        <div className={Styles.redes_sociais}>
            <h3>REDES SOCIAIS</h3>
            <div className={Styles.redes_png}>
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={tik_tok} alt="tik tok" />
                <div className={Styles.linkedin}>
                <img src={linkedin} alt=" linkedin" />
                </div>
            </div>
        </div>
    </div>

    )
}

export default Footer