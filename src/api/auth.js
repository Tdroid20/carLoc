function parseJwt(token) {
   console.log(token);
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export function HandleCredentialResponse(response) {
    if(response !== undefined) {
        let token = parseJwt(response.credential);
        console.log(token);

        window.localStorage.setItem('token', JSON.stringify(token))
        window.location.replace('/profile')
    }

    window.google.accounts.id.initialize({
      client_id: "916873817468-q1gn98mvgmdkcmutr79g8qfbpu8qie55.apps.googleusercontent.com",
      callback: HandleCredentialResponse
    });
    window.google.accounts.id.renderButton(
      document.getElementById("googleAuth"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    window.google.accounts.id.prompt(); // also display the One Tap dialog
    }

export default HandleCredentialResponse;