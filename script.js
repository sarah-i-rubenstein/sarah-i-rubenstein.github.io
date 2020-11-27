function displaySubmitMessage() {
    let nameVal = document.getElementById("fname").value;
    let title =  document.getElementById("title").value;
    let message = "Thank you, " + nameVal + ", for recommending " + title;
    document.getElementById("showMessage").innerHTML = message;
    event.preventDefault();
  }
  
  function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }