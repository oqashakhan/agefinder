
function calculateAge() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    
    if (!day || !month || !year) {
        document.getElementById("result").removeAttribute("hidden");
        document.getElementById("result").innerText = "Please enter a valid date.";
        document.getElementById("result").style.color = "red"
        

        return;
    }
    
    let birthDate = new Date(year, month - 1, day);
    let today = new Date();
    
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
    
    if (ageDays < 0) {
        ageMonths--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate();
    }
    
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    document.getElementById("result").removeAttribute("hidden");
    // document.getElementById("result").innerText = `${ageYears} years ${ageMonths} months ${ageDays} days`;
    let yy = document.getElementById("yy").innerText=`${ageYears} -` ;
    let mm = document.getElementById("mm").innerText=`${ageMonths} -`;
    let dd = document.getElementById("dd").innerText=`${ageDays} -`;
}
