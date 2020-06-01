// labels along the x-axis
var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
var africa = [86,114,106,106,107,111,133,221,783,2478];
var asia = [282,350,411,502,635,809,947,1402,3700,5267];
var europe = [168,170,178,190,203,276,408,547,675,734];
var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
var northAmerica = [6,3,2,2,7,26,82,172,312,433];
var oceana = [3,3,2,2,2,2,6,13,30,57];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        data: africa,
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      },
      {
        data: asia,
        label: "Asia",
        borderColor: "#bffcc6",
        fill: false
      },
      {
        data: europe,
        label: "Europe",
        borderColor: "#ffdfba",
        fill: false
      },
      {
        data: latinAmerica,
        label: "Latin America",
        borderColor: "#ff9cce",
        fill: false
      },
      {
        data: northAmerica,
        label: "North America",
        borderColor: "#FFABAB",
        fill: false
      },
      {
        data: oceana,
        label: "Oceana",
        borderColor: "#b28dff",
        fill: false
      }
    ]
  }
});

var pokemonTypes = ["bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"];
var typeNums = [69, 30, 19, 43, 16, 26, 46, 4, 31, 69, 31, 23, 96, 27, 56, 43, 26, 111]

// var ctx = document.getElementById("myBar");
// var myBar = new Bar(ctx, {
new Chart(document.getElementById("myBar"), {
  type: 'bar',
  data: {
    labels: pokemonTypes,
    datasets: [
      {
        label: "Number of Pokemon",
        backgroundColor: "#3e95cd",
        data: typeNums
      }
    ]
  },
  options: {
    legend: { display: false },
    }
  }
);
