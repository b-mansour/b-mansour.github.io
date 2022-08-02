const list_of_numbers = document.getElementById("list-of-numbers");
list_of_numbers.addEventListener("change", createListNumbers);

const divide_by = document.getElementById("divide-by");
divide_by.addEventListener("change", createListNumbers);



function createListNumbers() {

    const ul = document.getElementById("list-numbers");
    
    ul.innerHTML = '';

    var result_li = document.createElement('li');

    result_li.setAttribute('class','results');
    result_li.innerHTML = '<h1> Results </h1>'
    ul.appendChild(result_li);


    for(let i = 1; i <= list_of_numbers.value; i++){

        var li = document.createElement('li');

        li.setAttribute('class','item');

        ul.appendChild(li);

        li.innerHTML = i + " = " + i / divide_by.value;

    }

}



 
