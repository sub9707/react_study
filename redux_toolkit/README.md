# Redux-Redux_toolkit 학습
## 툴킷 사용 목적
- 복잡한 Redux Store 구성 해소
- Redux의 패키지 추가 문제 해결
- Redux 상용구 코드 문제 해결

### 설치
```js
// Redux + Plain JS template
npx create-react-app [프로젝트 명] --template redux

// Redux + TypeScript template
npx create-react-app [프로젝트 명] --template redux-typescript
```

### 포함 API 목록

- ``Configure()``: Redux의 CreateStore 단순화 + 업그레이드 버전.<br />
Slice된 Reducer를 알아서 합쳐주고 제공되는 모든 Redux 미들웨어를 추가해준다.

- ``createReducer()``: switch문을 작성하는 대신 case reducer로 케이스에 맞는 함수를 매칭할 수 있다.
- ``createAction()``: 주어진 액션 유형 문자열에 대한 액션 생성자 함수를 생성한다. 함수 자체가 toString()임.
- ``createSlice()``: Reducer 함수의 객체, 슬라이스 이름, 초기 상태 값을 입력받아 슬라이스 Reducer를 자동으로 만들어줌.

## 기본 사용
 리덕스의 원리를 살펴보자. 앱 전체의 전역 상태는 단일 저장소 개체 트리에 저장된다. 이 상태 트리를 건드리기 위해선, 발생한 일을 묘사하는 action 개체를 만들어 보내는 방식을 써야한다.
  보내온 이전 상태와 작업을 통해 상태를 업데이트 시키는 방식이다.<br />
  예제를 보자.<br /><br />
  
*Redux 대충 돌아가는 방식*
```js
import { createStore } from 'redux'

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}
// 상태를 가진 Redux 스토어를 생성함
let store = createStore(counterReducer)
```
- Reducer는 무슨 변화가 생겼는지에 대한 현재 상태 value와 action을 가지며, 그에 대응하는 새로운 상태를 반환하는 함수이다.<br />
``(state, action) => newState`` 대충 이런 식.<br />
- Redux 상태는 반드시 순수 JS 객체와 배열, 기본 자료형을 갖고 있어야함. (기본은 객체형)
<br />
- 상태 변화에 따라 UI에 변화를 주고 싶다면 subscribe()를 사용하면 된다.(보통은 view 바인딩 라이브러리 사용) <br />

```js
store.subscribe(() => console.log(store.getState())) 
```
<br />
- 내부 상태에 변화를 주고 싶다면, action을 dispatch하는 방식으로 접근해야한다.
<br />

```js
store.dispatch({ type: 'counter/incremented' })
```

*이제 Redux toolkit 돌아가는 방식임(중요)*

```js
import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

store.dispatch(incremented())
```

