

const buttonClick = async () => {
    try {
        let errorPlace = document.getElementById("show-error")

        if (errorPlace) {
            errorPlace.innerHTML = ""
        }

        let filterNegara = document.getElementById("inputRegion").value
        const url = `https://covid-193.p.rapidapi.com/statistics?country=${filterNegara}`;
        const options = {
            method: 'GET',
            headers: {
                
            }
        };
        const response = await fetch(url, options);
        const result = await response.json();
        let covidData = result.response[0]

        if (covidData) {
                console.log(covidData);
                console.log(covidData.cases);
                console.log(covidData.cases.new);
                console.log(covidData.cases.recovered);
                console.log(covidData.cases.total);
                console.log(covidData.deaths.total);
                console.log(covidData.tests.total);
                
                document.getElementById("activeCases").innerHTML = covidData.cases.active ? covidData.cases.active : "0"
                document.getElementById("newCases").innerHTML = covidData.cases.new ? covidData.cases.new : "0"
                document.getElementById("recoveredCases").innerHTML = covidData.cases.recovered ? covidData.cases.recovered : "0"
                document.getElementById("totalCases").innerHTML = covidData.cases.total ? covidData.cases.total : "0"
                document.getElementById("totalKill").innerHTML = covidData.deaths.total ? covidData.deaths.total : "0"
                document.getElementById("totalTests").innerHTML = covidData.tests.total ? covidData.tests.total : "0"
        } else {
            throw (`${filterNegara} Negara Tersebut tidak ada`)
        }

    } catch(error) {
        // console.log(error)
        let errorPlace = document.getElementById("show-error")
        errorPlace.innerHTML = error
    }
    

}
