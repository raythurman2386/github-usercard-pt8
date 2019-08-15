const container = document.querySelector('.cards');
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
function getData(user) {
	axios
		.get(`https://api.github.com/users/${user}`)
		.then((res) => {
			const data = res.data;
			console.log(data.followers);
			const card = cardCreator(data);
			container.appendChild(card);
		})
		.catch((error) => {
			console.log(error);
		});
}

getData('raythurman2386');

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const sectionArray = [
	'miklo88',
	'nickdurbin',
	'Fractured2k',
	'leachcoding',
	'bobbidigi',
	'AislynnEdmiston',
	'IanCarreras',
	'Sherexmykes',
];

setTimeout(
	sectionArray.forEach((user) => {
		getData(user);
	}),
	1000,
);

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

const cardCreator = (obj) => {
	// create the card div element
	const card = document.createElement('div');
	card.classList.add('card');

	// create the img element
	const image = document.createElement('img');
	image.src = obj.avatar_url;
	card.appendChild(image);

	// card info div
	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');
	card.appendChild(cardInfo);

	// create the name <h3>
	const name = document.createElement('h3');
	name.classList.add('name');
	name.textContent = obj.name;
	cardInfo.appendChild(name);

	// Create the username p
	const userName = document.createElement('p');
	userName.classList.add('username');
	userName.textContent = obj.login;
	cardInfo.appendChild(userName);

	// Create the location p
	const location = document.createElement('p');
	location.classList.add('location');
	location.textContent = obj.location;
	cardInfo.appendChild(location);

	// Create the profile p with nested a tag
	const profile = document.createElement('p');
	profile.textContent = 'Profile: ';
	cardInfo.appendChild(profile);
	// Nested a tag
	const profileSrc = document.createElement('a');
	profileSrc.src = obj.html_url;
	profileSrc.textContent = obj.html_url;
	profile.appendChild(profileSrc);

	// Create the followers p
	const followers = document.createElement('p');
	followers.classList.add('followers');
	followers.textContent = `Followers:  ${obj.followers}`;
	cardInfo.appendChild(followers);

	// Create the following p tag
	const following = document.createElement('p');
	following.classList.add('following');
	following.textContent = `Following:  ${obj.following}`;
	cardInfo.appendChild(following);

	// Create the bio p tag
	if (obj.bio !== null) {
		const bio = document.createElement('p');
		followers.classList.add('bio');
		bio.textContent = `Bio:  ${obj.bio}`;
		cardInfo.appendChild(bio);
	}

	return card;
};

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
