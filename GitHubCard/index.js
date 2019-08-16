const container = document.querySelector('.cards');
const button = document.querySelector('.button');
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
function getData(user) {
	axios
		.get(`https://api.github.com/users/${user}`)
		.then((res) => {
			const card = cardCreator(res.data);
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
	 
   Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards

   Step 5: Now that you have your own card getting added to the DOM, either 
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

button.addEventListener('click', () => {
	sectionArray.forEach((user) => {
	getData(user);
})})

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

const itemCreator = (element, parent, name, content) => {
	let item = document.createElement(element);
	parent.appendChild(item);
	item.classList.add(name);
	item.textContent = content;

	return item;
}

const cardCreator = (obj) => {
	// create the card div element
	const card = document.createElement('div');
	card.classList.add('card', 'animated', 'zoomIn');

	// create the img element
	const image = itemCreator('img', card);
	image.src = obj.avatar_url;

	// card info div
	const cardInfo = itemCreator('div', card, 'card-info');

	// create the name <h3>
	const name = itemCreator('h3', cardInfo, 'name', obj.name);

	// Create the username p
	const userName = itemCreator('p', cardInfo, 'username', obj.login);

	// Create the location p
	const location = itemCreator('p', cardInfo, 'location', obj.location);

	// Create the profile p with nested a tag
	const profile = itemCreator('p', cardInfo, 'profile', 'Profile: ');
	
	// Nested a tag
	const profileSrc = itemCreator('a', profile, 'profileA', obj.html_url);

	// Create the followers p
	const followers = itemCreator('p', cardInfo, 'followers', `Followers: ${obj.followers}`);

	// Create the following p tag
	const following = itemCreator('p', cardInfo, 'following', `Following: ${obj.following}`);

	// Create the bio p tag
	if (obj.bio !== null) {
		const bio = itemCreator('p', cardInfo, 'bio', `Bio: ${obj.bio}`);
	}

	const expand = itemCreator('span', cardInfo, 'expandBtn', 'Expand');

	return card;
};

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
