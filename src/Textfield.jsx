import styled from "styled-components";


function Textfield () {
  return (
    <Textfieldwrap>
        <input type="text" placeholder="Placehoder text" />
        <p>Description</p>
    </Textfieldwrap>
  )
}

export default Textfield


const Textfieldwrap = styled.div`

    & input {
        width: 100%;
        height: 4.4rem;
        padding: 0 1.5rem;
        border-radius: 0.8rem;
        border: 0.1rem solid var(--n60-color);
    }
    .textfield.wrong input {
        background: var(--prim-L20);
        border: 0.1rem solid var(--revu-color);
    }
    .textfield.suffix > div {
        position: relative;
    }
    .textfield.suffix > div input {
        width: 100%;
        padding-right: 10rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .textfield.suffix span {
        position: absolute;
        top: 50%;
        right: 1.5rem;
        transform: translateY(-50%);
        color: var(--n500-color);
        font-size: 1.4rem;
        font-weight: var(--font-weight-medium);
    }

    .textfield p {
        padding-left: 1rem;
        margin-top: 0.3rem;
        font-size: 1.2rem;
        line-height: var(--base-line-height);
        font-weight: var(--font-weight-medium);
        color: var(--success-color);
    }
    .textfield.wrong p {
        color: var(--revu-color);
    }
   
`
