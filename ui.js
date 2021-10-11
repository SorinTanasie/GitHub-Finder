class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        console.log(user)
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img Class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary m-1">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary m-1">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success m-1">Followers: ${user.followers}</span>
                        <span class="badge badge-info m-1">Following: ${user.following}</span>

                        <br><br>
                        
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    showRepos(repos){
        let output= '';

        repos.forEach(repo =>{
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank"> ${repo.name} </a>
                    </div>

                    <div class="col-md-6">
                        <span class="badge badge-primary m-1">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary m-1">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success m-1">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `
        })

        document.getElementById('repos').innerHTML = output;
    }

    showAlert(message, className){
        // Clear any alert which is already showing
        this.clearAlert();

        const div = document.createElement('div');
        div.className = className;

        div.appendChild(document.createTextNode(message));
         
        const container = document.querySelector('.searchContainer');

        const search = document.querySelector('.search');

        container.insertBefore(div, search);

        //Clear after 3 sec

        setTimeout(()=>{
            this.clearAlert();
        },3000)
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }
    // Clear UI profile
    clearProfile(){
        this.profile.innerHTML = "";
    }
}