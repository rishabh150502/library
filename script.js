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

const content=document.querySelector('.content');
const bookDiv=document.createElement('div');
const optionDiv=document.createElement('div');
const readButton=document.createElement('button');
const deleteButton=document.createElement('button');
bookDiv.textContent=`\n\tAuthor: \t     ${myLibrary[0].author}
                     \n\tTitle:  \t     ${myLibrary[0].title}
                     \n\tPages:         ${myLibrary[0].pages}
                     \n\tMark as Read:  ${myLibrary[0].markRead}`;
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
