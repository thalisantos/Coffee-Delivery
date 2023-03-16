import { Coffee, MapPin, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import logo from './assets/logo.svg';
import headerImg from './assets/headerImg.png'
import { HeaderButtonCart, HeaderButtonLocale, HeaderButtonsContainer, HeaderContainer, HomeContainer } from './styles';


function App() {
  return (
    <HomeContainer>

      <HeaderContainer>
        <div className="container">
          <img src={logo} alt="" />

          <HeaderButtonsContainer>
            <HeaderButtonLocale>
              <MapPin
                size={20}
                weight="fill"
                color='#8047F8'

              />
              São Paulo, SP
            </HeaderButtonLocale>

            <HeaderButtonCart>
              <ShoppingCart
                weight='fill'
                color='#C47F17'
                size={20}

              />
            </HeaderButtonCart>
          </HeaderButtonsContainer>

        </div>
      </HeaderContainer>

      <section>
        <div>
          Encontre o café perfeito para qualquer hora do dia
        </div>
        <div>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </div>

        <div className='BenefitsContainer'>
          <span>
            <ShoppingCart />
            Compra simples e segura
          </span>
          <span>
            <Timer />
            Entrega rápida e rastreada
          </span>
          <span>
            <Package />
            Embalagem mantém o café intacto
          </span>
          <span>
            <Coffee />
            O café chega fresquinho até você
          </span>
        </div>

        {/* <img src={headerImg} alt="" /> */}

      </section>

      <main>

      </main>
    </HomeContainer>
  )
}

export default App
