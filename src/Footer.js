import React from 'react';
import styled from 'styled-components';
import logo from "./assets/footer_logo.svg";

function Footer() {
    return (
        <Footerwrap>
            <div className="inner">
                <div className="col-left">
                    <div className="logo-area">
                        <a><img src={logo} alt='로고이미지'/></a>
                    </div>
                    <ul className="util-area">
                        <li className="util-item"><a href="#">이용약관</a></li>
                        <li className="util-item"><a href="#">개인정보 처리방침</a></li>
                    </ul>
                    <div className="address">
                        법인명 : 주식회사 자몽랩  ㅣ  대표자 : 조준형<br />
                        소재지 : 서울특별시 서초구 서초대로60길 18, 7층 (정인빌딩)<br />
                        이메일문의 : <a href="mailto:revuclick@jamonglab.com"> revuclick@jamonglab.com</a><br />
                        고객센터 : <a href="tel:02-3472-9229"> 02-3472-9229</a><br />
                        * 업무시간: 평일 10:00 ~ 17:00 (점심: 12:00 ~ 13:00 / 주말, 공휴일 휴무)
                    </div>
                    <div className="small">
                        Copyright &copy; Revuclick Corporation. All Rights Reserved.
                    </div>
                </div>
            </div>
        </Footerwrap>
    )
}

const Footerwrap = styled.div`
    padding: 38px 16px 190px;
    background: var(--snowwhite);

    .util-area {
        margin-top: 35px;
        display: flex;
        align-items: center;
        gap: 20px;

        a {
            color: var(--n300-color);
            font-size: 12px;
            font-weight: var(--font-weight-medium);
            line-height: var(--base-line-height);
            letter-spacing: -0.5px;
        }
    }

    .address {
        margin-top: 18px;
    }
    .address,
    .small {
        display: block;
        color: var(--n200-color);
        font-weight: var(--font-weight-medium);
        font-size: 11px;
        line-height: 16px;
    }
`;

export default Footer;

