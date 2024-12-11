import styled from "styled-components";
import { useState } from "react";
import navMain from "./assets/ico-main.svg"


function Navbar() {

    const navItems = [
        { 
            name: '나의 캠페인', 
            svg: (
            <svg width="45" height="32" viewBox="0 0 45 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.0307 15.4691C31.0755 15.3852 31.0726 15.3417 31.0716 15.3309C31.0702 15.3172 31.0645 15.2914 31.0343 15.2536C30.9673 15.1695 30.788 15.0497 30.5008 15.0495L22.393 15.0433H22.3929L14.5006 15.0384C14.2145 15.0382 14.0241 15.157 13.9438 15.2548C13.9065 15.3002 13.8941 15.3374 13.8905 15.3645C13.8873 15.3885 13.8858 15.4405 13.9269 15.5283C14.0662 15.8254 14.2159 16.1081 14.3764 16.4114C14.4516 16.5534 14.5292 16.6999 14.6092 16.8545C14.8451 17.3104 15.092 17.8193 15.2507 18.3434C15.662 19.7016 16.2602 20.9201 17.0014 21.9341C17.7426 22.948 18.6062 23.7298 19.5315 24.2541C20.4545 24.7771 21.4258 25.0371 22.3937 25.0371C23.3615 25.0371 24.3328 24.7771 25.2558 24.2541C26.1811 23.7298 27.0447 22.948 27.7859 21.9341C28.5271 20.9201 29.1253 19.7016 29.5366 18.3434C29.7035 17.7923 29.985 17.2661 30.2518 16.8055C30.3594 16.6197 30.4615 16.4493 30.5596 16.2856C30.7261 16.0077 30.8809 15.7494 31.0307 15.4691Z" stroke="#B1B8BD" stroke-width="2"/>
            <path d="M18.6602 8.9707C18.6602 8.9707 18.4478 11.7128 15.6602 11.9922C15.6602 11.9922 18.2119 12.1426 18.6602 14.9707C19.1084 12.1426 21.6602 11.9922 21.6602 11.9922C18.8725 11.7107 18.6602 8.9707 18.6602 8.9707Z" fill="#B1B8BD"/>
            <path d="M25.6602 4.96313C25.6602 4.96313 25.3771 8.6193 21.6602 8.99179C21.6602 8.99179 25.0625 9.19236 25.6602 12.9631C26.2578 9.19236 29.6602 8.99179 29.6602 8.99179C25.9432 8.61643 25.6602 4.96313 25.6602 4.96313Z" fill="#B1B8BD"/>
            </svg>
            )
        },
        { 
            name: '알림', 
            svg:(
            <svg width="45" height="32" viewBox="0 0 45 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7913 20.1365C14.4962 21.2 15.3808 22.1057 16.4844 22.1069L20.6384 22.1118C20.5407 22.3477 20.4868 22.606 20.4868 22.877C20.4868 23.9814 21.3822 24.877 22.4868 24.877C23.5914 24.877 24.4868 23.9814 24.4868 22.877C24.4868 22.6077 24.4336 22.3506 24.337 22.1162L28.4848 22.1208C29.5902 22.1221 30.4804 21.218 30.2207 20.1436C30.0708 19.5237 29.8756 18.9089 29.683 18.3025L29.6824 18.3003C29.433 17.5149 29.1881 16.7439 29.052 15.9951C28.9557 15.4648 28.8472 14.948 28.7269 14.4463C27.8591 12.8284 26.3441 13.2275 26.3441 13.2275C27.7807 12.5769 27.5796 11.0923 27.5195 10.7793C26.8707 9.30737 26.1018 8.13916 25.2561 7.34033C24.4052 6.53662 23.4931 6.12305 22.572 6.12305C21.6509 6.12305 20.7388 6.53662 19.8879 7.34033C19.0369 8.14404 18.2637 9.32202 17.6124 10.8069C16.9611 12.292 16.4444 14.0547 16.092 15.9951C15.9498 16.7773 15.6614 17.5806 15.3677 18.3984C15.162 18.9714 14.9536 19.5515 14.7913 20.1365ZM17.3834 18.7017C17.6302 18.0068 17.9072 17.1921 18.0598 16.3525C18.3901 14.5339 18.867 12.9255 19.444 11.6104C20.0264 10.2825 20.6646 9.35767 21.2611 8.79443C21.8455 8.24243 22.2894 8.12305 22.572 8.12305C22.8546 8.12305 23.2985 8.24243 23.8829 8.79443C24.4794 9.35767 25.1177 10.2825 25.7 11.6104C26.277 12.9255 26.7539 14.5339 27.0843 16.3525C27.2301 17.155 27.4726 17.9456 27.6907 18.6362L27.7775 18.9099C27.9137 19.3394 28.0391 19.7344 28.1474 20.1206L16.8898 20.1077C16.9945 19.7871 17.1122 19.4587 17.2402 19.1023L17.2414 19.0986C17.2874 18.9705 17.3348 18.8384 17.3834 18.7017Z" fill="#B1B8BD"/>
            </svg>
            )
        }
    ]
    const [index,setIndex] = useState(null);

    function navClick(number) {
        setIndex((number));
    }

    return (
        <Navbarwrap>
            <div className="navbar-left" onClick={() => navClick(0)}>
                <div className={`navbar-item ${index === 0 ? "active" : ""}`}>
                    <div>
                        <span>
                            {navItems[0].svg}
                        </span>
                        <span className="navbar-item-txt">{navItems[0].name}</span>
                    </div>
                </div>
            </div>
            <div className="navbar-main">
                <span>
                    <img src={navMain} alt="마이페이지"/>
                </span>
            </div>
            <div className="navbar-right" onClick={() => navClick(1)}>
                <div className={`navbar-item ${index === 1 ? "active" : ""}`}>
                    <div>
                        <span>
                            {navItems[1].svg}
                        </span>
                        <span className="navbar-item-txt">{navItems[1].name}</span>
                    </div>
                </div>
            </div>
        </Navbarwrap>
    )
}

export default Navbar;

const Navbarwrap = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 20;
    max-width: 480px;
    min-width: 280px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.1rem solid var(--n80-color);

    & div:not(.navbar-main) {
        padding: 0.5rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navbar-left {
        background: var(--white);
        border-top-right-radius: 3rem;
        border-top: 0.1rem solid var(--n80-color);
        flex: 1;

        & .navbar-item {
            margin-right: 1.5rem;

            &.active svg path {
                stroke: var(--revu-color);
            }
        }
    }

    .navbar-right {
        border-top-left-radius: 3rem;
        background: var(--white);
        border-top: 0.1rem solid var(--n80-color);
        flex: 1;

        & .navbar-item {
            margin-left: 1.5rem;

            &.active svg path {
                fill: var(--revu-color);
            }
        }
    }

    .navbar-main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: -0.5rem;
    }


    & .navbar-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & div {
            padding: 0.1rem 0.4rem 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 1.2rem;
        }

        &.active .navbar-item-txt {
            color: var(--revu-color);
        }

        &.press div {
            background: var(--n20-color);
        }

    }
    
    .navbar-item-txt {
        margin-top: 0.1rem;
        font-size: var(--font-callout-small-size);
        font-weight: var(--font-callout-small-weight);
        letter-spacing: var(--font-callout-small-letter-spacing);
        color: var(--n100-color);
    }
`

