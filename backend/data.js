import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name:'Parthi',
            email:'gowthamiparthi19@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true

        },
        {
            name:'Ajay',
            email:'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
    products:[
        {
            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'Addidas Fit Shirt',
            category:'Shirts',
            image:'/images/p2.jpg',
            price:120,
            countInStock:20,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'Locoste free Shirt',
            category:'Shirts',
            image:'/images/p3.jpg',
            price:120,
            countInStock:0,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'Nike Slim Pants',
            category:'Pants',
            image:'/images/p4.jpg',
            price: 80,
            countInStock:5,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        { 
            name:'Puma Slim Pant',
            category:'Pants',
            image:'/images/p5.jpg',
            price:75,
            countInStock:10,
            brand:'Puma',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        { 
            name:'Addidas Fit Pant',
            category:'Pants',
            image:'/images/p6.jpg',
            price:55,
            countInStock:12,
            brand:'Nike',
            rating:4.5,
            numReviews:15,
            description:'high quality product',
        }
    ]
}

export default data;