# prueba_desempe-o_db

This app is a CRUD application that allows us to manipulate database data; it is intuitive, easy to use, and has a clean interface.


Diagrama


// Use DBML to define your database structure



Table users {
  id_users integer [primary key]
  customer_name varchar
  customer_email varchar
  customer_address varchar
  customer_phone varchar
  created_at timestamp
  update_at timestamp
  }
table category {
  id_category int [primary key]
  name_category varchar unique
  created_at timestamp 
  updated_at timestamp
}



table supplier {
  id_supplier int [primary key]
  supplier_name varchar
  supplier_email varchar
  id_category int [ref: > category.id_category]
  created_at timestamp 
  updated_at timestamp
}
table product{
  id_product int [primary key]
  product_sku varchar unique
  product_name varchar unique
  unit_price int
  id_supplier int [ref: > supplier.id_supplier]
  created_at timestamp 
  updated_at timestamp
}




table transaction {
  id_transaction int [primary key]
  transaction_number varchar
  total_line_value int
  quantity int
  id_users int [ref: > users.id_users]
  id_product int [ref: > product.id_product]
  created_at timestamp 
  updated_at timestamp
}

https://dbdiagram.io/d

#how to use

git clone https://github.com/lopezzuluagaj3-collab/prueba_desempe-o_db.git

npm init -y
npm install pg
npm install dotenv
npm install express

DB_HOST=
DB_PORT=
DB_NAME=
DB_USER=
DB_PWD=
APP_PORT=




