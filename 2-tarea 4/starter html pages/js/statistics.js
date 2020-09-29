const app = new Vue({
    el: "#app",
    data: {
        apiurl: document.getElementById('senate') ? "https://api.propublica.org/congress/v1/113/senate/members.json" : "https://api.propublica.org/congress/v1/113/house/members.json",
        init: { headers: { 'X-API-Key': 'X3pJHUlq8TtZwZm7flIXjrHw8jbj5cNIEkXaWYcs' } },
        members: [],
        statistics: {
            republicans: [],
            democrats: [],
            independents: [],
            total: [],
            leastLoyal: [],
            mostLoyal: [],
            leastEngaged: [],
            mostEngaged: []
        }
    },
    methods: {
        //------------senate and house------------------
        getPartyMembers: function (party) {
            return this.members.filter(member => member.party == party)
        },
        getAverage: function (array, key) {
            let sum = 0;
            array.forEach(function (partyMembers) {
                sum += partyMembers[key]
            });
            return (sum / array.length || 0).toFixed(2); //devuelve 2 decimales
        },
        //-------------attendance and loyalty-------------
        getTenPct: function( key, isAscendent) {
            let sorted = isAscendent ? [...this.members].sort((a, b) => a[key] - b[key]) : [...this.members].sort((a, b) => b[key] - a[key]);
            let tenPct = Math.round(sorted.length / 10);
            let result = sorted.slice(0, tenPct);
            let i = result.length;
            while (i < sorted.length && sorted[i][key] == result[result.length - 1]) {
                result.push(sorted[i])
                i++
            }
            return result;
        }

    },
    created: function () {
        fetch(this.apiurl, this.init)
            .then(responce => responce.json())
            .then(json => {
                this.members = json.results[0].members;
                this.statistics.republicans = this.getPartyMembers("R");
                this.statistics.democrats = this.getPartyMembers("D");
                this.statistics.independents = this.getPartyMembers("ID");
                this.statistics.total = this.members;
                this.statistics.leastLoyal = this.getTenPct("votes_with_party_pct", true);
                this.statistics.mostLoyal = this.getTenPct("votes_with_party_pct", false);
                this.statistics.leastEngaged = this.getTenPct("missed_votes_pct", false);
                this.statistics.mostEngaged = this.getTenPct("missed_votes_pct", true)

            })
            .catch(error => console.log("Error al traer la info. Error: " + error))
    },

})