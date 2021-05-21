import styled, { css } from 'styled-components'

export const Wrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;

  opacity: 0;
  transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  @media (max-width: 1400px) {
    margin: 8rem 0;
  }

  @media (max-width: 768px) {
    margin: 4rem 0;
    flex-direction: column;
  }

  &:nth-child(odd) {
    justify-content: flex-start;
    transform: translate3d(-50%, 0, 0);

    @media (max-width: 768px) {
      transform: translate3d(-15px, 0, 0);
    }
  }

  &:nth-child(even) {
    justify-content: flex-end;
    transform: translate3d(50%, 0, 0);

    @media (max-width: 768px) {
      transform: translate3d(15px, 0, 0);
    }
  }

  &.verticalAnimation {
    transform: translate3d(0, 30%, 0);
  }

  .Tilt,
  div {
    img {
      margin-left: -2rem;
      top: 150px;

      @media (max-width: 1400px) {
        width: 80%;
      }

      @media (max-width: 768px) {
        margin-left: unset;
        top: unset;
        margin: 1rem auto;
        width: 90%;
      }
    }
  }

  &.active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const Container = styled.article`
  width: max(35%, 600px);
  min-height: ${({ theme }) => theme.rem(260)};
  border: ${({ theme }) => theme.rem(5)} solid
    ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.rem(theme.radius)};
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.05);

  @media (max-width: 1400px) {
    padding: 1.25rem;
    font: 400 1rem/1.5rem 'Poppins';
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 1rem;
  }

  > span {
    margin: 1rem 0;
    font: ${({ theme }) => theme.font.subheadline};
    font-weight: 200;

    @media (max-width: 767px) {
      margin: 0.5rem 0;
    }
  }

  div {
    a {
      color: ${({ theme }) => theme.colors.secondary};
      text-decoration: underline;
      display: inline-block;
    }
  }

  > h4 {
    font: 400 ${({ theme }) => theme.rem(36)} / ${({ theme }) => theme.rem(42)}
      'Poppins';

    margin: 1rem 0;
  }

  > p {
    max-width: 95%;
  }

  div > ul {
    padding: 2rem;
    li {
      list-style: square;
    }
  }

  button {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`
export const ContainerIcons = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    gap: 1.25rem;
  }
`
