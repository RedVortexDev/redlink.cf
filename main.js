var button = document.getElementById("download");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

button.onclick = function () {
	modal.style.display = "block";
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
