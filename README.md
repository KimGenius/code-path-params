# code-path-params (이름이 이상하다)

Gitbook 을 이용하여 API 문서를 작성할 때에 Path Parameter를 표현하기 어려웠습니다.<br/>
그런데 [구글](https://developers.google.com/gmail/api/v1/reference/users/drafts/create)은 잘 표현했더군요<br/><br/>
이렇게 : <br/>![alt text](https://github.com/KimGenius/code-path-params/blob/master/imgs/google_screenshot.png)<br/>
그래서 만들었습니다.

### Installation

`book.json` 파일에 플러그인을 추가합니다.

```js
{
    "plugins": ["code-path-params"]
}
```

### Usage
Parameter로 쓸 문자를 {} 안에 넣습니다.
```md
POST http://genius.genie.ggg/abc/{userId}/{HelloCount}/hey
```

![alt text](https://github.com/KimGenius/code-path-params/blob/master/imgs/ex_screenshot.png)

### Result
<pre><span>POST http://genius.genie.ggg/abc/<var><span style="color:#ec407a;font-weight:bold;font-style:italic;">{userId}</span></var>/<var><span style="color:#ec407a;font-weight:bold;font-style:italic;">{HelloCount}</span></var>/hey</span></pre>

![alt text](https://github.com/KimGenius/code-path-params/blob/master/imgs/result_screenshot.png)
