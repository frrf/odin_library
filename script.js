let myLibrary = [
  {author: "Skidrow",
  pages: "100",
  read: false,
  title: "How to Hack"}
];

function Book(author,title,pages,read) {
  this.author = author,
  this.title = title,
  this.pages = pages,
  this.read = read
}


function addBookToLibrary(event) {
  const form = document.querySelectorAll("#new_book"); 
  form.forEach((field)=> {
    if (field.author.value !== '' && field.title.value !== '' && field.pages.value !== '') {
      const new_book = new Book(field.author.value,field.title.value,field.pages.value,field.read.checked)
      myLibrary.push(new_book)
      console.log(new_book)
      field.author.value = ''
      field.title.value = ''
      field.pages.value = ''
      field.read.checked = false
    }
  })
}

function showLibrary() {
  const book_display = document.querySelector("#book_display")
  book_display.innerHTML = ''

  let table = document.createElement("table")
  let table_header = document.createElement("thead")
  let table_header_row = document.createElement("tr")
  let author_header = document.createElement("th")
  author_header.scope = "col"
  author_header.appendChild(document.createTextNode("Author"))
  let title_header = document.createElement("th") 
  title_header.scope = "col"
  title_header.appendChild(document.createTextNode("Title"))
  let pages_header = document.createElement("th") 
  pages_header.scope = "col"
  pages_header.appendChild(document.createTextNode("Pages"))
  let read_header = document.createElement("th") 
  read_header.scope = "col"
  read_header.appendChild(document.createTextNode("Read"))

  table_header_row.appendChild(author_header) 
  table_header_row.appendChild(title_header) 
  table_header_row.appendChild(pages_header) 
  table_header_row.appendChild(read_header)
  table_header.appendChild(table_header_row)
  table.appendChild(table_header)

  myLibrary.length === 0 
  ? book_display.textContent= 'empty library'
  : myLibrary.forEach((book,key)=> {
    console.log('key',key,book)
      let book_row = document.createElement("tr")
      book_row.dataset.id = key
      let book_data_a = document.createElement("td")
      let book_data_t = document.createElement("td")
      let book_data_p = document.createElement("td")
      let book_data_r = document.createElement("td")

      let book_author = document.createTextNode(book.author)
      book_data_a.appendChild(book_author)
      book_row.appendChild(book_data_a)

      let book_title = document.createTextNode(book.title)
      book_data_t.appendChild(book_title)
      book_row.appendChild(book_data_t)

      let book_pages = document.createTextNode(book.pages)
      book_data_p.appendChild(book_pages)
      book_row.appendChild(book_data_p)

      let book_read = document.createTextNode(book.read)
      book_data_r.appendChild(book_read)
      book_row.appendChild(book_data_r)

      let read_book = document.createElement("button")
      read_book.setAttribute( "onClick", "read_book("+key+");" )
      let read_text = document.createTextNode("Read")
      read_book.appendChild(read_text)
      book_row.appendChild(read_book)

      let delete_book = document.createElement("button")
      delete_book.setAttribute( "onClick", "delete_book("+key+");" )
      let delete_text = document.createTextNode("Delete")
      delete_book.appendChild(delete_text)
      book_row.appendChild(delete_book)

      // console.log('show library')
      table.appendChild(book_row)
    })
    book_display.appendChild(table)
}

function delete_book(data) {
  console.log('delete click','data',data)
  myLibrary = myLibrary.filter(book => myLibrary.indexOf(book) !== data)
  showLibrary();
}

function read_book(data) {
  console.log('read click','data',data)
  myLibrary[data].read = !myLibrary[data].read
  showLibrary();
}