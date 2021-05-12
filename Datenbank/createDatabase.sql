Create database app_mf_BA;
use app_mf_BA;
CREATE TABLE eintrag
(
   id int auto_increment primary key,
   name varchar(150) not null,
   kategorie varchar(150),
   strasse varchar(150),
   hausnummer varchar(10),
   plz int,
   beschreibung varchar(1000),
   link varchar(150),
   latitude decimal(18,16),
   longitude decimal(17,16),
   date datetime
);

create table kriterien
(
	id int auto_increment primary key,
    krit_name varchar(255)
);

create table eint_krit
(
	e_id int,
    krit_id int,
    primary key(e_id,krit_id)
);


INSERT INTO eintrag (name, kategorie, strasse,hausnummer,plz,latitude,longitude) 
VALUES ("Arte Bio","cafe","Hörsterstraße","38",48143,51.9649385052524500,7.6323898822147320);

INSERT INTO eintrag (name, kategorie, strasse,hausnummer,plz,latitude,longitude) 
VALUES ("beetschwester","cafe","Tibusplatz","6",48143,51.9654858191672600,7.6270098571287660);

INSERT INTO eintrag (name, kategorie, strasse,hausnummer,plz,latitude,longitude) 
VALUES ("Benami","cafe","Hafenstraße","43",48153,51.9539943327402650,7.6320938982328180);

INSERT INTO eintrag (name, kategorie, strasse,hausnummer,plz,latitude,longitude)
VALUES ("Café Lockvogel","cafe","Neubrückenstraße","52",48143,51.9666593402914360,7.6301722160243575);

INSERT INTO eintrag (name, kategorie, strasse,hausnummer,plz,latitude,longitude)
VALUES ("Áro","restaurant","Wolbecker Straße", "20",48145,51.9581363325901600,7.6387272098895100);

INSERT INTO eintrag (name, kategorie, strasse,hausnummer,plz,latitude,longitude)
VALUES ("Bantu Bowl","restaurant","Wolbecker Straße", "27",48145,51.9583685590139500,7.6389416749196130);

INSERT INTO eintrag (name, kategorie, strasse,hausnummer,plz,latitude,longitude)
VALUES ("elbén","restaurant","Scharnhorstraße", "25",48151,51.9539055857528600,7.6167006158132780);

INSERT INTO eintrag (name, kategorie, strasse,hausnummer,plz,latitude,longitude)
VALUES ("fok food","restaurant","Hansaring", "37",48155,51.9533439257038340,7.6414792515159190);


insert into kriterien (krit_name)
Values("vegan");

insert into kriterien (krit_name)
Values("bio");

insert into kriterien (krit_name)
Values("Saisonal");

insert into kriterien (krit_name)
Values("Regional");

insert into kriterien (krit_name)
Values("Vegetarisch");

insert into kriterien (krit_name)
Values("Fairer Handel");

insert into kriterien (krit_name)
Values("Nachhaltige Rohstoffe");

insert into kriterien (krit_name)
Values("Recycle-Produkte");

insert into kriterien (krit_name)
Values("Fait Fashion");

insert into kriterien (krit_name)
Values("Soziales Engagement");

insert into kriterien (krit_name)
Values("Barrierefreiheit");

insert into kriterien (krit_name)
Values("Female Empowerment");

insert into kriterien (krit_name)
Values("Diversity");



insert into eint_krit (e_id,krit_id)
Values(1,1);

insert into eint_krit (e_id,krit_id)
Values(1,2);

insert into eint_krit (e_id,krit_id)
Values(1,3);

insert into eint_krit (e_id,krit_id)
Values(1,4);

insert into eint_krit (e_id,krit_id)
Values(1,5);

insert into eint_krit (e_id,krit_id)
Values(1,6);

insert into eint_krit (e_id,krit_id)
Values(1,8);

insert into eint_krit (e_id,krit_id)
Values(1,10);

insert into eint_krit (e_id,krit_id)
Values(1,12);

insert into eint_krit (e_id,krit_id)
Values(2,1);

insert into eint_krit (e_id,krit_id)
Values(2,3);

insert into eint_krit (e_id,krit_id)
Values(2,5);

insert into eint_krit (e_id,krit_id)
Values(2,6);

insert into eint_krit (e_id,krit_id)
Values(2,8);

insert into eint_krit (e_id,krit_id)
Values(2,12);

insert into eint_krit (e_id,krit_id)
Values(3,1);

insert into eint_krit (e_id,krit_id)
Values(3,4);

insert into eint_krit (e_id,krit_id)
Values(3,5);

insert into eint_krit (e_id,krit_id)
Values(3,6);

insert into eint_krit (e_id,krit_id)
Values(3,8);







    
	
