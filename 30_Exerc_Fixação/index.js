
document.querySelector(".btn_form").addEventListener('click', dispara);


function dispara(){
    var name = document.querySelector(".first_name").value;
    var last = document.querySelector(".last_name").value;
    var fullname = name +" "+ last;

    document.querySelector(".namefull").textContent = fullname;
}

