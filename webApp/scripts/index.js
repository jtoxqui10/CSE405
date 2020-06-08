const postList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
    if (user) {
        db.collection('users').doc(user.uid).get().then(doc => {
            const html = `
            <div>Logged in as ${user.email}</div>
            <div>${doc.data().bio}</div>
            `;
        accountDetails.innerHTML = html;
        });

        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        accountDetails.innerHTML = '';
        
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
};

//setup posts
const setupPosts = (data) => {

    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const post = doc.data();
            const li = `
                <li>
                    <div class="collapsible-header grey lighten-4">${post.title}</div>
                    <div class="collapsible-body white">${post.content}</div>
                </li>
            `;
            html += li
        });

        postList.innerHTML = html
    } else {
        postList.innerHTML = '<h1 class ="center-align">Welcome to JDM Central!</h1> <h5 class="center-align">Please login to view posts...</h5>'
    }

}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });