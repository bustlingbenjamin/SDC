-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
DROP DATABASE IF EXISTS targets;

-- CREATE YOUR DATABASE
CREATE DATABASE targets;

\c targets;

DROP TABLE IF EXISTS products;
-- CREATE YOUR TABLES
-- CREATE TABLE products (
-- id serial,
-- name text,
-- product_number integer,
-- account text,
-- rating integer,
-- comment text,
-- image text
-- );

-- -- ADD RECORDS TO YOUR TABLE
-- INSERT INTO products( name, product_number, account, rating, comment, image) VALUES ('Hammacher Schlemmer Lamp', 10, 'sltwtota1995', 4, 'I liked it but little bit pricy in my opinion.',  'https://target.scene7.com/is/image/Target/GUEST_a338d827-65e2-4307-82f0-a1509de86af0?wid=125&fmt=pjpeg');
-- INSERT INTO products( name, product_number, account, rating, comment, image) VALUES ('Valentino White Shirt', 11, 'adios2020', 5, 'I love it.', 'https://target.scene7.com/is/image/Target/GUEST_3ea9346a-214b-46fa-8833-9466f7b6e834?fmt=webp&wid=700&qlt=80');
-- INSERT INTO products( name, product_number, account, rating, comment, image) VALUES ('Reinast Luxury Toothbrush', 12, 'ola1993', 5, 'I like how it feels on my teeth and gums.', 'https://smedia.webcollage.net/rwvfp/wc/cp/1547044661342_1b4cb3b6-9bd2-43b9-817e-fdb51d8d84f4/module/colgatethreesixty/_cp/products/1544650829979/tab-29c6775f-a485-4697-b914-af2ed8b6a627/48fc59c1-a01d-4d82-91c1-4f828fc0f291.jpg.w1920.jpg');
-- INSERT INTO products( name, product_number, account, rating, comment, image) VALUES ('Halo Edition Xbox', 13, 'Kareem', 5, 'Great system, it was very easy to setup and transfer my old data from old system.', 'https://i.pcmag.com/imagery/reviews/01IC0Vsz5N7nWcYIr69Ri4H-4.1569481393.fit_scale.size_1028x578.jpg');
-- INSERT INTO products( name, product_number, account, rating, comment, image) VALUES ('24k Gold PS5', 14, 'Draven', 5, 'I cannot wait to get this', 'https://i.pcmag.com/imagery/articles/03DipZNkSAmvNgUZxwrjIkg-7.fit_scale.size_1050x591.v1591972419.jpg');
-- INSERT INTO products( name, product_number, account, rating, comment, image) VALUES ('King Scorpion 360 XXX 720 Wave Brush', 15, 'shouta', 4, 'This a great brush for the price.', 'https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/AB/F4/cf30fd23-d705-478b-8d4d-4ea8cf4673fb.jpeg');
-- INSERT INTO products( name, product_number, account, rating, comment, image) VALUES ('Cantu Curling Cream', 16, 'Living', 5, 'Love the smell of this hair cream and how soft it leaves my hair. It is not sticky and easy to apply.', 'https://target.scene7.com/is/image/Target/GUEST_e42cd755-75d0-4538-ab32-42bbac212606?wid=125&fmt=pjpeg');
-- INSERT INTO products( name, product_number, account, rating, comment, image) VALUES ('Luffy Zippo Lighter', 17, 'funkyKS', 5, 'Good lighter. It does what it is supposed to do.', 'https://www.grindworx.com/imgs/shop-by-brand/all-zippo-lighters/Zippo-Lighter-Made-in-USA-flag-high-polished-chrome-BHQ-70920-er-large.jpg' );
-- INSERT INTO products( name, product_number, account, rating, comment, image) VALUES ('Wooden Apple Keyboard', 18, 'tcarlyon21', 4, 'It feels very premium. Comfortable and quick to type on, durable build quality, and long lasting battery. The price is a bit too steep though, and there is no reason why the space gray should be $20 more expensive than the silver keyboard.', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MLA22LL?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1496944005839' );
-- INSERT INTO products( name, product_number, account, rating, comment, image) VALUES ('AA Energizer Batteries', 19, 'Henry', 5, 'Good quality batteries.', 'https://www.staples-3p.com/s7/is/image/Staples/sp90224429_sc7?wid=700&hei=700');

DROP TABLE IF EXISTS poop;

CREATE TABLE poop  (
    id INTEGER PRIMARY KEY
);

COPY poop 
FROM '/Users/badboybenji/Desktop/MCSP05-Work/Ben_SDC/users.csv'
DELIMITER ','
CSV HEADER;

-- -c \copy poop                                                                                                                                       
-- FROM 
-- DELIMITER ','
-- CSV HEADER;    