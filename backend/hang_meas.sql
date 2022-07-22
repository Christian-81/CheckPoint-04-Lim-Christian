-- Structure de la table `Category`


CREATE TABLE `hang_meas`.`category` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `label` VARCHAR(150) NOT NULL
);


LOCK TABLES `hang_meas`.`category` WRITE;
INSERT INTO `hang_meas`.`category` (`label`) VALUES
('starter'),
('main_course'),
('dessert'),
('drink');
UNLOCK TABLES;


-- Structure de la table `Product`


CREATE TABLE `hang_meas`.`product` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(150) NOT NULL,
    price INT NOT NULL,
    img VARCHAR(250) NULL,
    alt VARCHAR(150) NULL,
    description VARCHAR(1000) NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES category(id)
) ENGINE=InnoDB;


LOCK TABLES `hang_meas`.`product` WRITE;
INSERT INTO `hang_meas`.`product` (`title`, `price`, `img`, `alt`, `description`, `category_id`) VALUES
('Soupe Pho', '12', 'https://img-3.journaldesfemmes.fr/1COIOVJvU5Eh9oY-ZcOmUvkPNH4=/750x500/smart/71c9a18db45748629b5b6d2596f0a6fb/recipe-jdf/397261.jpg', 'Soupe Pho', 'Classé 20eme dans la liste de 50 meilleurs plats du monde établie en 2017 par CNN, le pho vietnamien est de nouveau chaleureusement salué par les gourmets nationaux et internationaux. Qu’il soit pho au bœuf ou pho au poulet, deux versions classiques, cette soupe savoureuse et parfumée prend une place particulaire dans le cœur des conviés. Figurant parmi 12 meilleurs plats au monde d’après le magazine Huffington Post et présent fois dans les médias étrangers, le pho mérite amplement vedette du patrimoine culinaire vietnamien.', 2),
('Rouleau de printemps', '8', 'https://files.meilleurduchef.com/mdc/photo/recette/rouleaux-printemps/rouleaux-printemps-1200.jpg', 'Rouleau de printemps', 'le rouleau de printemps, également appelé rouleau d’été, occupe quant à lui, une digne place dans le top de 50 meilleurs plats du monde, selon CNN.', 1),
('Vermicelles de riz au porc grillé', '13.90', 'https://misstamkitchenette.com/wp-content/uploads/2013/11/Bun-cha-Hanoi-photo-La-Kitchenette-de-Miss-T%C3%A2m.jpg', 'Vermicelles de riz au porc grillé', 'Ce met affriolant a été inscrit dans le top de 10 meilleures plats de rue publié en 2014 par le magazine National Geographic. L’an précédant, le bun cha a fait un place dans le classement de 25 plats d’été les plus appétissants au monde établi par CNN.', 2),
('Bun bo Hue', '10', 'https://atypikvietnam.com/wp-content/uploads/2022/02/Aper%C3%A7u-du-Bun-Bo-Hue.jpg', 'Bun bo Hue', 'Un autre plat vietnamien étoilé qui a su convaincre le fameux chef Anthony Bourdian est le bun bo Hue. Le délice culinaire emblématique de ville centrale du Vietnam est applaudi dans son émission Parts Unknown en tant que « la meilleure soupe au monde ». Cette soupe colorée et épicée originaire de Hue est connue comme un des meilleurs plats de l’Asie.', 2),
('Banh khot', '11', 'https://foodisafourletterword.com/wp-content/uploads/2020/12/Vietnamese_Crispy_Savory_Shrimp_Pancakes_Recipe_Banh_Khot_side.jpg', 'Banh khot', 'Chouette et croustillante, cette recette populaire des régions du Centre et du Sud fait partie des 35 plats les plus appétissants au monde, selon les experts et visiteurs au festival de la cuisine de rue organisé à Singapour en 2013.', 2),
('Nem', '7', 'https://cuisine.nessma.tv/uploads/7/2021-10/aadf09721bbb010b632e078f0f1d7b9a.jpg', 'Nem', 'Ce plat qui séduit tous les palais vous fait vivre une expérience gustative immanquable au Vietnam. C’est avec le nem ou pâté impérial que le Vietnam a été mis à l’honneur en 2015 par CNN en tant que le pays le plus favori pour la gastronomie.', 1),
('Samla chapek', '14', 'https://authentikvietnam.com/media/ckeditor/top%2010%20plats%20cambodgiens%20samla%20chapek.jpg', 'Samla chapek', 'Cette savoureuse soupe est un plat traditionnel très apprécié des Cambodgiens. Samla chapek est une soupe de nouilles et de porc parfumée au gingembre. Cette soupe se mange à toute heure de la journée, aussi bien au petit déjeuner que lors des deux autres principaux repas. La province de Kratie est réputée à travers le pays pour la saveur particulière de la soupe samla chapek dû à la qualité de sa viande de porc.', 2),
('Phlea sach ko', '12', 'https://authentikvietnam.com/media/ckeditor/top%2010%20plats%20cambodge%20phlea%20sach%20ko.jpg', 'Phlea sach ko', 'Cette délicieuse salade de bœuf khmère s’apparente au laap laotien. Une salade pleine de fraîcheur gentillement épicée composée de bœuf émincé aux aromates, d’herbes fraîches et de crudités notamment de pousses de soja et de haricots croquants. La sauce est riche en parfums et en saveurs complexes. L’originalité de cette salade cambodgienne repose aussi sur les grains de riz grillés puis réduits en poudre que l’on verse sur la salade.', 1),
('Samlar kako', '13', 'https://i.ytimg.com/vi/DoA-HBCM4-k/maxresdefault.jpg', 'Samlar kako', 'Voilà un beau et savoureux plat traditionnel qui ne manquera pas d’éveiller vos papilles. Cette succulente soupe très peut se préparer de diverses façons selon les régions et les familles, mais la base reste toujours la même. La soupe samlar kako à base de pâte de curry épicée et se compose de papaye verte, de petites aubergines, de potiron, de haricots, de légumes en feuilles, d’épinards et de riz grillé, puis pillé. On ajoute ensuite, au choix, de la viande de porc, ou du poisson.', 2),
('Salade papaye verte', '8', 'https://www.unileverfoodsolutions.be/dam/global-ufs/mcos/BENEFRA/calcmenu/recipes/BE-recipes/general/groene-papaya-salade-met-groene-boontjes-en-citroen/main-header.jpg', 'Salade papaye verte', 'Bok nhong est une salade épicée à base de papaye non mûre et râpée. Ce plat est une combinaison parfaite de quatre principaux goûts de la cuisine locale: le citron vert aigre, le piment fort, la sauce de poisson savoureuse et la douceur ajoutée par le sucre de palme.', 1),
('Amok à la cambodgienne', '9', 'https://www.francisbatt.com/ressources/recettes/zoom_amok-a-la-cambodgienne-cafe-dish-meal-food-produce-fish-698246-pxherecom__1_.jpg', 'Amok à la cambodgienne', 'L’Amok Trey est l’un des plats nationaux du Cambodge. Ce plat savoureux cuit à la vapeur dans une feuille de bananier est à base de poisson et lait de coco. Une recette au parfum unique qui est à tester absolument !', 2),
('Lok Lak', '10', 'https://youcookcuisine.com/wp-content/uploads/2018/05/loklak1-400x400.jpg', 'Lok Lak', 'Emblématique de la cuisine cambodgienne, le lok lak est un plat très apprécié par les occidentaux. Cette recette est à base de bœuf sauté dans une marinade. Elle est accompagnée de tomates fraîches, de rondelles de concombre et de riz nature.', 2),
('Bangkea cheamuoy saml krahm', '15', 'https://img.over-blog-kiwi.com/1/02/97/00/20190411/ob_79f212_p1010460.JPG', 'Bangkea cheamuoy saml krahm', 'Voici un curry rouge de crevettes. Au Cambodge, les recettes varient en fonction des ingrédients que l’on a sous la main. On peut utiliser des crevettes, comme du poisson ou de la viande. Le principal est qu’il y ait du goût et des saveurs !', 2),
('Perles de coco, la recette cambodgienne', '6', 'https://www.atelierdeschefs.com/media/recette-d23298-perles-de-coco-au-beurre-de-cacahuetes.jpg', 'Perles de coco, la recette cambodgienne', 'Qui ne connait pas ce fameux dessert que l’on retrouve  à peu près dans tous les restaurants asiatiques. Voici la recette des perles de coco pour une vingtaine de boule de coco.', 3),
('Nhom Chakachan', '5', 'https://www.cuisine-du-cambodge.com/wp-content/uploads/2017/10/Nhom-Chakachan-768x576.jpg', 'Nhom Chakachan', 'Recette de gâteau cambodgien Nhom Chakachan Gâteau cambodgien à déguster au goûter ou comme dessert après manger ! Une gourmandise khmère par excellence.', 3),
('Tapioca façon khmer', '7', 'https://www.atelierdeschefs.com/media/recette-e11035-perles-de-tapioca-au-lait-de-coco-et-fruits-exotiques.jpg', 'Tapioca façon khmer', 'Les perles de tapioca au lait de coco Nhom Krob Totim est un dessert cambodgien mélangeant la douceur du coco sucré et l’onctuosité des perles de tapioca. A la fin de votre repas ou à tous moments de la journée, ce dessert cambodgien se déguste frais.', 3),
('Flan cambodgien', '6', 'https://www.kilometre-0.fr/wp-content/uploads/2019/01/images20181028Cuisine_mart640.jpg', 'Flan cambodgien', 'Flan cambodgien à déguster sans modération Dans la jeunesse, ma mère nous faisait régulièrement ce flan cambodgien (ou pas), on adore ça ! en voici la recette.', 3),
('Beignets de banane', '7', 'https://img.mesrecettesfaciles.fr/wp-content/uploads/2018/02/beignetbanane-1000x500.jpg', 'Beignets de banane', 'Les beignets de banane pour s’initier doucement à la Street Food du Cambodge Les cambodgiens sont des grignoteurs, ils grignotent tout le long de la journée. Si vous souhaitez vous initier à la Street food du Cambodge, vous pouvez commencer par goûter les beignets de banane frits.', 3),
('Gâteau khmer au manioc Nôm Bak Bin', '6', 'https://i.ytimg.com/vi/JqVVEuXj2Fw/maxresdefault.jpg', 'Gâteau khmer au manioc Nôm Bak Bin', 'L’onctuosité du coco et du manioc Nôm Bak Bin est un gâteau à base de manioc, il mélange les propriétés du manioc et l’onctuosité du coco. En voici la recette cambodgienne. C’est un réel délice !', 3),
('Riz de coco et taro', '6', 'https://www.tang-freres.fr/wp-content/uploads/recettes/thailande/Buo-Loi-780x380.jpg', 'Riz de coco et taro', 'Prononcé Bay Damnaep Khmao Kh’tih Daung Trav, un dessert de riz à base de lait de coco et de taro.', 3),
('Boules de sésame', '5', 'https://www.cuisine-du-cambodge.com/wp-content/uploads/2017/10/boulle-sesame-nom-Kroch-e1516286003309.jpg', 'Boules de sésame', 'Nhom Kroch est un gâteau cambodgien pouvant faire office de dessert ou tout simplement de friandises...', 3),
('Bière Angkor', '5', '', 'Bière Angkor', '', 4),
('Thé glaçé', '5', '', 'Thé glaçé', '', 4),
('Coca Cola', '6', '', 'Coca Cola', '', 4),
('Soussa', '5', 'https://www.gingerpixel.fr/wp-content/uploads/2012/07/xung-xa-hot-luu-feat-1170x650.jpg', '', '', 4),
('Eau minérale', '5', '', 'Soussa', '', 4),
('Vin khmer', '19', '', 'Vin khmer', '', 4),
('Milk Shake', '7', '', 'Milk Shake', '', 4),
('Soda durian', '6', '', 'Soda durian', '', 4);
UNLOCK TABLES;


-- Structure de la table `Menu_of_the_day`


CREATE TABLE `hang_meas`.`menu_of_the_day` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    label VARCHAR(150) NOT NULL,
    price_menu INT NOT NULL,
    starter_id INT,
    main_course_id INT,
    dessert_id INT,
    drink_id INT,
    FOREIGN KEY (starter_id) REFERENCES product(id),
    FOREIGN KEY (main_course_id) REFERENCES product(id),
    FOREIGN KEY (dessert_id) REFERENCES product(id),
    FOREIGN KEY (drink_id) REFERENCES product(id)
) ENGINE=InnoDB;


LOCK TABLES `hang_meas`.`menu_of_the_day` WRITE;
INSERT INTO `hang_meas`.`menu_of_the_day` (`label`, `price_menu`, `starter_id`, `main_course_id`, `dessert_id`, `drink_id`) VALUES
('Menu du jour', 19, 10, 1, 17, 25);
UNLOCK TABLES;
