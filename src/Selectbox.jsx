import styled from "styled-components";
import { useState } from "react";


function Selectbox() {
  const [open, setOpen] = useState(false);

  function boxClick() {
    setOpen((prev) => !prev);
  }

  return (
    <>
      <Selectwrap onClick={boxClick}>
        <span>포인트 관련문의 여기는 문장길 때가 있으니까 한줄줄바꿈한줄줄바꿈</span>
        <span className={`ico_arr_up ${open ? "on" : ""}`}>
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L6 6L1 1" stroke="#B1B8BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </Selectwrap>
      <Listwrap className={open ? "on" : ""}>
        <li className="pressed">여기는 모든 문장 전부 줄바꿈한줄줄바꿈줄바꿈한줄줄바꿈줄바꿈한줄줄바꿈다 노출 줄바꿈 없음</li>
        <li>여기는 모든 문장 전부 줄바꿈한줄줄바꿈줄바꿈한줄줄바꿈줄바꿈한줄줄바꿈다 노출 줄바꿈 없음</li>
        <li>포인트 관련 문의</li>
        <li>캠페인 관련 문의</li>
        <li>회원 정보 수정 문의</li>
        <li>회원 탈퇴 문의</li>
        <li>기타 문의</li>
      </Listwrap>
    </>
  )
}

export default Selectbox

const Selectwrap = styled.div`
  position: relative;
  width: 100%;
  padding: 1.2rem 2.2rem 1.2rem 2rem;
  border: 1px solid var(--n60-color);
  border-radius: 0.8rem;
  background: var(--white);
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span {
    color: var(--n100-color);
    font-size: 1.4rem;
    font-weight: var(--font-weight-medium);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & .ico_arr_up {
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &.on {
      transform: rotate(180deg);
    }
  }
`


const Listwrap = styled.ul`
  position: relative;
  z-index: 10;
  margin-top: 0.5rem;
  padding: 0.6rem 0.6rem 0.6rem 1rem; 
  width: 100%;
  display: none;
  border: 0.1rem solid var(--n60-color);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.14);
  border-radius: 0.8rem;
  background: var(--white);

  & li {
    padding: 1rem;
    width: 100%;
    color: var(--n200-color);
    font-size: 1.4rem;
    font-weight: var(--font-weight-medium);
    letter-spacing: calc(1.4rem * (-0.3 / 100));
    border: none;
    border-radius: 0.8rem;
    cursor: pointer;
  }

  &.on {
    display: block;
  }
`