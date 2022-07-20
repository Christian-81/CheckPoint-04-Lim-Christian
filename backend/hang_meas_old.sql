-- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
-- SET time_zone = "+00:00";

-- DROP TABLE IF EXISTS `Category`;
-- DROP TABLE IF EXISTS `Product`;
-- DROP TABLE IF EXISTS `Menu_of_the_day`;


--------------------------------------------------------------------------------------------------------
--  Structure de la table `Category`  --
----------------------------------------


CREATE TABLE `hang_meas`.`Category` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `label` VARCHAR(150) NOT NULL
);


----------------------------------------
---  Contenu de la table `Category`  ---
----------------------------------------


INSERT INTO `hang_meas`.`Category` (`label`) VALUES
('starter'),
('main_course'),
('dessert'),
('drink');


--------------------------------------------------------------------------------------------------------
--  Structure de la table `Product`  --
---------------------------------------


-- CREATE TABLE `Product` (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     title VARCHAR(150) NOT NULL,
--     price INT NOT NULL,
--     img VARCHAR(150) NULL,
--     alt VARCHAR(150) NULL,
--     description VARCHAR(1000) NULL,
--     category_id INT,
--     FOREIGN KEY (category_id) REFERENCES category(id)
-- ) ENGINE=InnoDB;


-----------------------------------------
----  Contenu de la table `Product`  ----
-----------------------------------------


-- LOCK TABLES `Product` WRITE;
-- INSERT INTO `Product` (`title`, `price`, `img`, `alt`, `description`, `category_id`) VALUES
-- ('Soupe Pho', '12', '', 'Soupe Pho', 'Classé 20eme dans la liste de 50 meilleurs plats du monde établie en 2017 par CNN, le pho vietnamien est de nouveau chaleureusement salué par les gourmets nationaux et internationaux. Qu’il soit pho au bœuf ou pho au poulet, deux versions classiques, cette soupe savoureuse et parfumée prend une place particulaire dans le cœur des conviés. Figurant parmi 12 meilleurs plats au monde d’après le magazine Huffington Post et présent fois dans les médias étrangers, le pho mérite amplement vedette du patrimoine culinaire vietnamien.', 2),
-- ('Rouleau de printemps', '8', '', 'Rouleau de printemps', 'le rouleau de printemps, également appelé rouleau d’été, occupe quant à lui, une digne place dans le top de 50 meilleurs plats du monde, selon CNN.', '1'),
-- ('Vermicelles de riz au porc grillé', '13.90', '', 'Vermicelles de riz au porc grillé', 'Ce met affriolant a été inscrit dans le top de 10 meilleures plats de rue publié en 2014 par le magazine National Geographic. L’an précédant, le bun cha a fait un place dans le classement de 25 plats d’été les plus appétissants au monde établi par CNN.', '2'),
-- ('Bun bo Hue', '10', '', 'Bun bo Hue', 'Un autre plat vietnamien étoilé qui a su convaincre le fameux chef Anthony Bourdian est le bun bo Hue. Le délice culinaire emblématique de ville centrale du Vietnam est applaudi dans son émission Parts Unknown en tant que « la meilleure soupe au monde ». Cette soupe colorée et épicée originaire de Hue est connue comme un des meilleurs plats de l’Asie.', '2'),
-- ('Banh khot', '11', '', 'Banh khot', 'Chouette et croustillante, cette recette populaire des régions du Centre et du Sud fait partie des 35 plats les plus appétissants au monde, selon les experts et visiteurs au festival de la cuisine de rue organisé à Singapour en 2013.', '2'),
-- ('Nem', '7', '', 'Nem', 'Ce plat qui séduit tous les palais vous fait vivre une expérience gustative immanquable au Vietnam. C’est avec le nem ou pâté impérial que le Vietnam a été mis à l’honneur en 2015 par CNN en tant que le pays le plus favori pour la gastronomie.', '1'),
-- ('Samla chapek', '14', '', 'Samla chapek', 'Cette savoureuse soupe est un plat traditionnel très apprécié des Cambodgiens. Samla chapek est une soupe de nouilles et de porc parfumée au gingembre. Cette soupe se mange à toute heure de la journée, aussi bien au petit déjeuner que lors des deux autres principaux repas. La province de Kratie est réputée à travers le pays pour la saveur particulière de la soupe samla chapek dû à la qualité de sa viande de porc.', '2'),
-- ('Phlea sach ko', '12', '', 'Phlea sach ko', 'Cette délicieuse salade de bœuf khmère s’apparente au laap laotien. Une salade pleine de fraîcheur gentillement épicée composée de bœuf émincé aux aromates, d’herbes fraîches et de crudités notamment de pousses de soja et de haricots croquants. La sauce est riche en parfums et en saveurs complexes. L’originalité de cette salade cambodgienne repose aussi sur les grains de riz grillés puis réduits en poudre que l’on verse sur la salade.', '1'),
-- ('Samlar kako', '13', '', 'Samlar kako', 'Voilà un beau et savoureux plat traditionnel qui ne manquera pas d’éveiller vos papilles. Cette succulente soupe très peut se préparer de diverses façons selon les régions et les familles, mais la base reste toujours la même. La soupe samlar kako à base de pâte de curry épicée et se compose de papaye verte, de petites aubergines, de potiron, de haricots, de légumes en feuilles, d’épinards et de riz grillé, puis pillé. On ajoute ensuite, au choix, de la viande de porc, ou du poisson.', '2'),
-- ('Salade papaye verte', '8', '', 'Salade papaye verte', 'Bok nhong est une salade épicée à base de papaye non mûre et râpée. Ce plat est une combinaison parfaite de quatre principaux goûts de la cuisine locale: le citron vert aigre, le piment fort, la sauce de poisson savoureuse et la douceur ajoutée par le sucre de palme.', '1'),
-- ('Amok à la cambodgienne', '9', '', 'Amok à la cambodgienne', 'L’Amok Trey est l’un des plats nationaux du Cambodge. Ce plat savoureux cuit à la vapeur dans une feuille de bananier est à base de poisson et lait de coco. Une recette au parfum unique qui est à tester absolument !', '2'),
-- ('Lok Lak', '12', '', 'Lok Lak', 'Emblématique de la cuisine cambodgienne, le lok lak est un plat très apprécié par les occidentaux. Cette recette est à base de bœuf sauté dans une marinade. Elle est accompagnée de tomates fraîches, de rondelles de concombre et de riz nature.', '2'),
-- ('Bangkea cheamuoy saml krahm', '15', '', 'Bangkea cheamuoy saml krahm', 'Voici un curry rouge de crevettes. Au Cambodge, les recettes varient en fonction des ingrédients que l’on a sous la main. On peut utiliser des crevettes, comme du poisson ou de la viande. Le principal est qu’il y ait du goût et des saveurs !', '2'),
-- ('Perles de coco, la recette cambodgienne', '6', '', 'Perles de coco, la recette cambodgienne', 'Qui ne connait pas ce fameux dessert que l’on retrouve  à peu près dans tous les restaurants asiatiques. Voici la recette des perles de coco pour une vingtaine de boule de coco.', '3'),
-- ('Nhom Chakachan', '5', '', 'Nhom Chakachan', 'Recette de gâteau cambodgien Nhom Chakachan Gâteau cambodgien à déguster au goûter ou comme dessert après manger ! Une gourmandise khmère par excellence.', '3'),
-- ('Tapioca façon khmer', '7', '', 'Tapioca façon khmer', 'Les perles de tapioca au lait de coco Nhom Krob Totim est un dessert cambodgien mélangeant la douceur du coco sucré et l’onctuosité des perles de tapioca. A la fin de votre repas ou à tous moments de la journée, ce dessert cambodgien se déguste frais.', '3'),
-- ('Flan cambodgien', '6', '', 'Flan cambodgien', 'Flan cambodgien à déguster sans modération Dans la jeunesse, ma mère nous faisait régulièrement ce flan cambodgien (ou pas), on adore ça ! en voici la recette.', '3'),
-- ('Beignets de banane', '7', '', 'Beignets de banane', 'Les beignets de banane pour s’initier doucement à la Street Food du Cambodge Les cambodgiens sont des grignoteurs, ils grignotent tout le long de la journée. Si vous souhaitez vous initier à la Street food du Cambodge, vous pouvez commencer par goûter les beignets de banane frits.', '3'),
-- ('Gâteau khmer au manioc Nôm Bak Bin', '6', '', 'Gâteau khmer au manioc Nôm Bak Bin', 'L’onctuosité du coco et du manioc Nôm Bak Bin est un gâteau à base de manioc, il mélange les propriétés du manioc et l’onctuosité du coco. En voici la recette cambodgienne. C’est un réel délice !', '3'),
-- ('Riz de coco et taro', '6', '', 'Riz de coco et taro', 'Prononcé Bay Damnaep Khmao Kh’tih Daung Trav, un dessert de riz à base de lait de coco et de taro.', '3'),
-- ('Boules de sésame', '5', '', 'Boules de sésame', 'Nhom Kroch est un gâteau cambodgien pouvant faire office de dessert ou tout simplement de friandises...', '3'),
-- ('Bière Angkor', '5', '', 'Bière Angkor', '', '4'),
-- ('Thé glaçé', '5', '', 'Thé glaçé', '', '4'),
-- ('Coca Cola', '6', '', 'Coca Cola', '', '4'),
-- ('Soussa', '5', '', '', '', '4'),
-- ('Eau minérale', '5', '', 'Soussa', '', '4'),
-- ('Vin khmer', '19', '', 'Vin khmer', '', '4'),
-- ('Milk Shake', '7', '', 'Milk Shake', '', '4'),
-- ('Soda durian', '6', '', 'Soda durian', '', '4');
-- UNLOCK TABLES;


