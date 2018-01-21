# puppeteer-sample

Sample code to use [Puppeteer](https://github.com/GoogleChrome/puppeteer) library.
It makes the background of GitHub's top page red and takes a screenshot of it.


## Requirement

This Node.js script uses `async`/`await`, so it requires **Node.js 7.6 or later**.


## Usage

1. Run `yarn` command in the root of the repository.
2. Create `creds.js` file which contains the following:
```js
module.exports = {
  "username": "YOUR_GITHUB_USERNAME",
  "password": "YOUR_GITHUB_PASSWORD",
};
```
3. Run `npm start`. It will log in to GitHub with your credentials,
make the background of GitHub's top page red,
and then take a screenshot of it.
If successful, you will get a screenshot named `GitHub.png`.
