import styled from 'styled-components'

export const Container = styled.main`
  width: 80%;
  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`

export const Content = styled.div`
  width: 100%;
  margin-top: 10rem;
  text-align: center;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: var(--text);

    margin-bottom: 2rem;
  }

  p {
    font-size: 1.4rem;
    color: var(--sub-text);

    margin-bottom: 2rem;
  }

  div {
    input {
      font-size: 1.1rem;
      width: 22rem;
      height: 4rem;
      padding: 2rem 1rem;
      z-index: 100;
      box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.6);
      border: none;
    }
  }

  i {
    font-size: 2rem;
    color: var(--sub-text);
    position: relative;
    right: -9rem;
    top: -3rem;
  }

  img {
    position: relative;
    width: 100%;
    margin-top: -4.5rem;
    z-index: -100;
  }

  @media screen and (min-width: 540px) {
    div {
      input {
        width: 36rem;
      }
    }

    i {
      right: -15rem;
    }
  }

  @media screen and (min-width: 760px) {
    h1 {
      padding: 0 10rem;
    }

    p {
      padding: 0 5rem;
    }
  }

  @media screen and (min-width: 1000px) {
    div {
      input {
        width: 60rem;
      }
    }

    i {
      right: -27rem;
    }
  }
`
