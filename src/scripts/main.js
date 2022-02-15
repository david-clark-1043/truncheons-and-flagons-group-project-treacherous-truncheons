// import fetches, Truncheons function
// import { applicationState } from "./dataAccess.js";
import { fetchScores } from "./score/ScoreProvider.js";
import { fetchTeams } from "./team/TeamProvider.js";
import { TruncheonsFlagons } from "./Truncheons.js";

const mainContainer = document.querySelector("#container")

const renderAll = () => {
//invokes fetches
    const fetchArray = [ fetchScores(), fetchTeams() ]
    return Promise.all(fetchArray)
            .then(() => {
                // renders html
                TruncheonsFlagons()
                // test with just raw applicationState
                // mainContainer.innerHTML = JSON.stringify(applicationState)
            })
}

//render html
renderAll()

// eventListener to re-render html on state change
document.addEventListener("stateChanged", event => {
    renderAll()
})