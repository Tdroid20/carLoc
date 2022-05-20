function handleCredentialResponse(response) {
    console.log(response);
  }
    window.google.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID",
      callback: handleCredentialResponse
    });
    window.google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    window.google.accounts.id.prompt(); // also display the One Tap dialog

export default handleCredentialResponse