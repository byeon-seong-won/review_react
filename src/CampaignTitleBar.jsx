import styled from "styled-components";


  function CampaignTitleBar() {
    return (
      <Campaingbarwrap>
        <a href="#">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 7L9 12L14 17" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <div>
          <span className="done"></span>
          <span className="active">스텝타이틀</span>
          <span>3</span>
          <span>4</span>
        </div>
      </Campaingbarwrap>
    )
  }

  export default CampaignTitleBar

  const Campaingbarwrap = styled.div`
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

    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      
      & span {
        width: 2.4rem;      
        height: 2.4rem;
        font-size: var(--font-bodyL-size);
        font-weight: var(--font-bodyL-weight);
        letter-spacing: var(--font-bodyL-letter-spacing);
        background: var(--prim-L20);
        color: var(--revu-color);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        &.done {
          background: url(../img/ico-check-02.svg) no-repeat center / 100%;
        }

        &.active {
          padding: 0.2rem 1.4rem;
          width: auto;
          height: auto;
          border: 0.15rem solid var(--revu-color);
          border-radius: 5rem;
          font-size: var(--font-callout-size);
          font-weight: var(--font-callout-weight);
          letter-spacing: var(--font-callout-letter-spacing);
          background: transparent;
        }
      }
    }
  `
    