import styled from "styled-components";
import prd from "./assets/card-prd.png";


function PointCard () {
    return (
        <PointCardwrap>
            <li>
                <p>지급완료</p>
                <div className="status_wrap">
                    <div className="thumb-area">
                        <img src={prd} alt="상품리스트" />
                    </div>
                    <div className="info-area">
                        <p className="date">2024.8.5</p>
                        <span className="title">[리뷰] Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, non!</span>
                        <div className="point-box">
                            <p className="point">25,000P</p>
                        </div>
                    </div> 
                </div>
            </li>
        </PointCardwrap>
    )
}
export default PointCard

const PointCardwrap = styled.ul`

    li {
        padding: 1.3rem 2.3rem 1.8rem;
        border-radius: 0.8rem;
        background-color: var(--white);
        & > p {
            font-size: var(--font-h5-size);
            font-weight: var(--font-h5-weight);
            letter-spacing: var(--font-h5-letter-spacing);
        }
        & .status_wrap {
            margin-top: 1.4rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        & .thumb-area {
            position: relative;
            width: 8.1rem;
            height: 8.1rem;
            overflow: hidden;
            border-radius: 0.8rem;
            flex-shrink: 0;
        }
        & .info-area {
            margin-left: 1.4rem;
            min-width: 0;  
            flex-grow: 1;  
            & .date {
                font-size: var(--font-caption-size);
                font-weight: var(--font-caption-weight);
                letter-spacing: var(--font-caption-letter-spacing);
                color: var(--n100-color);
            }
            & .title {
                display: block;
                width: 100%;
                margin-top: 0.8rem;
                white-space: nowrap;      
                overflow: hidden;       
                text-overflow: ellipsis;  
                color: var(--n500-color);
                font-size: var(--font-bodyM-size);
                font-weight: var(--font-bodyM-weight);
                line-height: var(--font-bodyM-line-height);
                letter-spacing: var(--font-bodyM-letter-spacing);
            }
            & .point-box {
                display: flex;
                align-items: center;
                gap: 0.4rem;
                & .point {
                font-size: var(--font-h2-size);
                font-weight: var(--font-h2-weight);
                letter-spacing: var(--font-h2-letter-spacing);
                color: var(--n600-color);
                }
            }
        }

        &.ended .thumb-area {
            position: relative;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                z-index: 15;
                border-radius: 0.4rem;
                background: rgba(0, 0, 0,0.6);
            }
            &::after {
                content: '캠페인 종료';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 16;
                width: 6.7rem;
                height: 2.1rem;
                font-size: var(--font-caption-size);
                font-weight: var(--font-caption-weight);
                line-height: var(--font-caption-letter-spacing);
                color: var(--white);
                border-radius: 0.2rem;
                background: var(--black);
                border-radius: 0.2rem;
                box-shadow: 0px 0px 4.16px 0px rgba(0, 0, 0, 0.2);
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
   
`



