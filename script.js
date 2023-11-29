let points = 0;
let upgrades = [1, 2, 4, 10, 1000];
let currentUpgrade = upgrades[0];
let txt = document.getElementById('heading');
let pointsTxt = document.getElementById('pointsText');
function buyUpgrade(cost, num) {
    if (points>=cost) {
     currentUpgrade = upgrades[num];
     points = points-cost;
     pointsTxt.innerText = "Points: " + points;
    }
}
function increasePoints() {
    points = points + currentUpgrade;
    pointsTxt.innerText = "Points: " + points;

}
function winGame() {
  buyUpgrade(1000000, 4);
  txt.innerText = "YOU WIN!!";
}