const altCSS = document.createElement("style");

function searchApp(name) {
  var foundApps = [];
  if (name !== "") {
    let terms = name.split(" ");
    terms.forEach(function(term, index) {
      terms[index] = term.toLowerCase();
    });
    // appsDiv.innerHTML = "";
    altCSS.innerHTML = `.appsButton { display: none; animation: none; } .foundApp { display: block !important; }`;
    document.querySelectorAll(".foundApp").forEach((app) => {
      app.classList.remove("foundApp");
    });
    apps.forEach(function (app) {
      // if (app.Name.toLowerCase().includes(name.toLowerCase())) {
      if (terms.indexOf(app.Name.toLowerCase())) {
        foundApps.push(app);
      }
    });
    foundApps.sort();
    foundApps.forEach(function(app) {
      if (app.Hidden === true) {
        return;
      }

      const button = document.getElementById(appID(app));
      button.classList.add("foundApp");
    });

    if (name !== "") {
      if (results == 1) {
        resultsText.innerHTML = `${foundApps.length} result for '${name}'`;
      } else {
        resultsText.innerHTML = `${foundApps.length} results for '${name}'`;
      }
    } else {
      resultsText.innerHTML = "";
    }
  } else {
    altCSS.innerHTML = `.appsButton { display: block; animation: none; }`;
    apps.forEach(createApps);
    resultsText.innerHTML = "";
  }
}