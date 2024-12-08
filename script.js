//define font-size of some headers
document.addEventListener('DOMContentLoaded', function()  {
  let h1 = document.getElementById("welcome");
  let h2 = document.getElementById("me");
  let header = document.getElementById("header");

  const viewportWidth = window.innerWidth;
  if (header){
    header.style.fontSize = viewportWidth * 0.03 + 'px'; // 10% van de breedte
  }else {
    console.error('Element with Class "header" not found.');
  }

  if (h1){
    h1.style.fontSize = viewportWidth * 0.12 + 'px'; // 10% van de breedte
  }else {
    console.error('Element with ID "welcome" not found.');
  }
  
  if(h2){
    h2.style.fontSize = viewportWidth * 0.1 + 'px';
  }else {
    console.error('Element with ID "me" not found.');
  }
});



//add animation to welcome text
window.addEventListener('load', () => {
  setTimeout(() => {
    const welcome = document.getElementById('welcome');
    if (welcome){
      welcome.classList.add('visible');
    }else{
      console.error('Element with ID "welcome" not found.');
    }
    
    const me = document.getElementById('me');
    if (me){
      me.classList.add('visible');
    }else{
      console.error('Element with ID "me" not found.');
    }
  }, 300); // Adjust the delay as needed
});



//creating a chart
      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
        
  const viewportWidth = window.innerWidth;
        // Create the data table.
      var data = new google.visualization.arrayToDataTable([
        ['Skills', 'Percent', { role: 'style' } ],
        ['Analytic', 0.95, 'opacity:0.7'],
        ['Conventional', 0.9, 'opacity: 0.7'],
        ['Result-minded', 0.85, 'opacity: 0.7'],
        ['People-minded', 0.7, 'opacity:0.7'],
        ['Independend', 0.85, 'opacity: 0.7']
      ]);

        // Set chart options
        var options = {
                       legend:'none', 
                       width:viewportWidth-200,
                       height:300,
                       colors: ['#dc741a'],
        hAxis: {
           minValue: 0,
           maxValue: 1,
           ticks: [0, 0.25, 0.50, 0.75, 1],
           format: '0%' // Dit zorgt ervoor dat de waarden als percentage worden weergegeven
  }              
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

