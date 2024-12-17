import styled from "styled-components";


  function Notifylist() {

    return (
      <Notifylistwrap>
        <li>
            <div className="new">
                <span>“REVUCLICK ” 이용가이드 줄바꿈테스트 줄바꿈테스트 줄바꿈테스트 줄바꿈테스트</span>
                <span className="ico_arr_right">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 7L15 12L10 17" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>
        </li>
      </Notifylistwrap>
    )
  }

  export default Notifylist

  const Notifylistwrap = styled.ul`
        margin: 0 -1.5rem;

        & li {
            padding: 2.5rem 1.7rem;
            display: flex;
            border-bottom: 0.1rem solid var(--whitesmoke);

            & > div {
                position: relative;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                &.new {
                    padding-left: 1.7rem;

                    & span:nth-child(1)::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 1.3rem;
                        height: 1.3rem;
                        background: url(../img/ico-new.svg) no-repeat center / 100%;
                    }
                }

                & span:nth-child(1) {
                    padding-right: 1rem;
                    text-overflow: ellipsis;
                    font-size: var(--font-bodyM-size);
                    font-weight: var(--font-bodyM-weight);
                    line-height: var(--font-bodyM-line-height);
                    letter-spacing: var(--font-bodyM-letter-spacing);
                    white-space: nowrap;
                    overflow: hidden;
                    color: var(--n600-color);
                }

                & .ico_arr_right {
                    width: 2.4rem;
                    height: 2.4rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-shrink: 0;
                }
            }
        }
    }
  `
    