function openTab(tabName) {
  var i, tabContent;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

function submitForm(event) {
  event.preventDefault();

  var nama = document.getElementById("nama").value;
  var umur = document.getElementById("umur").value;
  var uangsangu = document.getElementById("uangsangu").value;

  if (nama.length < 10 || umur < 25 || uangsangu < 100000 || uangsangu > 1000000) {
    alert("Data tidak memenuhi kriteria. Silakan periksa kembali.");
    return;
  }

  // Simpan data ke tabel List Pendaftar
  var table = document.getElementById("pendaftarTable").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.rows.length);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  cell1.innerHTML = nama;
  cell2.innerHTML = umur;
  cell3.innerHTML = uangsangu;
  cell4.innerHTML = "Resume pendaftar";

  // Hitung rata-rata umur dan uang sangu
  var pendaftarCount = table.rows.length;
  var totalUmur = 0;
  var totalUangSangu = 0;

  for (var i = 0; i < pendaftarCount; i++) {
    totalUmur += parseInt(table.rows[i].cells[1].innerHTML);
    totalUangSangu += parseInt(table.rows[i].cells[2].innerHTML);
  }

  var rataRataUmur = totalUmur / pendaftarCount;
  var rataRataUangSangu = totalUangSangu / pendaftarCount;

  // Update resume
  document.getElementById("resume").innerHTML = "Rata-rata pendaftar memiliki uang sangu sebesar " + rataRataUangSangu.toFixed(2) + " dengan rata-rata umur " + rataRataUmur.toFixed(2);
}
