"use strict";

window.onload = () => {
  const library = [];
  let addButton = document.querySelector("h1 img");
  let addBook = document.querySelector("form input:last-of-type");
  let display = document.getElementById("display");
  let form = document.querySelector("form");
  let params = document.querySelectorAll(" form input");

  function Book(author, title, image, pages, readed) {
    (this.Author = author),
      (this.Title = title),
      (this.Pages = pages),
      (this.Image = image),
      (this.Readed = readed);
  }

  const template = (book) => {
    let templateOfBook = ` <div class="book"><img src="${book.Image}" alt="Front-Page" width="200" height="250"><h2>Author: ${book.Author} and Title:${book.Title}</h2>
    <p>Number of pages:${book.Pages}. `;
    if (book.Readed)
      templateOfBook += `<input type="checkbox" value="yes" checked ></input>`;
    else templateOfBook += `<input type="checkbox" value="no"></input>`;
    templateOfBook += `<img class="seen"  src="https://www.freepnglogos.com/uploads/tick-png/image-tick-mark-icon-png-good-luck-charlie-wiki-2.png" alt="Readed" width="20" height="20"></img>
    <img class="delete" src="https://img.favpng.com/0/20/2/rubbish-bins-waste-paper-baskets-symbol-computer-icons-sign-png-favpng-pw7TPJt2ZiGv2Stm69Y3TAPDx.jpg" alt="delete" width="20" height="20"></img>`;
    return templateOfBook;
  };

  const showLibrary = () => {
    display.innerHTML = "";
    library.forEach((book) => {
      display.innerHTML += template(book);
    }, false);
    let deleteButtons = document.querySelectorAll(".delete");
    let seenButtons = document.querySelectorAll(".seen");
    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener(
        "click",
        (event) => {
          console.log(deleteButtons[i]);
          library.splice(i, 1);
          showLibrary();
        },
        false
      );

      seenButtons[i].addEventListener(
        "click",
        (event) => {
          if (library[i].Readed) {
            library[i].Readed = false;
          } else {
            library[i].Readed = true;
          }
          showLibrary();
        },
        false
      );
    }
  };
  const addBookLibrary = (book) => {
    library.push(book);
  };

  const paramsOK = () => {
    let semaforo = true;

    params.forEach((param) => {
      if (param.value === "") semaforo = false;
    }, false);
    return semaforo;
  };

  addButton.addEventListener(
    "click",
    (event) => {
      form.classList.toggle("hidden");
      display.classList.toggle("hidden");
    },
    false
  );

  addBook.addEventListener(
    "click",
    (event) => {
      console.log(params[4].checked);
      if (!paramsOK()) return;
      form.classList.toggle("hidden");
      display.classList.toggle("hidden");
      let addedBook = new Book(
        params[0].value,
        params[1].value,
        params[2].value,
        params[3].value,
        params[4].checked
      );

      addBookLibrary(addedBook);
      showLibrary();
    },
    false
  );
};
