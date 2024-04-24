var input = document.querySelector("#input");
var btn = document.querySelector("#btn");
var list = document.querySelector("#list");

btn.addEventListener("click", add_elt);
input.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        add_elt();
    }
});

function add_elt() {
    if (input.value != "") {
        let i = document.createElement("i");
        i.classList.add("fa-solid", "fa-xmark", "del");

        let p = document.createElement("p");
        p.textContent = input.value;

        let li = document.createElement("li");
        li.appendChild(p);
        li.appendChild(i);
        list.appendChild(li);
        input.value = "";

        li.addEventListener("click", function () {
            p.classList.toggle("line-through");
            i.classList.toggle("visible");
            
        });

        i.addEventListener("click", function () {
            li.classList.add("delete");
            setTimeout(() => {
                li.removeChild(i);
                li.removeChild(p);
                list.removeChild(li);
            }, 500);
        });
    }
}