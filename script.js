console.log('hi');
let temp=[
    // {author:"J K Rowling",
    //  title:"Harry Potter",
    //  pages:395,
    //  markRead:true,}
    ];
let myLibrary=JSON.parse(localStorage.getItem("library"));
if(myLibrary===null){
    myLibrary=temp;
}
function book(author,title,pages,markRead){
    this.author=author;
    this.title=title;
    this.pages=pages;
    this.markRead=markRead;
}
function addBookToLibrary(book){
    myLibrary=JSON.parse(localStorage.getItem("library"));
    if(myLibrary===null){
        myLibrary=temp;
    }
    localStorage.clear();
    myLibrary.push(book);
    localStorage.setItem("library",JSON.stringify(myLibrary));
}

//Book info
const content=document.querySelector('.content');
function displayBooks(){
    if(myLibrary===null||myLibrary.length===0){
        content.textContent="No Records to show";
    }
    for(let i=0;i<myLibrary.length;i++){
const bookDiv=document.createElement('div');
const optionDiv=document.createElement('div');
const readButton=document.createElement('button');
const deleteButton=document.createElement('button');
bookDiv.textContent=`\n  Author:       ${myLibrary[i].author}
                     \n  Title:           ${myLibrary[i].title}
                     \n  Pages:        ${myLibrary[i].pages}
                     \n  Marked as ${myLibrary[i].markRead?'read':'not read'}`;
if(myLibrary[i].markRead){
readButton.textContent=`Mark as not Read`;
}
else{
    readButton.textContent=`Mark as Read`;
    bookDiv.classList.add('markunRead');
}
deleteButton.textContent=`Delete`;
readButton.classList.add('read');
deleteButton.classList.add('delete');
optionDiv.classList.add('book-options')
bookDiv.classList.add('book');
optionDiv.append(readButton);
optionDiv.append(deleteButton);
bookDiv.append(optionDiv);
bookDiv.setAttribute("data-index",i);
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
    console.log(bookName.value);
    console.log(authorName.value);
    console.log(pages.value);
    console.log(markRead.checked);
});



window.onload=function(){
    myLibrary=JSON.parse(localStorage.getItem("library"));
    console.log(myLibrary);
    displayBooks();

        //remove button
        const deleteButton=document.querySelectorAll('.delete');
        console.log(deleteButton);
        for(const i of deleteButton){
            i.addEventListener('click',()=>{
                console.log((Number(i.parentElement.parentElement.dataset.index)));
                myLibrary.splice(Number(i.parentElement.parentElement.dataset.index),1);
                localStorage.clear();
                localStorage.setItem('library',JSON.stringify(myLibrary));
                console.log(i);
                location.reload();
            });
        }

        //read button
        const readButton=document.querySelectorAll('.read');
        console.log(readButton);
        for(const i of readButton){
            i.addEventListener('click',()=>{
                let index=Number(i.parentElement.parentElement.dataset.index);
                console.log((Number(i.parentElement.parentElement.dataset.index)));
                if(myLibrary[index].markRead){
                myLibrary[index].markRead=false;
                }
                else{
                    myLibrary[index].markRead=true;
                }
                localStorage.clear();
                localStorage.setItem('library',JSON.stringify(myLibrary));
                console.log(i);
                location.reload();
            });
        }
};