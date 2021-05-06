import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;

  opacity: 0;
  transition: .6s cubic-bezier(0.175, 0.885, 0.320, 1.275);

  &:nth-child(odd) {
    justify-content: flex-start;
    transform: translate3d(-50%, 0, 0);
  }
  &:nth-child(even) {
    justify-content: flex-end;
    transform: translate3d(50%, 0, 0);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .Tilt {
    img {
      margin-left: -2rem;
      top: 150px;

      @media (max-width: 768px) {
        margin-left: unset;
        top: unset;
        margin: 1rem 0;
      }
    }
  }

  &.active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const Container = styled.div`
  width: max(35%, 600px);
  border: ${({ theme }) => theme.rem(5)} solid
    ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.rem(theme.radius)};
  padding: 1.5rem;
  background-color: rgba(255,255,255,.05);
  /*Ver depois*/

  @media (max-width: 767px) {
    width: 100%;
  }

  > span {
    font-weight: 200;
    margin: 1rem 0;
  }

  > h1 {
    font: 400 ${({ theme }) => theme.rem(36)} / ${({ theme }) => theme.rem(42)}
      'Poppins';
    margin: 1rem 0;
  }

  p {
    max-width: 95%;
  }
`
export const ContainerIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    gap: 1rem;
  }
`
