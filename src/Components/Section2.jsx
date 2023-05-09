import Styles from './Section2.module.css'
import cartao from '../Imagens/cartao.png'

function Section2(){
    return(
        <div className={Styles.section}>
            <div className={Styles.info}>
            <h1>CONHEÇA NOSSOS CARTÕES DE DÉBITO E CRÉDITO</h1>
            <h2>Segurança e flexibilidade nos pagamentos <br/>além de muitos benefícios e promoções para facilitar o seu dia a dia.</h2>
            <p className={Styles.select}>Solicite já o seu</p>
            </div>

            <div className={Styles.cartao}>
                 <img src={cartao} alt='cartões'/>

            </div>
         
        </div>
    )

}


export default Section2