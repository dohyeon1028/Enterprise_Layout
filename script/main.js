//한 줄 주석

let btnCall = document.querySelector(".btnCall");
let menuMo = document.querySelector(".menuMo");

btnCall.addEventListener("click",(e) => {
    e.preventDefault();
    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");
})

/* document는 body 태그안에 작성된 모든 내용들을 지칭한다. 즉, 문서를 지칭하는데 body안에 쓴 내용을 의미한다. */

// querySelector는 ()안의 내용을 문서 안에서 찾아준다.
// btnCall을 클릭하면 btnCall과 menuMo의 요소에 toggle이라는 메소드를 사용해서 on 클래스를 없으면 붙여주고, 있으면 데어버리는 이벤트를 부여한다.