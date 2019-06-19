# Starter Owner Data 

INSERT INTO owners(name, email, pic)  
	VALUES  ('Brandon Stevenson', '1234@test.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_jpBJb4RJi0o0kWHjEIY0yX-iQLxI7xEOWt-8bzLX81H5s3GEw'),
			('Ben Clark', '5678@test.com', 'https://i.pinimg.com/originals/12/40/34/1240341eda1f8803f04cbaedd97dbed3.jpg'),
            ('Matt Brooks', '9012@test.com', 'https://cdn.kinsights.com/cache/15/bf/15bfba9d8ac7c47a45e33c1fe6447c27.jpg'),
			('Peter Lau', '3456@test.com', 'https://www.goodnewsnetwork.org/wp-content/uploads/2015/08/cute-dog-couch-AllPaws-facebook.jpg');



#Starter Dog Date 

INSERT INTO dogs(dogName, breed, size, pic, personality, age)
	VALUES ('Sadie', 'Labrador Retreiver', 3, 'https://i.pinimg.com/originals/29/0c/19/290c192b887d0419bf8d686290bcb01b.jpg', 1, 3),
    ('Roscoe', 'Pitbull', 3, 'https://img.dog-learn.com/dog-breeds/american-pit-bull-terrier/pitbull-i5-sz14.jpg', 1, 2),
    ('Merc', 'Chi-weenie', 1, 'https://img.dog-learn.com/dog-breeds/american-pit-bull-terrier/pitbull-i5-sz14.jpg', 1, 2),
    ('Marshall', 'German Shepherd', 1, 'http://cdn.akc.org/content/hero/gsd_header_.jpg?cachebuster:56', 1, 2),
    ('Ella', 'Moxie', 1, 'https://i.pinimg.com/originals/11/e7/c9/11e7c969d7d8583ce09a3248e4d10566.jpg', 1, 1),
    ('Lola', 'Poodle', 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGN0gMHB_7zVu6djPAPZ-c4wF1Htgv4h8_cY6TorPyf3xKRJ5V', 3, 3),
    ('Sebastian', 'Yorkie', 1, 'https://1djbcc27ketw16uuv6g8izdk-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/yorkshire-terrier-768x432.jpg', 4, 3);
	
	# Size- 1:small 2:medium 3:large
    # Personality- 1:calm 2:timid: 3:energetic 4:weird
    # Age- 1:0-5 2:6-10 3:11+
