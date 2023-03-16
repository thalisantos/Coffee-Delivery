import styled from 'styled-components'


export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto 10rem;

`

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;


  > div {
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
  height: 3rem;
  cursor: pointer;
  height: 3rem;
  min-width: 3rem;

  background: #F1E9C9;
`
