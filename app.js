const github = new Github;
const ui = new UI;

document.getElementById('searchUser').addEventListener('keyup', (e) => {
    var userText = e.target.value;
    
    if (userText !== '')
    {
        github.getUsers(userText)
            .then(data => {
                if (data.message === 'Not Found')
                {
                    ui.showAlert('User not found', 'alert alert-danger');
                }
                else
                {
                    ui.showProfile(data);
                }
            })
            github.getRepos(userText)
            .then(data => {
                if (data.message === 'Not Found')
                {
                    ui.showAlert('User not found', 'alert alert-danger');
                }
                else
                {
                    ui.showRepos(data);
                }
            })
    }
    else
    {
    ui.clearProfile()
    }
});