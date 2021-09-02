# sidedish
그룹프로젝트 #2

-  팀활동: [위키_협업룰/회의록/회고](https://github.com/skawnkk/sidedish/wiki)
-  [🥗김남주_블로그 회고 작성](https://prod.velog.io/@skawnkk/react-%EB%B0%98%EC%B0%AC%EC%87%BC%ED%95%91%EB%AA%B0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8)

- 프로젝트 구조  
![프로젝트 구조](https://user-images.githubusercontent.com/65053955/116790138-c8eedb00-aaed-11eb-844c-f9dac1ce1563.PNG)

- 컴포넌트 트리
![최종트리](https://user-images.githubusercontent.com/65053955/116791272-1706dd00-aaf4-11eb-8b5c-602a360b0613.png)

- API 요청: [API Docs](https://todolist-2.gitbook.io/side-dish/)

- 로그인/로그아웃 기능 구현
<img width="80%" src="https://user-images.githubusercontent.com/65053955/116785846-a9988380-aad6-11eb-8c61-f9227902e5d7.gif"/>

        
- 에러처리 (fetch url경로를 달리하여 잠시 에러설정을 해봄) 
<img width="80%" src="https://user-images.githubusercontent.com/65053955/116788569-5548d000-aae5-11eb-9984-836b02d8e159.gif"/>

- 재고수량관리  
  - 상품 주문시 API PATCH요청하여 DB에 주문수량만큼 차감  
  - 상품재고 갯수가 줄어들며 주문가능수량이 제한됨  
  - 재고 소진 시 '상품준비 중' 버튼 비활성화  
