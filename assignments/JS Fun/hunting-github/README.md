Hunting Github
Objectives:
Practice using AJAX and writing asynchronous code.
Familiarity with callbacks.
Familiarity with DOM manipulation.
When we send a request via AJAX, we need to also set up the list of instructions (callback) that will run as soon as the response is received. In this case, we are using an event handling callback that gets triggered on the “response” event. Let’s see this in action:

We will be using the GitHub API to hunt down online information about yourself. If you navigate to https://api.github.com/users/(your user name) you will see a bunch of JSON data (Remember JSON is just JavaScript Object Notation) that looks like this:

{
  "login": "MikeHannon",
  "id": 7180431,
  "avatar_url": "https://avatars.githubusercontent.com/u/7180431?v=3",
  "gravatar_id": "",
  "url": "https://api.github.com/users/MikeHannon",
  "html_url": "https://github.com/MikeHannon",
  "followers_url": "https://api.github.com/users/MikeHannon/followers",
  "following_url": "https://api.github.com/users/MikeHannon/following{/other_user}",
  "gists_url": "https://api.github.com/users/MikeHannon/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/MikeHannon/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/MikeHannon/subscriptions",
  "organizations_url": "https://api.github.com/users/MikeHannon/orgs",
  "repos_url": "https://api.github.com/users/MikeHannon/repos",
  "events_url": "https://api.github.com/users/MikeHannon/events{/privacy}",
  "received_events_url": "https://api.github.com/users/MikeHannon/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Mike Hannon",
  "company": null,
  "blog": null,
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 44,
  "following": 8,
  "created_at": "2014-04-05T00:21:45Z",
  "updated_at": "2015-04-14T23:23:54Z"
}
This is the URL we will be using in our API call: https://api.github.com/users/(your user name). Our goal is to display our name on the page using the GitHub API.

Let’s get started with our request. As you may remember from prior experience in the bootcamp, we send an API request using the $.get method from jQuery.

This is just the JS code that will go in your script.js file and don’t forget to get jQuery first!

Below, we are asking jQuery to send a GET Ajax request to the https://api.github.com/users/(your user name) URL and we
are passing it a “displayName” function to run as soon as the Github API sends us a response.

$.get("https://api.github.com/users/(... user name)", displayName)
// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
function displayName(data) {
  console.log(data);
}
Your objective is to create a button that, when clicked, will send an API request to the GitHub API (see above) and will display your name in a tag below the button via DOM manipulation.

BONUS: Use promises (see the advanced chapter) instead of callbacks.