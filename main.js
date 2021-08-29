var cardNumOp = Object.assign([], $("#cardNumOp").html());
var cardNumOpArr = new Array();
for (y = 2021; y <= 2050; y++) {
  var optn = document.createElement("OPTION");
  optn.text = y;
  optn.value = y;
  document.getElementById("cardYearIp").options.add(optn);
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
  document.getElementById("cardMntIp").options.add(optn);
}
document.getElementById("cvvIp").addEventListener("click", function () {});
$(".inputField").click(function (e) {
  if (e.target.id == "cvvIp") {
    $("#card").addClass("active");
  } else {
    $("#card").removeClass("active");
  }
});

$("input").keyup(function (e) {
  var elem = this.id;
  var printOutput = this.value;
  if (elem == "cardNumIp") {
    findCard(this.value);
    this.value = this.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    if (this.value.length > 0) {
      $(this).val(
        $(this)
          .val()
          .replace(/[^0-9]/g, "")
          .match(/.{1,4}/g)
          .join(" ")
      );
    }
    if (e.key === "Backspace" || e.key === "Delete") {
      findCard(this.value);
      if (
        !(
          this.value.length == 4 ||
          this.value.length == 9 ||
          this.value.length == 14
        )
      ) {
        cardNumOp.splice(this.value.length, 1, "#");
      } else {
        cardNumOp.splice(this.value.length + 1, 1, "#");
      }
    }
    var y = this.value.split("");

    y.map((item, index) => {
      if (this.value.length - 1 == index) {
        cardNumOp[index] = `<span class="active ${index}">${item}</span>`;
      } else {
        cardNumOp[index] = `<span class="${index}">${item}</span>`;
      }
    });
    var printOutput = cardNumOp.join("");
  } else if (elem == "cvvIp") {
    printOutput = printOutput.replace(/[0-9]/g, "*");
  }
  printVal(elem, printOutput);
});
$("select").change(function (e) {
  var elem = this.id;
  var printOutput = this.value;
  if (this.value.length < 2) {
    printOutput = "0" + this.value;
  }
  if (elem == "cardYearIp") {
    printOutput = this.value.substr("-2");
  }
  printVal(elem, printOutput);
});

function printVal(elem, printValue) {
  $("#" + elem.slice(0, -2) + "Op").html(printValue);
}
function findCard(val) {
  switch (true) {
    case val.substr(0, 2) == 34 || val.substr(0, 2) == 37:
      $(".cardBrand").attr("src", "./images/unionpay.png");
      break;
    case val.substr(0, 2) > 50 && val.substr(0, 2) < 56:
      $(".cardBrand").attr("src", "./images/mastercard.png");
      break;
    case (val.length >= 4 && val.substr(0, 4) == 2131) ||
      val.substr(0, 2) == 1800:
      $(".cardBrand").attr("src", "./images/jcb.png");
      break;
    case val.substr(0, 1) >= 5 || val.substr(0, 4) == 6011:
      $(".cardBrand").attr("src", "./images/jcb.png");
      break;
    case (val.substr(0, 3) >= 300 && val.substr(0, 3) <= 305) ||
      val.substr(0, 2) == 38 ||
      val.substr(0, 2) == 36:
      $(".cardBrand").attr("src", "./images/dinersclub.png");
      break;
    default:
      $(".cardBrand").attr("src", "./images/visa.png");
  }
}
