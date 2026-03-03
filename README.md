# prueba_desempe-o_db




WITH ins_users AS (
    INSERT INTO juan_lopez.users 
        (customer_name, customer_email, customer_address, customer_phone)
    SELECT 
        t.customer_name,
        t.customer_email,
        t.customer_address,
        t.customer_phone
    FROM juan_lopez.test t
    ON CONFLICT (customer_email) DO NOTHING
    RETURNING id_user
),

ins_category AS (
    INSERT INTO juan_lopez.category (name_category)
    SELECT DISTINCT
        t.product_category
    FROM juan_lopez.test t
    ON CONFLICT (name_category) DO NOTHING
    RETURNING id_category,
),

ins_supplier AS (
    INSERT INTO juan_lopez.supplier (supplier_name, supplier_email, ins_category)
    SELECT DISTINCT
        t.supplier_name,
        t.supplier_email
    FROM juan_lopez.test t
    ON CONFLICT (supplier_email) DO NOTHING
    RETURNING id_supplier
),

ins_product AS (
    INSERT INTO juan_lopez.product
        (product_sku, product_name, unit_price, ins_supplier)
    SELECT DISTINCT
        t.product_sku,
        t.product_name,
        t.unit_price,
        s.id_supplier
    FROM juan_lopez.test t
    JOIN juan_lopez.category c 
        ON c.name_category = t.product_category
    JOIN juan_lopez.supplier s 
        ON s.supplier_email = t.supplier_email
    ON CONFLICT (product_sku) DO NOTHING
    RETURNING id_product, product_sku
),

INSERT INTO juan_lopez.transaction
    (transaction_number, total_line_value, quantity, id_user, id_product)
SELECT
    t.transaction_id,
    t.total_line_value,
    t.quantity,
    u.id_user,
    p.id_product
FROM juan_lopez.test t
JOIN juan_lopez.users u 
    ON u.customer_email = t.customer_email
JOIN juan_lopez.product p 
    ON p.product_sku = t.product_sku
ON CONFLICT (transaction_number) DO NOTHING;

