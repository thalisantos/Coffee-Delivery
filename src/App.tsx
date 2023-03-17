import { Coffee, MapPin, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import logo from './assets/logo.svg';
import descriptionImage from './assets/descriptionImg.png';
import { BenefitsContent, DescriptionContainer, DescriptionContent, HeaderButtonCart, HeaderButtonLocale, HeaderButtonsContainer, HeaderContainer, HomeContainer } from './styles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HomeContainer>

        <HeaderContainer>
          <div className="container">
            <a href="/">
              <img src={logo} alt="" />
            </a>

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

        <DescriptionContainer>
          <DescriptionContent>
            <div>
              <section>
                <h2>
                  Encontre o café perfeito para qualquer hora do dia
                </h2>
                <h1>
                  Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </h1>
              </section>

              <BenefitsContent>
                <span>
                  <ShoppingCart />
                  Compra simples e segura
                </span>
                <span>
                  <Timer />
                  Embalagem mantém o café intacto
                </span>
                <span>
                  <Package />
                  Entrega rápida e rastreada
                </span>
                <span>
                  <Coffee />
                  O café chega fresquinho até você
                </span>

                <div className="imageContainer">
                  <img src={descriptionImage} alt="" />
                </div>
              </BenefitsContent>
            </div>
          </DescriptionContent>
        </DescriptionContainer>

        <main>

        </main>
      </HomeContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
