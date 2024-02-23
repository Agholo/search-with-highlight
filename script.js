const content = document.getElementById("content");
const search = document.querySelector("input");

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
];

function draw(books, mark) {
  books.forEach((book) => {
    const block = document.createElement("div");
    block.innerHTML = `<h2>${book.title.replace(
      mark,
      (match) => `<span>${match}</span>`
    )}</h2>
                      <h4>${book.author.replace(
                        mark,
                        (match) => `<span>${match}</span>`
                      )}</h4>`;
    block.classList.add("block");
    content.appendChild(block);
  });
}

function deleteAll() {
  const divs = document.querySelectorAll(".block");
  divs.forEach((div) => div.remove());
}

draw(books);

search.addEventListener("input", () => {
  let searchedText = search.value;
  const filtered = books.filter((book) => {
    return (
      book.title
        .toLocaleLowerCase()
        .includes(searchedText.toLocaleLowerCase()) ||
      book.author.toLocaleLowerCase().includes(searchedText.toLocaleLowerCase())
    );
  });
  searchedText = searchedText.replace(/[.*^${}()+?|[\]\\]/g, "\\$&");
  let pat = new RegExp(`${searchedText}`, "gi");
  deleteAll();
  draw(filtered, pat);
});
