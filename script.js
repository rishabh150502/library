console.log('hi');
let myLibrary=[
    {author:"J K Rowling",
     title:"Harry Potter",
     pages:395,
     markRead:true,}
    ];

function book(author,title,pages,markRead){
    this.author=author;
    this.title=title;
    this.pages=pages;
    this.markRead=markRead;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

//Book info
const content=document.querySelector('.content');
function displayBooks(){
    for(let i=0;i<myLibrary.length;i++){
const bookDiv=document.createElement('div');
const optionDiv=document.createElement('div');
const readButton=document.createElement('button');
const deleteButton=document.createElement('button');
bookDiv.textContent=`\n\tAuthor: \t     ${myLibrary[i].author}
                     \n\tTitle:  \t     ${myLibrary[i].title}
                     \n\tPages:         ${myLibrary[i].pages}
                     \n\tMark as Read:  ${myLibrary[i].markRead}`;
readButton.textContent=`Marked as Read`;
deleteButton.textContent=`Delete`;
readButton.classList.add('read');
deleteButton.classList.add('delete');
optionDiv.classList.add('book-options')
bookDiv.classList.add('book');
optionDiv.append(readButton);
optionDiv.append(deleteButton);
bookDiv.append(optionDiv);
content.append(bookDiv);
    }
}

//form 
const form=document.querySelector('.form');

const addBookButton=document.querySelector('.add');

addBookButton.addEventListener('click',function(){
    if(addBookButton.textContent==='Add Book'){
form.innerHTML=`<div>
<label for="bookName">Book Title</label>
<input type="text" id="bookName" name="bookName" required>
</div>
<div>
<label for="authorName">Author Name</label>
<input type="text" id="authorName" name="authorName" required>
</div>
<div>
<label for="pages">Number Of Pages</label>
<input type="number" id="pages" name="pages" required>
</div>
<div>
<input type="checkbox" id="markRead" name="markRead" value="Read">
<label for="markRead"> Mark book as read</label>
</div>
<button class="addBook" type="submit" form="form1" value="Submit">Add</button>`;
addBookButton.textContent="Cancel"
    }
    else{
addBookButton.textContent="Add Book";
form.innerHTML="";
    }
});

//adding book info in array
const btn=document.querySelector('.addBook');

form.addEventListener('submit',()=>{
    const bookName=document.querySelector('#bookName');
    const authorName=document.querySelector('#authorName');
    const pages=document.querySelector('#pages');
    const markRead=document.querySelector('#markRead');
    addBookToLibrary(new book(authorName.value,bookName.value,pages.value,markRead.checked));
    displayBooks();
    console.log(bookName.value);
    console.log(authorName.value);
    console.log(pages.value);
    console.log(markRead.checked);
});