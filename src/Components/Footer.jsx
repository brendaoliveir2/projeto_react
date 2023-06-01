import Styles from './Footer.module.css'

function Footer(){
    return(
        <div className={Styles.funf}>

            <div className={Styles.social}>
                <p className={Styles.facebook}></p>
                <p className={Styles.instagram}></p>
                <p className={Styles.twitter}></p>
                <p className={Styles.youtube}></p>
            </div>

        <div className={Styles.flex}>

            <div className={Styles.info}>
                <p>Termos de uso</p>
                <p>Avisos Legais</p>
                <p>Informações corporativas</p>
            </div>

            <div className={Styles.info2}>
                <p>Central de Ajuda</p>
                <p>Imprensa</p>
                <p>Relações com Investidores</p>
            </div>

            <div className={Styles.info3}>
                <p>Privacidade</p>
                <p>Prefêrencias de cookies</p>
                <p>Entre em contato</p>
            </div>


        </div>
          

        </div>
    )
}

export default Footer