--------------------------------------------------------------------------------------------------------
--  Structure de la table `Menu_of_the_day`  --
-----------------------------------------------


-- CREATE TABLE `Menu_of_the_day` (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     label VARCHAR(150) NOT NULL,
--     price_menu INT NOT NULL,
--     starter_id INT,
--     main_course_id INT,
--     dessert_id INT,
--     drink_id INT,
--     FOREIGN KEY (starter_id) REFERENCES product(id),
--     FOREIGN KEY (main_course_id) REFERENCES product(id),
--     FOREIGN KEY (dessert_id) REFERENCES product(id),
--     FOREIGN KEY (drink_id) REFERENCES product(id)
-- ) ENGINE=InnoDB;


-----------------------------------------------
---  Contenu de la table `Menu_of_the_day`  ---
-----------------------------------------------

-- LOCK TABLES `Menu_of_the_day` WRITE;
-- INSERT INTO `Menu_of_the_day` (`label`, `price_menu`, `starter_id`, `main_course_id`, `dessert_id`, `drink_id`) VALUES
-- ('Menu du jour', '19', '39', '40', '49', '54');
-- UNLOCK TABLES;


-------------------------------------------------------------------------------------------------------------------------------------------------



--
-- Index pour les tables exportées
--

--
-- Index pour la table `item`
--
-- ALTER TABLE `item`
--   ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `item`
--
-- ALTER TABLE `item`
--   MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
