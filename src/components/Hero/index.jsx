import HeroImg from '../../assets/hero.png'
import Visa from '../../assets/visa.svg'
import Maestro from '../../assets/maestro.svg'
import Amex from '../../assets/amex.svg'
import Paypal from '../../assets/paypal.svg'
import Pix from '../../assets/pix.svg'

import * as s from './styles'

export default function Hero() {
    return (
        <s.Container>
            <h1>O único banco digital que irá te auxiliar em tudo o que você precisa</h1>
            <h3>Fazemos de tudo para que você esteja seguro e tenha uma experiência rápida, boa e com muita comodidade.</h3>
            <button>Faça parte conosco</button>
            <div>
                <div>
                    <p>1º</p>
                    <p>Em mercado</p>
                </div>
                <div>
                    <p>5M</p>
                    <p>Usuários ativos</p>
                </div>
                <div>
                    <p>2M</p>
                    <p>Transações</p>
                </div>
            </div>
            <s.Hero src={HeroImg} alt="" />
            <div>
                <img src={Visa} alt="" />
                <img src={Maestro} alt="" />
                <img src={Amex} alt="" />
                <img src={Paypal} alt="" />
                <img src={Pix} alt="" />
            </div>
        </s.Container>
    )
};