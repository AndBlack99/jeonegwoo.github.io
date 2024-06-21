// 책 목록에 추가
const title = document.querySelector("#title");
const save = document.querySelector("#save");
const bookList = document.querySelector("#CheckList");

save.addEventListener("click", (e) => {
  e.preventDefault();
  const item = document.createElement("li");
  item.innerHTML = `
    ${title.value} - ${author.value} 
    <span class="delButton">삭제</span>
    `;
  bookList.appendChild(item);
  title.value = "";
  author.value = "";

  const delButtons = document.querySelectorAll(".delButton");

  for (let delButton of delButtons) {
    delButton.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  }
});