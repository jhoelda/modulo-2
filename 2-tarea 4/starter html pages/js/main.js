const app = new Vue({
    el: "#app",
    data: {
        apiurl: document.getElementById('senate') ? "https://api.propublica.org/congress/v1/113/senate/members.json" : "https://api.propublica.org/congress/v1/113/house/members.json",
        init: { headers: { 'X-API-Key': 'X3pJHUlq8TtZwZm7flIXjrHw8jbj5cNIEkXaWYcs' } },
        members: [],
        checkedParties: ["R", "D", "ID"],
        states: [],
        selectedState: 'all'
    },
    methods: {
        getStates() {
            for (let i = 0; i < this.members.length; i++) {
                if (!this.states.includes(this.members[i].state)) {
                    this.states.push(this.members[i].state)
                }
            }
            this.states.sort()
        }
    },
    created: function () {
        fetch(this.apiurl, this.init)
            .then(responce => responce.json())
            .then(json => {
                this.members = json.results[0].members;
                this.getStates();
            })
            .catch(error => console.log("Error al traer la info. Error: " + error))
    },
    computed: {
        filtered: function () {
            return this.members.filter(member => this.checkedParties.includes(member.party) && (member.state == this.selectedState || this.selectedState == 'all'));
        }
    }
})