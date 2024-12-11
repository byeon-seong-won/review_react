<h1> 리뷰클릭 공통 컴포넌트 작업(React) </h1>


<ul>🔧 중점 둔 사항 🔧 <ul>
<li>- map() 함수를 이용해 데이터 배열로 항목관리하여 반복되는 코드 제거</li>
<li>- react hook(useState)를 이용한 상태별 컴포넌트화</li>
<li>- 상태별 아이콘은 background-image로 넣어 제어</li>
<li>- 페이지 렌더링 시간 단축을 위해 태그 및 클래스 최소화, 올바른 css 선언순서</li>


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




<h4>🔧 작업내역 🔧 <h4>
footer 
selectbox 
- 리엑트 훅(useState)이용해서 클릭시 드롭다운, 아이콘 변화
titlebar
- 캠페인 공통 header => CampaignTitleBar.jsx
- 기본 공통 header => DefaultTitleBar.jsx
tooltip 
chip 
- 여러개 li태그 사용 => map() 함수로 데이터 배열로 관리
- 리엑트 훅(useState)이용해서 클릭시 on클래스 add되어 스타일 변경







