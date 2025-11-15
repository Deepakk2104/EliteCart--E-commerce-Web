# **EliteCart — E-Commerce Web Application**

A modern, scalable, and fully-functional **e-commerce web application** built with **React (Vite)**, **Redux**, **Firebase**, and **Stripe pay**.  
Designed for speed, reliability, and a smooth shopping experience — includes a complete **Admin Dashboard** for product & order management.

---

## **Tech Stack**

| Category | Technologies |
|----------|-----------------------------|
| **Frontend** | React, Vite |
| **State Management** | Redux |
| **Backend / Database** | Firebase (Auth, Firestore) |
| **Payment Gateway** | Stripe pay |
| **Styling** | Tailwind CSS |
| **Deployment** | Vercel |


---

## **How to Use**

### **For Users**
1. Browse products on the homepage.  
2. Select any product and click **Add to Cart**.  
3. Go to the **Cart** page and click **Pay Now**.  
4. Fill in the required (dummy) details such as name, email, and address.  
5. You will be redirected to the **Stripe pay Test Payment** screen.

#### **Stripe pay Test Payment Instructions**
Since this project uses Stripe pay’s test mode:

- Choose **Card Payment**
- Use the Stripe pay test card:
  ```
  Card Number: 4111 1111 1111 1111
  Expiry: Any future date
  CVV: 123
  ```
- Complete the mock OTP → Payment will show **Success**.

After successful payment, you'll see the confirmation page, and your order will be saved.

---

### **For Admins**
To access the admin dashboard:

- **Email:** `testadmin@gmail.com`
- **Password:** `12345678`

Logging in with these credentials gives full access to the **Admin Dashboard**, where you can:

- Add new products  
- Edit or delete existing products  
- Manage orders  
- View real-time user & order data  

---


## **Live Demo**

## **Website:** https://elite-cart-e-commerce-web.vercel.app/

## **Features**

### **User Side**

- Authentication (Email / Google)
- Add to cart, manage cart items
- Secure online payments (Razorpay)
- Fully responsive user interface

### **Admin Dashboard**

- Add, edit & delete products
- Manage users and orders
- Realtime product & order updates (via Firebase)
- Lightweight, clean, and fast UI

---

## **Tech Stack**

- **React + Vite**
- **Redux** (Global state management)
- **Firebase** (Auth + Firestore)
- **Razorpay** (Payment gateway)
- **TailwindCSS**

---

## **Screenshots**

Replace with your actual screenshots:

```
![Screenshot - Login](./screenshots/login.png)
![Screenshot - Products](./screenshots/products.png)
![Screenshot - Payment](./screenshots/payment.png)
![Screenshot - Admin Dashboard](./screenshots/admin.png)
```

---

## **Getting Started**

### **1. Clone the repo**

```bash
git clone https://github.com/Deepakk2104/EliteCart--E-commerce-Web.git
cd EliteCart--E-commerce-Web
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Start development server**

```bash
npm run dev
```

---

## **Project Structure**

```
EliteCart--E-commerce-Web/
│
├── public/
├── src/
│   ├── admin/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── firebase/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## **Build for Production**

```bash
npm run build
```

Deploy the `dist/` folder using:

- Vercel
- Firebase Hosting
- Netlify

---

## **Contributing**

Contributions are welcome.

1. Fork the project
2. Create your feature branch
3. Commit changes
4. Open a Pull Request

---

## **License**

Licensed under the **MIT License**.

---

## **Author**

**Developed by [Deepakk2104](https://github.com/Deepakk2104)**
