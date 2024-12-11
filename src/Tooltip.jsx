import styled from "styled-components";

function Tooltip() {
  return (
    <>
      <Tooltipwrap>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, tenetur!</p>
      </Tooltipwrap>
    </>
  )
}

export default Tooltip

const Tooltipwrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    position: relative;
    max-width: 16.6rem;
    padding: 0.8rem;
    border-radius: 0.8rem;
    background: rgba(33, 37, 41,0.94);
    animation: floating 0.8s linear infinite alternate;

    &::before {
      content: '';
      position: absolute;
      left:50%;
      transform: translateX(-50%);
      bottom:-0.7rem;
      border-left:0.7rem solid transparent;
      border-right:0.7rem solid transparent;
      border-top:0.8rem solid rgba(33, 37, 41,0.94);
    }

    & p {
      font-size: 1.2rem;
      font-weight: var(--font-weight-medium);
      line-height: 1.3;
      color: var(--white);
      letter-spacing: calc(1.2rem * -0.005);
    }
    
    @keyframes floating {
        from {
            transform: translateY(20%);
        }
        to {
            transform: translateY(10%);
        }
    }
`