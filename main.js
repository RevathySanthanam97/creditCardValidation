var x = Object.assign([], $("#cardNumOp").html());
var xx = new Array();
for (y = 2021; y <= 2050; y++) {
  var optn = document.createElement("OPTION");
  optn.text = y;
  optn.value = y;
  document.getElementById("year").options.add(optn);
}
var d = new Date();
var monthArray = new Array();
monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
for (m = 0; m <= 11; m++) {
  var optn = document.createElement("OPTION");
  optn.text = monthArray[m];
  optn.value = m + 1;
  document.getElementById("month").options.add(optn);
}
document.getElementById("cvvInput").addEventListener("click", function () {});
$(".inputField").click(function (e) {
  if (e.target.id == "cvvInput") {
    $("#card").addClass("active");
  } else {
    $("#card").removeClass("active");
  }
});
$("input").keyup(function (e) {
  if (e.target.value.length > 0) {
    $(this).val(
      $(this)
        .val()
        .replace(/[^0-9]/g, "")
        .match(/.{1,4}/g)
        .join(" ")
    );
  }

  var y = e.target.value.split("");

  y.map((item, index) => {
    if (
      e.target.value.length - 1 == index &&
      !(
        e.target.value.length == 4 ||
        e.target.value.length == 9 ||
        e.target.value.length == 14
      )
    ) {
      x[index] = `<span class="active ${index}">${item}</span>`;
    } else {
      x[index] = `<span class="${index}">${item}</span>`;
    }
  });
  if (e.key === "Backspace" || e.key === "Delete") {
    if (
      !(
        e.target.value.length == 4 ||
        e.target.value.length == 9 ||
        e.target.value.length == 14
      )
    ) {
      x.splice(e.target.value.length, 1, "#");
    } else {
      x.splice(e.target.value.length + 1, 1, "#");
    }
  }
  var xx = x.join("");
  $("#" + e.target.id.slice(0, -2) + "Op").html(xx);
});
