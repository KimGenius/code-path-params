# code-path-params (이름이 이상하다)

## intro
50번의 도전 끝에(사실 Hosy의 한마디로 모든게 끝나버린) 성공(?)한 gitbook plugin 입니다.

## What is code-path-params?
Gitbook 을 이용하여 API 문서를 작성할 때에 Path Parameter를 표현하기 어려웠습니다.
그런데 [구글](https://developers.google.com/gmail/api/v1/reference/users/drafts/create)은 잘 표현했더군요
그래서 만들었습니다.

## How to use?
`
```
METHOD URL{Path-Parameter-Name}
```
`

ex)

`
```
POST http://genius.genie.ggg/abc/{userId}/{HelloCount}
```
`
