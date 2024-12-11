<h1> 리뷰클릭 공통 컴포넌트 작업(React) </h1>


<h3>🔧 중점 둔 사항 🔧 <h3>
<p>- map() 함수를 이용해 데이터 배열로 항목관리하여 반복되는 코드 제거</p>
<p>- react hook(useState)를 이용한 상태별 컴포넌트화</p>
<p>- 상태별 아이콘은 background-image로 넣어 제어</p>
<p>- 페이지 렌더링 시간 단축을 위해 태그 및 클래스 최소화, 올바른 css 선언순서</p>
<p>- 유지보수를 위해 공통 폰트와 색상은 css 변수로 정의</p>
<p>- 반응형 작업을 위한 rem사용, html의 font-size 속성에 clamp() 함수를 이용하여 미디어 쿼리 없이 동적 크기 조정 </p>


<ul>선언 블록 내 속성 권장 순서</ul>
<li>1. **위치 및 표시** 관련 속성: </li>
<li>ex) display, position, top, right, bottom...</li>
<li>2. **사이즈** 관련 속성: </li>
<li>ex) width, height, min-width, min-height</li>
<li>3. **박스 모델** 관련 속성: </li>
<li>ex) margin, padding, border, box-sizing</li>
<li>4. **타입 및 텍스트** 관련 속성: </li>
<li>ex) font, text-align, color, line-height, letter-spacing</li>
<li>5. **배경** 관련 속성:  </li>
<li>ex) background, background-size, background-position, background-image</li>
<li>6. **그리드 및 플렉스** 관련 속성: </li>
<li>ex) display: grid, display: flex, flex-direction </li>
<li>7. **상태 관련 속성** (hover, focus 등):</li>
<li>ex) :hover: :focus, :active: flex, flex-direction </li>




<h3>🔧 작업내역 🔧 <h3>
<p>footer</p> 
<ul>selectbox</ul>
<li>- 리엑트 훅(useState)이용해서 클릭시 드롭다운, 아이콘 변화</li>
<ul>titlebar</ul>
<li>- 캠페인 공통 header => CampaignTitleBar.jsx</li>
<li>- 기본 공통 header => DefaultTitleBar.jsx</li>
<p>tooltip</p> 
<ul>chip</ul>
<li>- 여러개 li태그 사용 => map() 함수로 데이터 배열로 관리</li>
<li>- 리엑트 훅(useState)이용해서 클릭시 on클래스 add되어 스타일 변경</li>







