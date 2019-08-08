/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/mchrupcala')
  .then( response => {
    const card = createCard(response.data);
    const container = document.querySelector('.cards');
    container.appendChild(card);
  })
  .catch( error =>{
    console.log(error);
  })

/*
 const data = avatar_url: "https://avatars0.githubusercontent.com/u/52679312?v=4"
 bio: null
 blog: ""
 company: null
 created_at: "2019-07-08T21:08:26Z"
 email: null
 events_url: "https://api.github.com/users/mchrupcala/events{/privacy}"
 followers: 19
 followers_url: "https://api.github.com/users/mchrupcala/followers"
 following: 26
 following_url: "https://api.github.com/users/mchrupcala/following{/other_user}"
 gists_url: "https://api.github.com/users/mchrupcala/gists{/gist_id}"
 gravatar_id: ""
 hireable: null
 html_url: "https://github.com/mchrupcala"
 id: 52679312
 location: null
 login: "mchrupcala"
 name: "Michael"
 node_id: "MDQ6VXNlcjUyNjc5MzEy"
 organizations_url: "https://api.github.com/users/mchrupcala/orgs"
 public_gists: 0
 public_repos: 22
 received_events_url: "https://api.github.com/users/mchrupcala/received_events"
 repos_url: "https://api.github.com/users/mchrupcala/repos"
 site_admin: false
 starred_url: "https://api.github.com/users/mchrupcala/starred{/owner}{/repo}"
 subscriptions_url: "https://api.github.com/users/mchrupcala/subscriptions"
 type: "User"
 updated_at: "2019-07-17T23:34:23Z"
 url: "https://api.github.com/users/mchrupcala"   */

//  console.log(data);

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

const followersArray = [];

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
