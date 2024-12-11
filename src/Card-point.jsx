import styled from "styled-components";
import prd from "./assets/card-prd.png";


function Card() {
    return (
        <Cardwrap>
            <li>
                <p>지급완료</p>
                <div className="status_wrap">
                    <div className="thumb-area">
                        <img src={prd} alt="상품리스트" />
                    </div>
                    <div className="info-area">
                        <p className="date">2024.8.5</p>
                        <span className="title">[리뷰] 00베이커리 모찌빵 말줄임</span>
                        <div className="point-box">
                            <p className="point">25,000P</p>
                        </div>
                    </div> 
                </div>
            </li>
        </Cardwrap>
    )
}
export default Card


const Cardwrap = styled.ul`
    margin: 0 1.6rem;
    border:2px solid red;
    

    .status_wrap {
        margin-top: 1.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    & > li {
        position: relative;
        width: 100%;
        border-radius: 0.4rem;
        overflow: hidden;
        background-color: var(--white);

        & > div:nth-child(1) {
            position: relative;

            & > div {
                border-radius: 0.8rem;
                overflow: hidden;

                & > span:nth-of-type(1) {
                    position: absolute;
                    right: 0.9rem;
                    bottom: 1rem;
                    z-index: 10;
                    width: 2rem;
                    height: 1.9rem;
                    border:1px solid #000;
                }
            }
        }
    }
`



