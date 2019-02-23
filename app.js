const github = new Github;
const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    const userInput = e.target.value;

    if(userInput !== ''){
        github.getUser(userInput)
          .then(data => {
              if(data.profile.message === 'Not Found') {
                // Show Alert
                ui.showAlert('User not Found', 'alert alert-danger');
              } else {
                // Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
              }
          })
    } else {
        // Clear Profile 
        ui.clearProfile();
    }
});