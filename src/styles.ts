import styled from 'styled-components'

import descriptionBackground from './assets/descriptionBackground.png'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;


  > div {
    margin: auto 10rem;

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
export const HeaderButtonLocale = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  border: none;
  border-radius: 6px;
  height: 3rem;
  cursor: inherit;
  padding: 0.5rem;
  color: #4B2995;
  background: #EBE5F9;
`

export const HeaderButtonCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  border: none;
  border-radius: 6px;
  cursor: pointer;
  height: 3rem;
  min-width: 3rem;

 
  background: #F1E9C9;
`

export const DescriptionContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${() => `url(${descriptionBackground})`} no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DescriptionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

`
export const BenefitsContent = styled.div`
  width: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

