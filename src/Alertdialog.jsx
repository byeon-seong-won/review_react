import styled from "styled-components";



function Alertdialog() {
  return (
    <>
      <Modalwrap></Modalwrap>
      <Alertdialogwrap>
        <h2>Title</h2>
        <div className="desc-txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, omnis.</div>
        <div className="button_wrap">
            <button className="button button_n40">Secondary</button>
            <button className="button button_red Enabled">Primary</button>
        </div>
        <a href="#">문제가 발생했나요? 1:1 문의하기</a>
      </Alertdialogwrap>
    </>

  )
}
export default Alertdialog



const Modalwrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999; 
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

const Alertdialogwrap = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    width: 80%;
    max-width: 32rem;
    padding: 2.2rem 2.4rem 1.6rem;
    border-radius: 1.2rem;
    background: var(--white);
    border: 0.1rem solid var(--whitesmoke);

    & h2 {
      font-size: var(--font-h3-size);
      font-weight: var(--font-h3-weight);
      letter-spacing: var(--font-h3-letter-spacing);
      color: var(--n600-color);
    }

    & .desc-txt {
      margin-top: 0.8rem;
      font-size: var(--font-bodyL-size);
      font-weight: var(--font-bodyL-weight);
      letter-spacing: var(--font-bodyL-letter-spacing);
      color: var(--n400-color);
    }

    & .button_wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;

        & .button {
        margin-top: 1.8rem;
        font-weight: var(--font-weight-bold);
      }
    }
    & a {
        display: block;
        margin-top: 0.8rem;
        text-align: center;
        font-size: 1rem;
        font-weight: var(--font-weight-bold);
        letter-spacing: calc(1rem * -0.02);
        text-decoration: underline;
        color: var(--n200-color);
    }
`
