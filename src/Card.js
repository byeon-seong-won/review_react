import React from "react";
import styled from "styled-components";


function Card() {
    return (
        <Cardwrap>
            <li className="active">
                <div>
                    <div></div>
                    <span>
                        <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_898_30444)">
                            <path d="M16 24.35L14.55 23.03C9.4 18.36 6 15.27 6 11.5C6 8.41 8.42 6 11.5 6C13.24 6 14.91 6.81 16 8.08C17.09 6.81 18.76 6 20.5 6C23.58 6 26 8.41 26 11.5C26 15.27 22.6 18.36 17.45 23.03L16 24.35Z" fill="#29363D" fill-opacity="0.2" shape-rendering="crispEdges"/>
                            <path d="M14.9876 22.5493L14.9866 22.5485C12.3989 20.2019 10.3033 18.2978 8.84702 16.5161C7.39792 14.7433 6.65 13.1713 6.65 11.5C6.65 8.76976 8.77821 6.65 11.5 6.65C13.0435 6.65 14.5357 7.3719 15.5068 8.50333L16 9.07803L16.4932 8.50333C17.4643 7.3719 18.9565 6.65 20.5 6.65C23.2218 6.65 25.35 8.76976 25.35 11.5C25.35 13.1713 24.6021 14.7433 23.153 16.5161C21.6967 18.2978 19.6011 20.2019 17.0134 22.5485L17.0124 22.5493L16 23.471L14.9876 22.5493Z" stroke="#F4F5F5" stroke-width="1.3" shape-rendering="crispEdges"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_898_30444" x="0" y="0" width="32" height="30.35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="3"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_898_30444"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_898_30444" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </span>
                    <span>
                        <span>-2</span>일
                    </span>
                </div>
                <div>
                    <span className="point">25,000P</span>
                    <p className="title">[브랜드명] 국물,로제 떡볶이 맵기 3종 육수까지 들어있는 국물,로제 떡볶이 맵기 3종 육수까지 들어있는</p>
                    <div className="desc-box">
                        <span>신청 |</span>
                        <span className="current">56</span> /
                        <span>100</span>명
                    </div>
                </div>
            </li>
        </Cardwrap>
    )
}


const Cardwrap = styled.ul`
    margin: 0 1.6rem;
    border:2px solid red;
    
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




export default Card