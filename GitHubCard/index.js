/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/mchrupcala')
  .then( response => {
    let card = createCard(response.data);
    let container = document.querySelector('.cards');
    container.appendChild(card);
  })
  .catch( error =>{
    console.log(error);
  })




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

const followersArray = ['stlachman', 'MSquared88', 'NicholasInterest1', 'EpiceneDev', 'nomadkitty', 'briannakeune', 'allisonkydy', 'brandonharris177'];

for (let i = 0; i < followersArray.length; i++) {
  axios.get(`https://api.github.com/users/${followersArray[i]}`)
  .then( response => {
    let card = createCard(response.data);
    let container = document.querySelector('.cards');
    container.appendChild(card);
  })
  .catch( error =>{
    console.log(error);
  })
}


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

function createCard(obj) {

  //Create the HTML tags
  const card = document.createElement('div');
  const userImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameHeader = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const userBio = document.createElement('p');

  //Append to the correct elements for styling.
  card.appendChild(userImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(nameHeader);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(userBio);

  //Add class names to the HTML tags.
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  nameHeader.classList.add('name');
  userName.classList.add('username');


  // Pass object values into the component at the correct variables.
  userImage.src = obj.avatar_url;
  nameHeader.textContent = obj.name;
  userName.textContent = obj.login;
  location.textContent = obj.location;
  profile.textContent = obj.html_url;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  userBio.textContent = obj.bio;

  return card;
}

// console.log(createCard);
// createCard(data);

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
