var selectedRow= null;

function onFormSubmit(event){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["ProductCode"]= document.getElementById("ProductCode").value;
    formData["ProductName"]=document.getElementById("ProductName").value;
    formData["Quantity"]=document.getElementById("Quantity").value;
    formData["PerPrice"]=document.getElementById("PerPrice").value;
    formData["TotalAmount"]=document.getElementById("TotalAmount").value;
    return formData ;
}

function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);
    cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.ProductCode;
    cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.ProductName;
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Quantity;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.PerPrice;
    cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.TotalAmount;
    cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("ProductCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("ProductName").value  = selectedRow.cells[1].innerHTML;
    document.getElementById("Quantity").value = selectedRow.cells[2].innerHTML;
    document.getElementById("PerPrice").value = selectedRow.cells[3].innerHTML;
    document.getElementById("TotalAmount").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.ProductCode;
    selectedRow.cells[1].innerHTML = formData.ProductName;
    selectedRow.cells[2].innerHTML = formData.Quantity;
    selectedRow.cells[3].innerHTML = formData.PerPrice;
    selectedRow.cells[4].innerHTML = formData.TotalAmount;
}

function onDelete(td){
    if(confirm("Do you really want to delete this record?")){
        var row = td.parentElement.parentElement;
        document.getElementById("storelist").deleteRow(row.rowIndex);
    }
    resetForm();
}

function resetForm(){
    document.getElementById("ProductCode").value = "";
    document.getElementById("ProductName").value  = "";
    document.getElementById("Quantity").value = "" ;
    document.getElementById("PerPrice").value = "";
    document.getElementById("TotalAmount").value = "";
    selectedRow = null;
}