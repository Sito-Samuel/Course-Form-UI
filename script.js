var selectedCourses = []; // global variable
function calculateTotalCredits() {
  var checkboxes = document.querySelectorAll(
    'input[type="checkbox"][name="course"]:checked'
  );

  for (var i = 0; i < checkboxes.length; i++) {
    var courseName = checkboxes[i].value.toLowerCase();
    var selectedCourse = courses.find(function (course) {
      return course.name.toLowerCase() === courseName;
    });

    if (selectedCourse) {
      selectedCourses.push(selectedCourse);
    }
  }

  populateModalTable(selectedCourses);
  openModal();
}

function populateModalTable(selectedCourses) {
  var modalTableBody = document.getElementById("modalTableBody");
  modalTableBody.innerHTML = "";

  var totalCredits = 0;

  selectedCourses.forEach(function (course) {
    var row = document.createElement("tr");
    var courseCodeCell = document.createElement("td");
    var courseTitleCell = document.createElement("td");
    var creditsCell = document.createElement("td");
    var courseLecturer = document.createElement("td");

    courseCodeCell.textContent = course.name.toUpperCase();
    courseTitleCell.textContent = course.title;
    creditsCell.textContent = course.credit;
    courseLecturer.textContent = course.lecturer;
    row.appendChild(courseCodeCell);
    row.appendChild(courseTitleCell);
    row.appendChild(creditsCell);
    row.appendChild(courseLecturer);

    modalTableBody.appendChild(row);

    totalCredits += course.credit;
  });

  document.getElementById("totalCredits").textContent =
    "Total Credits: " + totalCredits;
}

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function Input() {
  location.href = "./index.html";
}
