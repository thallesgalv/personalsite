import styled from 'styled-components'

export const Container = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 767px) {
    padding: 1rem;
  }

  h3 {
    font: 400 ${({ theme }) => theme.rem(36)} / ${({ theme }) => theme.rem(40)}
      'Poppins';
    text-align: center;
    margin: 4rem 0;

    @media (max-width: 767px) {
      margin: 2rem 0;
    }
  }
`

export const Grid = styled.div`
  max-width: 800px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 6.25rem);
  justify-content: center;
  place-items: start;
  gap: 2.5rem;
  margin: 0 auto;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 6.25rem);
    row-gap: 1rem;
  }

  svg {
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const SubGrid = styled(Grid)`
  max-width: 400px;
  grid-template-columns: repeat(auto-fit, 6.25rem);

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 6.25rem);
    row-gap: 1rem;
  }
`

export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;

  &:nth-of-type(4) {
    margin-top: 2rem;
  }
`

export const FlexItem = styled.div`
  > h4 {
    font: 400 ${({ theme }) => theme.rem(24)} / ${({ theme }) => theme.rem(32)}
      'Poppins';
    text-align: center;
    margin: 1rem 0;
  }
`

export const AnimationContainer = styled.div`
  opacity: 0;
  transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translate3d(0, -50px, 0);
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &.active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
