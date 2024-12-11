import styled from "styled-components";


function SubTitleBar () {

  return (
    <SubTitleBarwrap>
      <p>Title</p>
    </SubTitleBarwrap>
  )
}


export default SubTitleBar

const SubTitleBarwrap = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    padding: 1.65rem 1.6rem;
    width: 100%;
    z-index: 2;
    background: var(--white);

    & p {
      font-size: 2.2rem;
      font-weight: var(--font-weight-bold);
      letter-spacing: calc(2.2rem * -0.003);
    }
`
