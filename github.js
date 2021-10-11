class GitHub{
    constructor(){
        this.client_id = '3fe9a577a84ef95ad469';
        this.client_secret = '2c614e5290b620ed4e8bb2d6aa14524f1fa69527';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser (user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
        const profile =  await profileResponse.json();
        const repos = await reposResponse.json();

        console.log(repos)
        
        return{
            profile,
            repos
        }
    }
}
