class Github{
    constructor() {
        this.client_id = 'c8bf20da8242f8eee995',
        this.client_secret = '7bb9420b9820bbed594f594363bb90227e935601',
        this.repos_count = 5,
        this.repos_sort = 'created: asc'
    }

    async getUsers(user) {
       
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = profileResponse.json();
        return profile    
    }

    async getRepos(user) {
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = repoResponse.json();
        return repos
    }


}