import styled from "styled-components";


  function DefaultTitleBar() {
    return (
      <DefaultTitleBarwrap>
        <a href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7L9 12L14 17" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>
        <h1>titlebar</h1>
      </DefaultTitleBarwrap>
    )
  }

  export default DefaultTitleBar


  const DefaultTitleBarwrap = styled.div`
    position: fixed; 
    top: 0;
    left: 0;
    z-index: 1;
    max-width: 480px;
    min-width: 280px;
    width: 100%;
    height: 4.4rem;
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;

    & a {
      position: absolute;
      width: 2.4rem;
      left: 0.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & h1 {
      font-size: var(--font-h3-size);
      font-weight: var(--font-h3-weight);
      letter-spacing: var(--font-h3-letter-spacing);
      color: var(--n600-color);
    }
  `
    