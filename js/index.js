function openCitiesList() {
    var citiesDisplay = document.getElementById("cities").style.display;
    console.log(citiesDisplay)
    if (citiesDisplay === "" || citiesDisplay === "none")
        document.getElementById("cities").style.display = "block";
    else {
        document.getElementById("cities").style.display = "none";
    }
}