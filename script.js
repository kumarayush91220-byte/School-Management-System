// 1. HOME BUTTON
function goHome() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// 2. MODULES BUTTON
function goToModules() {
    const modules = document.getElementById("modules");

    if (modules) {
        modules.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

}

// 3. ABOUT SCHOOL BUTTON
function goToAbout() {
    const about = document.getElementById("about");
    if (about) {
        about.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// 4. CONTACT US BUTTON
function goToContact() {
    const contact = document.getElementById("contact");
    if (contact) {
        contact.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


// 5. LOGIN BUTTON
function openLogin() {
    const login = document.getElementById("login");
    if (login) {
        login.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    } else {
        alert("Login module is not available yet.");
    }
}

// 6. MODULE ACCESS
function accessModule(moduleName) {
    alert(moduleName + " module will be available here.");
}

// 7. STUDENT MODULE
function openStudentModule() {
    const studentModule =
        document.getElementById("studentModule");
    if (!studentModule) {
        alert("Student Management module not found.");
        return;
    }
    // Hide homepage sections
    const hero = document.querySelector(".hero");
    const modules = document.getElementById("modules");
    const about = document.getElementById("about");
    const principal = document.querySelector(".principal-section");
    const vice = document.querySelector(".vice-section");
    const alumni = document.querySelector(".alumni-section");
    const footer = document.querySelector(".footer");
    const contact = document.getElementById("contact");

    if (hero) hero.style.display = "none";
    if (modules) modules.style.display = "none";
    if (about) about.style.display = "none";
    if (principal) principal.style.display = "none";
    if (vice) vice.style.display = "none";
    if (alumni) alumni.style.display = "none";
    if (footer) footer.style.display = "none";
    if (contact) contact.style.display = "none";

    // Show Student Management
    studentModule.style.display = "block";
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    loadStudents();
}

// 8. TEACHER MODULE
function openTeacherModule() {
    accessModule("Teacher & Staff Management");
}

// 9. ATTENDANCE MODULE
function openAttendanceModule() {
    accessModule("Attendance & Daily Records");
}

// 10. CLASS MODULE
function openClassModule() {
    accessModule("Class & Academic Management");
}

// 11. FEE MODULE
function openFeeModule() {
    accessModule("Fee & Payment Management");
}

// 12. OPEN LOGIN
function openLogin() {
    const loginModal = document.getElementById("loginModal");
    if (loginModal) {
        loginModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

// 13. CLOSE LOGIN
function closeLogin() {
    const loginModal = document.getElementById("loginModal");
    if (loginModal) {
        loginModal.style.display = "none";
        document.body.style.overflow = "";
    }
}

// 14. TOGGLE PASSWORD
function togglePassword() {
    const password = document.getElementById("password");
    if (!password) return;
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

// 15. LOGIN USER
function loginUser(event) {
    event.preventDefault();
    const username =
        document.getElementById("username").value.trim();
    const password =
        document.getElementById("password").value.trim();
    const role =
        document.getElementById("userRole").value;

    // Demo Admin Account
    if (
        username === "admin" &&
        password === "admin123" &&
        role === "admin"
    ) {
        localStorage.setItem("loggedInUser", username);
        localStorage.setItem("userRole", role);
        closeLogin();
        showDashboard(username, role);
        return;
    }
    alert(
        "Invalid login details.\n\n" +
        "Demo Admin Login:\n" +
        "Username: admin\n" +
        "Password: admin123"
    );
}

// 16. SHOW DASHBOARD
function showDashboard(username, role) {
    const dashboard =
        document.getElementById("userDashboard");
    const welcomeMessage =
        document.getElementById("welcomeMessage");
    const dashboardUser =
        document.getElementById("dashboardUser");
    const dashboardRole =
        document.getElementById("dashboardRole");
    if (!dashboard) return;
    dashboardUser.textContent = username;
    dashboardRole.textContent =
        role.charAt(0).toUpperCase() + role.slice(1);
    welcomeMessage.textContent =
        "You have successfully logged in as " +
        role.charAt(0).toUpperCase() +
        role.slice(1) +
        ".";
    dashboard.style.display = "flex";
    document.body.style.overflow = "hidden";
}

// 17. CLOSE DASHBOARD
function closeDashboard() {
    const dashboard =
        document.getElementById("userDashboard");
    if (dashboard) {
        dashboard.style.display = "none";
        document.body.style.overflow = "";
    }
}

// 18. LOGOUT
function logoutUser() {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userRole");
    closeDashboard();
    alert("You have been logged out successfully.");
}

// 19. CHECK LOGIN STATUS
function checkLoginStatus() {
    const loggedInUser =
        localStorage.getItem("loggedInUser");
    const role =
        localStorage.getItem("userRole");
    if (loggedInUser && role) {
        console.log(
            "Logged in user: " +
            loggedInUser +
            " | Role: " +
            role
        );
    } else {
        console.log(
            "No user is currently logged in."
        );
    }
}

// 15. PAGE LOADED
document.addEventListener("DOMContentLoaded", function () {
    console.log(
        "Green Valley Public School Management System loaded successfully."
    );
    checkLoginStatus();
});

// HOME
function goHome() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// MODULES
function goToModules() {
    const section = document.getElementById("modules");
    if (section) section.scrollIntoView({ behavior: "smooth" });
}

// ABOUT SCHOOL
function goToAbout() {
    const section = document.getElementById("about");
    if (section) section.scrollIntoView({ behavior: "smooth" });
}

// CONTACT
function goToContact() {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
}

// LOGIN
function openLogin() {

    const loginModal =
        document.getElementById("loginModal");

    if (loginModal) {
        loginModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function loginUser() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    if (!username || !password) {
        alert("Login form not found.");
        return;
    }
    if (username.value.trim() === "" || password.value.trim() === "") {
        alert("Please enter username and password.");
        return;
    }
    localStorage.setItem("loggedInUser", username.value.trim());
    alert("Login successful!");
}

function logoutUser() {
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
}

// STUDENT MODULE
function openStudentModule() {
    const section = document.getElementById("studentModule");
    if (section) {
        section.style.display = "block";
        section.scrollIntoView({ behavior: "smooth" });
    }
}

function closeStudentModule() {
    const section = document.getElementById("studentModule");
    if (section) {
        section.style.display = "none";
        goHome();
    }
}

// TEACHER MODULE
function openTeacherModule(){
    const teacher =
        document.getElementById("teacherManagementModal");
    if(teacher){
        teacher.style.display = "flex";
        teacher.scrollIntoView({
            behavior:"smooth"
        });
    }
}
function closeTeacherModule(){
    const teacher =
        document.getElementById("teacherManagementModal");
    if(teacher){
        teacher.style.display = "none";
    }
}

// ATTENDANCE MODULE
function openAttendanceModule() {
    const section = document.getElementById("attendanceModule");
    if (section) {
        section.style.display = "block";
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        document.getElementById("attDate").value =
            new Date().toISOString().split("T")[0];
    }
}

function closeAttendance() {
    const section = document.getElementById("attendanceModule");
    if (section) {
        section.style.display = "none";
        goHome();
    }
}

// Load students
function loadAttendance() {
    const students =
        JSON.parse(localStorage.getItem("students")) || [];
    const list =
        document.getElementById("attendanceList");
    if (!list) return;
    list.innerHTML = "";
    if (students.length === 0) {
        list.innerHTML =
            "<tr><td colspan='3'>No students found.</td></tr>";
        return;
    }

    students.forEach((student, index) => {
        list.innerHTML += `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>
                <select id="status${index}">
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                </select>
            </td>
        </tr>`;
    });
}

// Save attendance
function saveAttendance() {
    const students =
        JSON.parse(localStorage.getItem("students")) || [];
    if (students.length === 0) {
        alert("Please add students first.");
        return;
    }

    const date =
        document.getElementById("attDate").value;
    const className =
        document.getElementById("attClass").value;
    if (!date || !className) {
        alert("Please select date and class.");
        return;
    }

    const attendance = students.map((student, index) => {
        return {
            id: student.id,
            name: student.name,
            status:
                document.getElementById("status" + index).value
        };
    });

    let records =
        JSON.parse(localStorage.getItem("attendance")) || [];
    records.push({
        date: date,
        className: className,
        students: attendance
    });

    localStorage.setItem(
        "attendance",
        JSON.stringify(records)
    );
    alert("Attendance saved successfully!");
}

// CLASS MODULE
function openClassModule() {
    alert("Class & Academic Management module opened.");
}

// FEE MODULE
function openFeeModule() {
    alert("Fee & Payment Management module opened.");
}

// PAGE LOADED
document.addEventListener("DOMContentLoaded", function () {
    console.log(
        "Green Valley Public School Management System loaded."
    );
});

// MODULE 5 - CLASS MANAGEMENT
function openClassModule(){
    const section =
        document.getElementById("classModule");
    if(section){
        section.style.display = "block";
        section.scrollIntoView({
            behavior:"smooth"
        });
        loadClasses();
    }
}

function closeClassModule(){
    document.getElementById("classModule")
        .style.display = "none";
    goHome();
}

function addClass(){
    const name =
        document.getElementById("className").value.trim();
    const section =
        document.getElementById("classSection").value;
    const teacher =
        document.getElementById("classTeacher").value.trim();
    if(!name || !section || !teacher){
        alert("Please fill all fields.");
        return;
    }

    let classes =
        JSON.parse(localStorage.getItem("classes")) || [];
    classes.push({
        name:name,
        section:section,
        teacher:teacher
    });
    localStorage.setItem(
        "classes",
        JSON.stringify(classes)
    );
    document.getElementById("className").value = "";
    document.getElementById("classSection").value = "";
    document.getElementById("classTeacher").value = "";
    loadClasses();
    alert("Class added successfully!");
}

function loadClasses(){
    const list =
        document.getElementById("classList");
    if(!list) return;
    const classes =
        JSON.parse(localStorage.getItem("classes")) || [];
    list.innerHTML = "";
    classes.forEach((item,index)=>{
        list.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td>${item.section}</td>
            <td>${item.teacher}</td>
            <td>
                <button onclick="deleteClass(${index})">
                    Delete
                </button>
            </td>
        </tr>`;
    });
}

function deleteClass(index){
    let classes =
        JSON.parse(localStorage.getItem("classes")) || [];
    classes.splice(index,1);
    localStorage.setItem(
        "classes",
        JSON.stringify(classes)
    );
    loadClasses();
}

// MODULE 6 - FEE MANAGEMENT
function openFeeModule(){
    const section =
        document.getElementById("feeModule");
    if(section){
        section.style.display = "block";
        section.scrollIntoView({
            behavior:"smooth"
        });
        loadFees();
    }
}

function closeFeeModule(){
    document.getElementById("feeModule")
        .style.display = "none";
    goHome();
}

function addFee(){
    const id =
        document.getElementById("feeStudent").value.trim();
    const name =
        document.getElementById("feeName").value.trim();
    const amount =
        document.getElementById("feeAmount").value;
    const status =
        document.getElementById("feeStatus").value;
    if(!id || !name || !amount || !status){
        alert("Please fill all fields.");
        return;
    }

    let fees =
        JSON.parse(localStorage.getItem("fees")) || [];
    fees.push({
        id:id,
        name:name,
        amount:amount,
        status:status
    });
    localStorage.setItem(
        "fees",
        JSON.stringify(fees)
    );
    document.getElementById("feeStudent").value = "";
    document.getElementById("feeName").value = "";
    document.getElementById("feeAmount").value = "";
    document.getElementById("feeStatus").value = "";
    loadFees();
    alert("Payment added successfully!");
}

function loadFees(){
    const list =
        document.getElementById("feeList");
    if(!list) return;
    const fees =
        JSON.parse(localStorage.getItem("fees")) || [];
    list.innerHTML = "";
    fees.forEach((fee,index)=>{
        list.innerHTML += `
        <tr>
            <td>${fee.id}</td>
            <td>${fee.name}</td>
            <td>₹${fee.amount}</td>
            <td>${fee.status}</td>
            <td>
                <button onclick="deleteFee(${index})">
                    Delete
                </button>
            </td>
        </tr>`;
    });
}

function deleteFee(index){
    let fees =
        JSON.parse(localStorage.getItem("fees")) || [];
    fees.splice(index,1);
    localStorage.setItem(
        "fees",
        JSON.stringify(fees)
    );
    loadFees();
}