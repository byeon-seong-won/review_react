import { useState } from "react";
import styled from "styled-components";


  function Faqlist() {

    const [open,setOpen] = useState(false);
    
    function faqClick() {
        setOpen((prev => !prev))
    }

    return (
      <Faqlistwrap>
        <li onClick={faqClick}>
            <div className="faq_header new">
                <span className="txt">회원 탈퇴는 어떻게 하나요?</span>
                <span className={`ico_arr_up ${open ? 'on' : ""}`}>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L6 6L1 1" stroke="#151515" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>
            <div className={`faq_content ${open ? 'on' : ""}`}>
                <span>A. 회원탈퇴는 <em>마이페이지 &gt; 회원탈퇴</em>에서 가능합니다.</span>    
            </div>
        </li>
      </Faqlistwrap>
    )
  }

  export default Faqlist

  const Faqlistwrap = styled.ul`
        margin: 0 -1.5rem;
        background: var(--white);

        & li {
            display: flex;
            flex-direction: column;
            border-bottom: 0.1rem solid var(--whitesmoke);
        }

        & .faq_header {
            padding: 2.2rem 1.6rem 1.9rem;
            position: relative;
            display: flex;
            justify-content: start;
            align-items: center;

            &.new .txt::before {
                content: '';
                width: 1.3rem;
                height: 1.3rem;
                margin-top: 0.3rem;
                background: url(../assets/ico-new.svg) no-repeat center / 100%;
                flex-shrink: 0;
            }

            & .txt {
                padding-right: 3.5rem;
                font-size: var(--font-bodyM-size);
                font-weight: var(--font-bodyM-weight);
                line-height: var(--font-bodyM-line-height);
                letter-spacing: var(--font-bodyM-letter-spacing);
                display: flex;
                align-items: start;
                gap: 0.4rem;
            }

            & .ico_arr_up {
                position: absolute;
                right: 1.6rem;
                top: 2.2rem;
                width: 2.4rem;
                height: 2.4rem;
                margin-top: -0.2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: 0.1s;

                &.on {
                    transform: rotate(180deg);
                }
            }
        }

        & .faq_content {
            display:none;
            padding: 0 1.6rem 1.6rem 1.6rem;

            & span {
                display: block;
                padding: 1.6rem;
                border-radius: 1rem;
                font-size: var(--font-bodyM-size);
                font-weight: var(--font-bodyM-weight);
                line-height: var(--font-bodyM-line-height);
                letter-spacing: var(--font-bodyM-letter-spacing);
                color: var(--n500-color);
                background: var(--n20-color);
                & em {
                    font-weight: var(--font-weight-bold);
                }
            }

            &.on {
                display:block;
            }
        }
    }
  `
    