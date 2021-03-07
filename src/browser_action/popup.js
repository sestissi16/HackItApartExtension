// Get reference to background page.
    const provider = new firebase.auth.GoogleAuthProvider();
      const signinButton = document.querySelector("#signin");
      signinButton.addEventListener("click", () =>
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(function (result) {
            console.log("result", result);
          })
          .catch(function (error) {
            console.error(error);
          })
      );
