#### Book Management

### Important Links

- [Backend deployed Link](https://idea-clan-be.vercel.app/) :

```bash
https://idea-clan-be.vercel.app/
```

- [Backend deployed Repo Link](https://github.com/srudhi6383/book-management-system) :

```bash
https://github.com/srudhi6383/book-management-system
```

### **MUTATIONS**

## **TO SIGNUP**
```
mutation {
  signup(username: "username", email: "email@example.com", password: "password") {
    _id
    username
    email
  }
}
```
### **TO LOGIN**

```
mutation {
  loginUser(email: "email@example.com", password: "password") {
    userId
    token
    tokenExpiration
  }
}
```

## **ADD BOOK **

```
mutation {
  addBook(title: "Book Title", author: "Book Author", genre: "Book Genre") {
    _id
    title
    author
    genre
  }
}
```


### **BUY BOOK**

```
mutation{
    buyBook(id:"65f6da9af1af242ed76a9c9f",orderType:"borrow"){
        message,
        success
    }
}
```

### **UPDATE BOOK**

```
mutation {
  updateBook(id: "book-id", title: "New Title", author: "New Author", genre: "New Genre") {
    _id
    title
    author
    genre
  }
}
```

### **DELETE BOOK**

```
mutation {
  deleteBook(id: "book-id") {
    _id
    title
    author
    genre
  }
}
```
