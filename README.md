<h2 style="display: flex; align-items: center;">
  <img src="https://github.com/user-attachments/assets/3ff3f65c-92fd-4ab9-b8bb-bb838d7f5613" width="95" height="60" style="margin-right: 20px;" />
  PikNik : Your One Stop Fashion Brand
</h2>


##  Overview
PikNik is a stylish and user-friendly online shopping platform that offers a wide range of fashion and lifestyle products. From trendy men’s and women’s clothing to elegant home furnishing items, PikNik provides customers with a seamless browsing and shopping experience. Users can create accounts, explore different product categories, add items to their cart, and view a personalized dashboard. With its clean design and intuitive navigation, PikNik is designed to make online shopping simple, enjoyable, and convenient for everyone.


The PikNik is built using Go, following a modular architecture for scalability. Core functionality resides in the handlers package, handling user sessions, authentication, and template rendering. Routes like IndexHandler, MenHandler, and CartHandler render HTML templates, while JWTs secure user authentication and session management. The project uses MySQL for user credential storage and bcrypt for password hashing. The main.go file initializes the server, sets up the database connection, and defines routes with CORS and JWT middleware for secure interactions.


## **Tech stack**
- **Backend**: GO Lang
- **Frontend**: HTML, CSS
- **Database**: Mysql


## **File Structure**  
```
C:.
├── go.mod
├── go.sum
├── main.go
│
├── .vscode
│   └── settings.json
│
├── database
│   └── db.go
│
├── handlers
│   ├── carthandler.go
│   └── handlers.go
│
├── resources
│   └── image
│       ├── favicon.png
│       └── myntra-removebg-preview.png
│
└── templates
    ├── cart.html
    ├── dashboard.html
    ├── home_furnishing.html
    ├── index.html
    ├── login.html
    ├── mens.html
    ├── signup.html
    ├── wishlist.html
    └── women.html
```

  
## **User Interaction**

![WhatsApp Image 2025-05-12 at 16 47 25_a61a3bff](https://github.com/user-attachments/assets/43c48d82-e857-4624-84e0-ad8bb003e163)
![WhatsApp Image 2025-05-12 at 16 46 31_cafe78bf](https://github.com/user-attachments/assets/28de791d-c1b6-49ee-ba80-870f97289e3f)
![WhatsApp Image 2025-05-12 at 16 45 47_eab07ce9](https://github.com/user-attachments/assets/1b86bb70-1ab0-4063-9613-335f6db625c0)


## **Conclusion**
In conclusion, PikNik offers a sleek and user-friendly online shopping experience, providing a wide selection of fashion and lifestyle products with a seamless browsing interface. Its intuitive design makes shopping both simple and enjoyable, allowing users to easily explore, add items to their cart, and manage their personal accounts. Built using Go, PikNik follows a modular and scalable architecture, ensuring efficient user session handling, authentication, and secure interactions. With MySQL for user credential storage and JWT for secure session management, PikNik delivers both functionality and security, making it a robust and reliable eCommerce platform.


## 📢 Connect with Us  

- [Piyush Singh](https://www.linkedin.com/in/piyushhh-singhh/)  
- [Nikita Babbar](https://www.linkedin.com/in/nikita-babbar-b0291026a/)


