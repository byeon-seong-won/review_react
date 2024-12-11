import styled from "styled-components";
import { useState } from "react";


function Chip() {

  const listItems = ['list1', 'Lorem ipsum', 'list3', 'list4', 'list5']
  const [clickIndex, setClickIndex] = useState(null);

  return (
      <Chipwrap>
        {listItems.map((item,index) => (
          <li 
            key={index}
            onClick={() => setClickIndex(index)}
            className={clickIndex == index? "on" : ""}>{item}
          </li>
        ))
        }
      </Chipwrap>
  )
}


export default Chip

const Chipwrap = styled.ul`
  height: 6rem;
  padding: 1.2rem 1.6rem;
  background: var(--white);
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid var(--n60-color);
  background: var(--white);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  overflow-x: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & li {
    padding: 0.6rem 1.2rem;
    font-size: var(--font-bodyM-size);
    font-weight: var(--font-bodyM-weight);
    line-height: var(--font-bodyM-line-height);
    letter-spacing: var(--font-bodyM-letter-spacing);
    white-space: nowrap;
    color: var(--n300-color);
    border: 0.1rem solid var(--whitesmoke);
    border-radius: 99.9rem;

    &.on {
      font-weight: var(--font-weight-bold);
      color: var(--white);
      background: var(--revu-color);
    }
  }
`
