// bài 1:
function checkResult() {
  var benchmark = +document.getElementById("standard-score").value;
  var score1 = +document.getElementById("subject1-score").value;
  var score2 = +document.getElementById("subject2-score").value;
  var score3 = +document.getElementById("subject3-score").value;
  var region = document.getElementById("region-select").value;
  var target = document.getElementById("target-select").value;

  var totalScore = score1 + score2 + score3;

  // Kiểm tra nếu có môn thi bị điểm 0
  if (score1 === 0 || score2 === 0 || score3 === 0) {
    document.getElementById("result-message").textContent =
      "Rớt. Có môn thi bằng 0";
    document.getElementById("total-score").textContent =
      "Tổng điểm: " + totalScore;
  } else {
    var regionScore = 0;
    var targetScore = 0;

    // Tính điểm ưu tiên theo khu vực
    if (region === "A") {
      regionScore = 2;
    } else if (region === "B") {
      regionScore = 1;
    } else if (region === "C") {
      regionScore = 0.5;
    }

    // Tính điểm ưu tiên theo đối tượng
    if (target === "1") {
      targetScore = 2.5;
    } else if (target === "2") {
      targetScore = 1.5;
    } else if (target === "3") {
      targetScore = 1;
    }

    var totalScoreWithPriority = totalScore + regionScore + targetScore;

    if (totalScoreWithPriority >= benchmark) {
      document.getElementById("result-message").textContent =
        "Chúc mừng! Bạn đã đậu.";
    } else {
      document.getElementById("result-message").textContent =
        "Rất tiếc! Bạn đã rớt.";
    }

    document.getElementById("total-score").textContent =
      "Tổng điểm: " + totalScoreWithPriority;
  }

  document.getElementById("result-message").style.display = "block";
  document.getElementById("total-score").style.display = "block";
}
// -----------------------------------------------------------------------------
// bài 2:
document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateBill);
// Lấy giá trị nhập từ người dùng
function calculateBill() {
  var name = document.getElementById("name").value;
  var kWh = parseFloat(document.getElementById("kWh").value);
  // Xác định mức giá theo quy tắc
  var price = 0;
  if (kWh <= 50) {
    price = kWh * 500;
  } else if (kWh <= 100) {
    price = 50 * 500 + (kWh - 50) * 650;
  } else if (kWh <= 250) {
    price = 50 * 500 + 50 * 650 + (kWh - 100) * 850;
  } else if (kWh <= 350) {
    price = 50 * 500 + 50 * 650 + 100 * 850(kWh - 200) * 1100;
  } else {
    price = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kWh - 350) * 1300;
  }

  // Hiển thị kết quả
  var result = document.getElementById("result");
  result.innerHTML =
    "Tên khách hàng: " +
    name +
    "<br>" +
    "Số kWh tiêu thụ: " +
    kWh +
    "<br>" +
    "Tiền điện: " +
    price +
    " đồng";
}
// -----------------------------------------------------------------------------
// bài 3:
function calculateTax() {
  var fullname = document.getElementById("fullname").value;
  var income = +document.getElementById("income").value;
  var dependents = +document.getElementById("dependents").value;

  var taxableIncome = income - 4000000 - dependents * 1600000;
  var taxRate;
  var tax;

  if (taxableIncome <= 60000000) {
    taxRate = 0.05;
  } else if (taxableIncome <= 120000000) {
    taxRate = 0.1;
  } else if (taxableIncome <= 210000000) {
    taxRate = 0.15;
  } else if (taxableIncome <= 384000000) {
    taxRate = 0.2;
  } else if (taxableIncome <= 624000000) {
    taxRate = 0.25;
  } else if (taxableIncome <= 960000000) {
    taxRate = 0.3;
  } else {
    taxRate = 0.35;
  }

  tax = taxableIncome * taxRate;

  // Định dạng số tiền hiển thị
  var formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  var formattedTax = formatter.format(tax);
  // input kết quả
  var ketqua = document.getElementById("ketqua");
  ketqua.innerHTML =
    "Họ và tên: " +
    fullname +
    "<br>" +
    "Tiền thuế thu nhập cá nhân phải trả: " +
    formattedTax;
}
// -----------------------------------------------------------------------------
// bài 4
function calculateBills() {
  var customerCode = document.getElementById("customer-code").value;
  var customerType = document.getElementById("customer-type").value;
  var connections = 0;
  var premiumChannels = +document.getElementById("premium-channels").value;
  var bill = 0;
  // xác định loại khách hàng và tính toán hóa đơn tương ứng:
  if (customerType === "individual") {
    bill = 4.5 + 20.5 + 7.5 * premiumChannels;
  } else if (customerType === "business") {
    connections = +document.getElementById("connections").value;

    if (connections <= 10) {
      bill = 15 + 75 + 50 * premiumChannels;
    } else {
      bill = 15 + 75 + 5 * (connections - 10) + 50 * premiumChannels;
    }
  }
  // hiển thị kết quả hóa đơn:
  var billResult = document.getElementById("bill-result");
  billResult.innerHTML =
    "Mã khách hàng: " + customerCode + "<br>" + "Tiền cáp: $" + bill.toFixed(2);
}
// xử lý sự kiện thay đổi loại khách hàng và ẩn/hiện ô nhập số kết nối tương ứng:
function handleCustomerTypeChange() {
  var customerType = document.getElementById("customer-type").value;
  var connectionsLabel = document.getElementById("connections-label");
  var connectionsInput = document.getElementById("connections");

  if (customerType === "business") {
    connectionsLabel.classList.remove("hidden");
    connectionsInput.classList.remove("hidden");
  } else {
    connectionsLabel.classList.add("hidden");
    connectionsInput.classList.add("hidden");
  }
}
