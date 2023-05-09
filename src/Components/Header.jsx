import logo from '../Imagens/logo.png'
import Styles from './Header.module.css'

function Header(){
    return(
        <header className={Styles.header}>

            <div className={Styles.logo}>
                <img src={logo} alt="logo" />
            </div>

            <div className={Styles.menu}>
                <p>Inicio</p>
                <p>Para você</p>
                <p>Empresas</p>
                <p>O Ignite</p>
            </div>

            <div className={Styles.conta}>
                <p>Abra sua conta</p>
                <p className={Styles.acesso}>Acessar</p>
            </div>

        </header>
    )
}

export default Header