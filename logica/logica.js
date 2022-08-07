let firstText = document.getElementById("text1");
let secondText = document.getElementById("text2");
let thirdText = document.getElementById("text3");


firstText.addEventListener('click', () => {firstText.classList.add("text1NEW")
secondText.classList.remove("text2NEW")
thirdText.classList.remove("text3NEW")
});
secondText.addEventListener('click', () => {secondText.classList.add("text2NEW")
firstText.classList.remove("text1NEW")
thirdText.classList.remove("text3NEW")
});
thirdText.addEventListener('click', () => {thirdText.classList.add("text3NEW")
firstText.classList.remove("text1NEW")
secondText.classList.remove("text2NEW")
});


