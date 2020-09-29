let members = data.results[0].members;

let statisti = {
    republicans: [],
    democrats: [],
    independents: [],
    // avgPartyVotesRepublicans: 0,
    // avgPartyVotesDemocrats: 0,
    // avgPartyVotesIndependents: 0,
    // avgMissedVotesRepublicans: 0,
    // avgMissedVotesDemocrats: 0,
    // avgMissedVotesIndependents: 0,
    leastLoyal: tenPct(members, "votes_with_party_pct", true),//menos leales
    mostLoyal: tenPct(members, "votes_with_party_pct", false),//mas leales
    leastEngaged: tenPct(members, "missed_votes_pct", false),//menos comprometidos-se compara missed_votes
    mostEngaged: tenPct(members, "missed_votes_pct", true)//mas comprometidos
}

//separo por partido "R", "D" y "ID"
for (let i = 0; i < members.length; i++) {
    if (members[i].party == "R") { statistics.republicans.push(members[i]) }
    if (members[i].party == "D") { statistics.democrats.push(members[i]) }
    if (members[i].party == "ID") { statistics.independents.push(members[i]) }
}
//promedio de porcentaje de votos de lealtad para c/ partido
function getAverage(array, key) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i][key]
    }
    return (sum / array.length || 0).toFixed(2); //devuelve 2 decimales
}
// mas y menos leales
function tenPct(array, key, isAscendent) {
    let sorted = isAscendent ? [...array].sort((a, b) => a[key] - b[key]) : [...array].sort((a, b) => b[key] - a[key]);
    let tenPct = Math.round(sorted.length / 10);
    let result = sorted.slice(0, tenPct);
    let i = result.length;
    while (i < sorted.length && sorted[i][key] == result[result.length - 1]) {
        result.push(sorted[i])
        i++
    }
    return result;
}

//ingreso el dato en el json
// statistics.avgMissedVotesRepublicans = getAverage(statistics.republicans, "missed_votes_pct");//en house attendance
// statistics.avgMissedVotesDemocrats = getAverage(statistics.democrats, "missed_votes_pct");
// statistics.avgMissedVotesIndependents = getAverage(statistics.independents, "missed_votes_pct");

// statistics.avgPartyVotesRepublicans = getAverage(statistics.republicans, "votes_with_party_pct");//en party loyalty
// statistics.avgPartyVotesDemocrats = getAverage(statistics.democrats, "votes_with_party_pct");
// statistics.avgPartyVotesIndependents = getAverage(statistics.independents, "votes_with_party_pct");
//guardo el dato en statitics.js


//averiguamos si es loyalty o attendance
const isLoyalty = document.getElementById("loyalty");

//hacer una funcion logica para preguntar por senate o house...
function createAtGlanceTable() {
    let table = document.getElementById("at-glance");
    let thead = document.createElement("thead");
    thead.classList.add("thead-dark");
    thead.innerHTML =  `<tr>
                            <th>Party</th>
                            <th>Number of Reps</th>
                            <th>${isLoyalty ? "% Voted with Party" : "% Missed Votes"}</th>
                        </tr>`;
 
    let tbody = document.createElement("tbody");

    tbody.innerHTML = `<tr>
                            <td>Republicans</td>
                            <td>${statistics.republicans.length}</td>
                            <td>${isLoyalty ? getAverage(statistics.republicans, "votes_with_party_pct") : getAverage(statistics.republicans, "missed_votes_pct")} %</td>
                        </tr>`
    tbody.innerHTML += `<tr>
                            <td>Democrats</td>
                            <td>${statistics.democrats.length}</td>
                            <td>${isLoyalty ? getAverage(statistics.democrats, "votes_with_party_pct") : getAverage(statistics.democrats, "missed_votes_pct")} %</td>
                        </tr>`
    tbody.innerHTML += `<tr>
                            <td>Independents</td>
                            <td>${statistics.independents.length}</td>
                            <td>${isLoyalty ? getAverage(statistics.independents, "votes_with_party_pct") : getAverage(statistics.independents, "missed_votes_pct")} %</td>
                        </tr>`
    tbody.innerHTML += `<tr class="font-weight-bolder">
                            <td>Total</td>
                            <td>${members.length}</td>
                            <td>${isLoyalty ? getAverage(members, "votes_with_party_pct") : getAverage(members, "missed_votes_pct")} %</td>
                        </tr>`;

    table.appendChild(thead);
    table.appendChild(tbody);
}


//tabla de mas y menos leales

function createTable(mostOrLeast) {
    let table = document.getElementById(mostOrLeast);

    let thead = document.createElement("thead");
    thead.classList.add("thead-dark");
    thead.innerHTML =  `<tr>
                            <th>Name</th>
                            <th>${isLoyalty ? "Number Party Votes" : "Number of Missed Votes"}</th>
                            <th>${isLoyalty ? "% Party Votes" : "% Missed"}</th>
                        </tr>`;

    let tbody = document.createElement("tbody");

    let key = isLoyalty ? mostOrLeast + "Loyal" : mostOrLeast + "Engaged";
    statistics[key].forEach(members => {
        tbody.innerHTML += `<tr>
                                ${members.url ?
                                   `<td><a target="_blank" href=${members.url}>${members.first_name} ${members.middle_name || ""} ${members.last_name}</a></td>` : 
                                   `<td>${members.first_name} ${members.middle_name || ""} ${members.last_name}</td>`}


                                <td>${isLoyalty ? Math.round(members.total_votes * members.votes_with_party_pct / 100) : members.missed_votes}</td>
                                <td>${isLoyalty ? members.votes_with_party_pct : members.missed_votes_pct} %</td>
                            </tr>`;
    });

    table.appendChild(thead);
    table.appendChild(tbody);

}

createAtGlanceTable()
createTable("most")
createTable("least")
