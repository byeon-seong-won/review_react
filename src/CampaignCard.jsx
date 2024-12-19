import styled from "styled-components";
import prd from "./assets/card-prd.png";


function CampaignCard () {
    return (
        <CampaignCardwrap>
            <li>
                <div className="campaign-box">
                    <div className="thumb-area">
                        <img src={prd} alt="상품리스트"/>
                    </div>
                    <div className="info-area"> 
                        <p className="date">2024.08.05</p>
                        <span className="title">[리뷰] 기본 며칠남음</span>
                        <p className="point">25,000P</p>
                    </div>
                </div>
                <div className="progress-box">
                    <div className="progress_step">
                        <div className="step done">
                            <div></div>
                            <span>상품구매</span>
                        </div>
                        <div className="step active">
                            <div></div>
                            <span>리뷰검수</span>
                        </div>
                        <div className="step">
                            <div></div>
                            <span>리뷰등록</span>
                        </div>
                        <div className="step">
                            <div></div>
                            <span>지급완료</span>
                        </div>
                    </div>
                </div>
                <button className="button button_campaign">
                    상품구매
                    <span>(-02:59:12)</span>
                </button>
            </li>
        </CampaignCardwrap>
    )
}
export default CampaignCard

const CampaignCardwrap = styled.ul`

  .card li {
        background-color: var(--white);
    }
    .card li .info-area .title {
        font-size: var(--font-bodyM-size);
        font-weight: var(--font-bodyM-weight);
        line-height: var(--font-bodyM-line-height);
        letter-spacing: var(--font-bodyM-letter-spacing);
    }

    
    /* 3) 캠페인 종료 */
    .card li.ended .thumb-area {
        position: relative;
    }
    .card li.ended .thumb-area::before {
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
    .card li.ended .thumb-area::after {
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



    .card.step li {
        position: relative;
        padding: 2.7rem 2.9rem 2.4rem;
        border-radius: 0.8rem;
    }
    .card.step li .campaign-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .card.step li .thumb-area {
        position: relative;
        width: 8.1rem;
        height: 8.1rem;
        overflow: hidden;
        border-radius: 0.8rem;
        flex-shrink: 0;
    }
    .card.step li .info-area {
        margin-left: 1.4rem;
        min-width: 0;  
        flex-grow: 1;   
    }
    .card.step li .info-area .date {
        font-size: var(--font-caption-size);
        font-weight: var(--font-caption-weight);
        line-height: var(--base-line-height);
        letter-spacing: var(--font-caption-letter-spacing);
        color: var(--quicksilver);
    }
    .card.step li .info-area .title {
        display: block;
        width: 100%;
        margin-top: 0.4rem;
        padding-right: 1rem;
        font-size: var(--font-h5-size);
        font-weight: var(--font-h5-weight);
        line-height: var(--base-line-height);
        letter-spacing: var(--font-h5-letter-spacing);
        white-space: nowrap;      
        overflow: hidden;       
        text-overflow: ellipsis;  
    }
    .card.step li .info-area .point {
        font-size: var(--font-h4-size);
        font-weight: var(--font-h4-weight);
        letter-spacing: var(--font-h4-letter-spacing);
        color: var(--n600-color);
    }


    /* 스텝별 프로세스 */
    .progress-box {
        position: relative;
        height: 7rem;
    } 
    .progress_step {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .progress_step .step {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .progress_step .step:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -1;
        width: 100%;
        height: 1.5px;
        background: var(--n40-color);
    }
    .progress_step span {
        position: absolute;
        bottom: 0.7rem;
        font-size: 1rem;
        line-height: var(--base-line-height);
        font-weight: var(--font-weight-medium);
        color: var(--n400-color);
    }

    /* 기본 스탭 */
    .progress_step .step > div {
        width: 1rem; 
        height: 1rem;
        background: var(--lightsilver);
        border-radius: 50%;
    }

    /* 현재 스탭 */
    .progress_step .step.active {
        position: relative;
    }
    .progress_step .step.active > div {
        position: relative; 
        width: 1.3rem; 
        height: 1.3rem;
        background: url(../img/ico-inner-03.svg) #fff no-repeat center / 0.7rem 0.7rem;
        border: 0.15rem solid var(--revu-color);
        border-radius: 50%;
        box-shadow: 0 0 10px 1px rgba(245, 46, 54, 0.3);
    }

  
    /* 끝난 스탭 */
    .progress_step .step.done {
        position: relative;
    }
    .progress_step .step.done::after {
        content: '';
        position: absolute;
        background: linear-gradient(to right, 
        var(--prim-L40) 5%,
        transparent 5% 10%,
        var(--prim-L40) 10% 15%,
        transparent 15% 20%,
        var(--prim-L40) 20% 25%,
        transparent 25% 30%,
        var(--prim-L40) 30% 35%,
        transparent 35% 40%,
        var(--prim-L40) 40% 45%,
        transparent 45% 50%,
        var(--prim-L40) 50% 55%,
        transparent 55% 60%,
        var(--prim-L40) 60% 65%,
        transparent 65% 70%,
        var(--prim-L40) 70% 75%,
        transparent 75% 80%,
        var(--prim-L40) 80% 85%,
        transparent 85% 90%,
        var(--prim-L40) 90% 95%,
        transparent 95% 100%);
    }
    .progress_step .step.done > div {
        position: relative;
        width: 1rem; 
        height: 1rem;
        background: url(../img/ico_step_done.svg) #fff no-repeat center / 100%;
    }
    /* 지급완료 */
    .progress_step .step.fin > div {
        background: url(../img/ico-inner-01.svg) var(--revu-color) no-repeat center / 0.7rem 0.6rem;
        width: 1.3rem; 
        height: 1.3rem;
        border-radius: 50%;
        box-shadow: 0 0 10px 1px rgba(245, 46, 54, 0.3);
    }
    /* 미션실패 */
    .progress_step .step.expire > div {
        background: url(../img/ico-inner-02.svg) var(--primary-color) no-repeat center / 0.2rem 0.7rem;
        width: 1.3rem; 
        height: 1.3rem;
        box-shadow: 0 0 10px 1px rgba(32, 32, 32, 0.3);
        border-radius: 50%;
    }
    /* 스텝별 프로세스 */


    /* 하단 버튼 */
    .card.step button {
        margin-top: 2rem;
    }
`



