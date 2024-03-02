var selectedRow= null;

function onFormSubmit(event){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow == null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

// retrieve data
function readFormData(){
    var formData = {};
    formData["OrderBy"]= document.getElementById("OrderBy").value;
    formData["OrderName"]=document.getElementById("OrderName").value;
    formData["Quantity"]=document.getElementById("Quantity").value;
    formData["TotalAmount"]=document.getElementById("TotalAmount").value;
    formData["Status"]=document.getElementById("Status").value;
    return formData ;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length); //remove .rows
    cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.OrderBy;
    cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.OrderName;
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Quantity;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.TotalAmount;
    cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.Status;
    cell5 = newRow.insertCell(5);
        cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("OrderBy").value = selectedRow.cells[0].innerHTML;
    document.getElementById("OrderName").value  = selectedRow.cells[1].innerHTML;
    document.getElementById("Quantity").value = selectedRow.cells[2].innerHTML;
    document.getElementById("TotalAmount").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Status").value = selectedRow.cells[4].innerHTML;
}


function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.OrderBy;
    selectedRow.cells[1].innerHTML = formData.OrderName;
    selectedRow.cells[2].innerHTML = formData.Quantity;
    selectedRow.cells[3].innerHTML = formData.TotalAmount;
    selectedRow.cells[4].innerHTML = formData.Status;
}
//Delete the data
function onDelete(td){
    if(confirm("Do you really want to delete this record?")){
        var row = td.parentElement.parentElement;
        document.getElementById("storelist").deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm(){
    document.getElementById("OrderBy").value = "";
    document.getElementById("OrderName").value  = "";
    document.getElementById("Quantity").value = "" ;
    document.getElementById("TotalAmount").value = "";
    document.getElementById("Status").value = "";
    selectedRow = null;
}


//remove fix data from table
function removeItem(button) {
    button.parentElement.remove();
}