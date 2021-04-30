import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;

>img {
  margin-left: -80px;
  margin-top: 400px;
}
`
export const Container = styled.div`
  width: 35%;
  border: ${({ theme }) => theme.rem(5)} solid
    ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.rem(theme.radius)};
  padding: 1.5rem;

  > span {
    font-weight: 200;
    text-transform: uppercase;
  }

  > h1 {
    font: 400 ${({ theme }) => theme.rem(36)} / ${({ theme }) => theme.rem(40)}
      'Poppins';
    margin: 1rem 0;
  }
`
export const ContainerIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`
