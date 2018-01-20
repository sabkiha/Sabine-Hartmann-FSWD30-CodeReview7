// define class profiles //

class Person {

	constructor(name, surname, image, age, gender, inRelation, likes) {
		this.name = name;
		this.surname = surname;
		this.image = image
		this.age = age;
		this.gender = gender;
		this.inRelation = inRelation;
		this.likes = likes;
		
	}
}

var profiles = [
	new Person("Peter", "Corriveau", "img/gent01.jpg", 67, "male", false, 4),
	new Person("Jan", "Rubin", "img/gent02.jpg", 62, "male", true, 2),
	new Person("Carlton ", "Feather", "img/gent03.jpg", 55, "male", false, 2),
	new Person("Eugene", "Fessenden", "img/gent04.jpg", 76, "male", false, 3),
 	new Person("Doug ", "Cotner", "img/gent05.jpg", 81, "male", false,5),
 	new Person("Augustus ", "Garg", "img/gent06.jpg", 57, "male", false, 3),
	new Person("Buddy ", "Beckmann", "img/gent07.jpg", 60, "male", false, 1),
	new Person("Ruben ", "Milholland", "img/gent08.jpg", 61, "male", false, 6),
 	new Person("Conrad ", "Pringle", "img/gent09.jpg", 65, "male", false, 5),
 	new Person("Amado ", "Battiste", "img/gent10.jpg",66, "male", true, 4),
 	new Person("Adele ", "Messner", "img/lady01.jpg", 59, "female", false, 1),
 	new Person("Aletha ", "Hiner", "img/lady02.jpg", 71, "female", false, 2),
 	new Person("Hsiu ", "Whitt", "img/lady03.jpg", 65, "female", false, 3),
	new Person("Ellen ", "Nachman", "img/lady04.jpg", 73, "female", false, 5),
	new Person("Carolin ", "Faulcon", "img/lady05.jpg", 74, "female", false, 0),
	new Person("Kandy ", "Barnard", "img/lady06.jpg", 82, "female", false, 6),
	new Person("Genevieve ", "Heyden", "img/lady07.jpg", 75, "female", false, 2),
	new Person("Debbi ", "Staiger", "img/lady08.jpg", 65, "female", false, 0),
	new Person("Santa ", "Kinnard", "img/lady09.jpg", 63, "female", false, 3),
	new Person("Jaclyn ", "Tamayo", "img/lady10.jpg", 66, "female", false, 4),
];
console.log(profiles);

//Getting the elements Id's from HTML

var allProfiles = document.getElementById("profile");

//Loop for Relationship status

for (var i = 0; i < profiles.length; i++) {
	if (profiles[i].inRelation == true) {
		profiles[i].inRelation = 'yes'
	} else {profiles[i].inRelation = 'no'}
};


//Loop vor Likes

for (var i = 0; i < profiles.length; i++) {
	function likes() {
		profiles[i].likes = profiles[i].likes+1;
        };
};

//Loop for profile cards

for (var i=0; i<profiles.length; i++) {
	if (profiles[i].gender == 'male') {
	allProfiles.innerHTML += '<div class="col-xs-1 col-sm-2 col-md-3 col-lg-4">' +
	'<h3>' + profiles[i].name +' '+ profiles[i].surname +'</h3>' +
	'<div><img src="' + profiles[i].image + '" class="center-block"></div>' +
		'<p><strong>'+'Age: ' + profiles[i].age + '</strong>'+ '<br>' + 
				'Gender: ' + profiles[i].gender + '<br>' +
				'In a relationship: '+ profiles[i].inRelation + '<br>' +
				'<button onclick="likes()">Like</button>&nbsp;'+
				'<span class="hearts">'+profiles[i].likes+'</span>&nbsp;<img src="img/like.png" alt="heart" />'+'<br>' +
		'</p>' + 
	'</div>';		
	}
}

