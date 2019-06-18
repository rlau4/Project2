/* Starter Owner Data */

INSERT INTO owners(name, googleID, pic)  
	VALUES  ('Brandon Stevenson', '1234', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_jpBJb4RJi0o0kWHjEIY0yX-iQLxI7xEOWt-8bzLX81H5s3GEw'),
			('Ben Clark', '5678', 'https://i.pinimg.com/originals/12/40/34/1240341eda1f8803f04cbaedd97dbed3.jpg'),
            ('Matt Brooks', '9012', 'https://cdn.kinsights.com/cache/15/bf/15bfba9d8ac7c47a45e33c1fe6447c27.jpg'),
			('Peter Lau', '3456', 'https://www.goodnewsnetwork.org/wp-content/uploads/2015/08/cute-dog-couch-AllPaws-facebook.jpg');



/*Starter Dog Date */

INSERT INTO dogs(dogName, breed, size, pic, personality, age)
	VALUES ('Sadie', 'Labrador Retreiver', 3, 'blank.png', 1, 3),
    ('Roscoe', 'Pitbull', 3, 'blank.png', 1, 2),
    ('Merc', 'Chi-weenie', 1, 'blank.png', 1, 2),
    ('Marshall', 'German Shepherd', 1, 'blank.png', 1, 2),
    ('Ella', 'Moxie', 1, 'blank.png', 1, 1),
    ('Lola', 'Poodle', 1, 'blank.png', 3, 3),
    ('Sebastian', 'Yorkie', 1, 'blank.png', 1, 3)
	
	# Size- 1:small 2:medium 3:large
    # Personality- 1:calm 2:timed: 3:energetic
    # Age- 1:0-5 2:6-10 3:11+