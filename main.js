const btnSubmit = document.querySelector("#submit");
let _username = document.getElementById("username");
let _tweet = document.getElementById("newtweet");

let dataTweet = [];
class Tweet {
  constructor(username, tweet, like, retweet) {
    (this.username = username),
      (this.tweet = tweet),
      (this.like = like),
      (this.retweet = retweet);
  }
}

function addNewTweet() {
  let like = "far";
  let retweet = "fas";
  let username = _username.value;
  let tweet = _tweet.value;
  let newTweet = new Tweet(username, tweet, like, retweet);
  dataTweet.unshift(newTweet);

  let container = document.querySelector("#content-newtweet");

  clearLibrary(container);
  createNewTweet();
}
function createNewTweet() {
  for (let i = 0; i < dataTweet.length; i++) {
    let newtweet = document.getElementById("content-newtweet");
    let newfeed = document.createElement("div");
    newfeed.classList.add("newsfeed");
    const container = document.createElement("div");
    container.classList.add("container");
    newfeed.appendChild(container);
    newtweet.appendChild(newfeed);

    let newUserName = document.createElement("h2");
    newUserName.textContent = `${dataTweet[i]["username"]}`;
    container.appendChild(newUserName);

    let contentNewTweet = document.createElement("p");
    contentNewTweet.textContent = `${dataTweet[i]["tweet"]}`;
    container.appendChild(contentNewTweet);

    const btntweet = document.createElement("div");
    btntweet.classList.add("icon-tweet");
    const ico1 = document.createElement("i");
    ico1.classList.add(`${dataTweet[i]["like"]}`);
    ico1.classList.add("fa-heart");
    btntweet.appendChild(ico1);
    const ico2 = document.createElement("i");
    ico2.classList.add(`${dataTweet[i]["retweet"]}`);
    ico2.classList.add("fa-retweet");
    ico2.addEventListener("click", (e) => {
      let like = "far";
      let retweet = "fas";
      let newTweet = new Tweet(
        dataTweet[i].username,
        dataTweet[i].tweet,
        like,
        retweet
      );
      dataTweet.unshift(newTweet);
      let container = document.querySelector("#content-newtweet");

      clearLibrary(container);
      createNewTweet();
    });

    btntweet.appendChild(ico2);
    container.appendChild(btntweet);

    ico1.addEventListener("click", (e) => {
      console.log(e.target.parentNode.parentNode);
      ico1.classList.remove("fa-heart");
      ico1.classList.add("love");
      ico1.classList.add("fa");
      ico1.classList.add("fa-solid");
      ico1.classList.add("fa-heart");
    });
  }
}

function clearLibrary(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  addNewTweet();
});
