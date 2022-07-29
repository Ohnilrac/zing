import styled from 'styled-components'

export const Container = styled.header`
  /* position: fixed; */
  /* border-bottom: 1px solid red; */
  width: 80%;
  margin: 0 auto;

  .icon {
    font-size: 2.4rem;
    color: var(--orange);
    transition: all 0.3s;
  }

  .iconMenu {
    visibility: hidden;
    transition: 0.7s;
    transform: translateX(100%)
  }

  .transitionMenuClose{
    transform: translateX(0)
  }

  div {
    span {
      position: fixed;
      top: 2rem;
      right: 2rem;
    }
  }
`

export const Navigation = styled.nav`
  /* width: 80%; 
  margin: 0 auto; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--text);

    span {
      color: var(--orange);
    }
  }
`
export const Menu = styled.div`
  display: none;
  transform: translateY(100%);

  ul {
    display: flex;
    flex-direction: column;
  }
`

export const Contact = styled.div`
  visibility: hidden;
`
export const MenuOpen = styled.div`
  display: grid;
  place-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: var(--background);
  z-index: 100;

  span {
    position: fixed;
    top: 2rem;
    right: 2rem;
  }

  ul {
    display: grid;
    gap: 5rem;
    text-align: center;

    li {
      a {
        color: var(--orange);
        font-weight: 700;
      }
    }
  }
`
