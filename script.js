function generateMetrics(){

let cpu =
Math.floor(Math.random()*100);

let memory =
Math.floor(Math.random()*100);

let disk =
Math.floor(Math.random()*100);

let network =
Math.floor(Math.random()*1000);

document.getElementById("cpu").innerHTML =
cpu + "%";

document.getElementById("memory").innerHTML =
memory + "%";

document.getElementById("disk").innerHTML =
disk + "%";

document.getElementById("network").innerHTML =
network + " Mbps";
}

generateMetrics();

setInterval(generateMetrics,5000);