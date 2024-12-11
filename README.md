<h1> 리뷰클릭 공통 컴포넌트 작업(React) </h1>


🔧 중점 둔 사항 🔧 
- map() 함수를 이용해 데이터 배열로 항목관리하여 반복되는 코드 제거
- react hook(useState)를 이용한 상태별 컴포넌트화
- 상태별 아이콘은 background-image로 넣어 제어
- 페이지 렌더링 시간 단축을 위해 태그 및 클래스 최소화, 올바른 css 선언순서

<h2>선언 블록 내 속성 권장 순서</h2>
1. **위치 및 표시** 관련 속성: 
ex) display, position, top, right, bottom...
2. **사이즈** 관련 속성: 
ex) width, height, min-width, min-height
3. **박스 모델** 관련 속성: 
ex) margin, padding, border, box-sizing
4. **타입 및 텍스트** 관련 속성: 
ex) font, text-align, color, line-height, letter-spacing
5. **배경** 관련 속성:  
ex) background, background-size, background-position, background-image
6. **그리드 및 플렉스** 관련 속성: 
ex) display: grid, display: flex, flex-direction 
7. **상태 관련 속성** (hover, focus 등):
ex) :hover: :focus, :active: flex, flex-direction 



🔧 
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







