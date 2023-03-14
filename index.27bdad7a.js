document.querySelector(".country-info");fetch("https://restcountries.com/v3.1/name/ukraine").then((o=>o.json())).then((o=>{console.log(o[0].name.common)})).catch((o=>{console.log(o)}));
//# sourceMappingURL=index.27bdad7a.js.map
