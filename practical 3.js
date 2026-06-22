area1 = document.getElementById("area1");

area2 = document.getElementById("area2");
area2.style.display = "none";

changeButton = document.getElementById("c-btn");


tBox1 = document.getElementById("t-box-1");

tBox2 = document.getElementById("t-box-2");


addBtn = document.getElementById("add-button");

changeButton.addEventListener("click", () => {
    if (area1.style.display != "none") {
        area1.style.display = "none";
        area2.style.display = "block"
    } else {
        area1.style.display = "block";
        area2.style.display = "none"
    }
});

addBtn.addEventListener("click", addTask);

function addTask() {
    taskName = tBox1.value;
    task = tBox2.value;
    if (taskName == "" || task == "") {
        alert("enter task name and task to add");
        return 0;
    }
    let taskDiv = document.createElement("div");
    taskDiv.classList = "flex items-center justify-between border w-80";
    let tNamePara = document.createElement("p");
    tNamePara.innerText = taskName;

    let tPara = document.createElement("p");
    tPara.innerText = task;

    doneBtn = document.createElement("button");
    doneBtn.innerText = "✅";
    doneBtn.addEventListener("click", () => {
        taskDiv.classList.toggle("bg-gray-400");
        tNamePara.classList.toggle("line-through");
        tPara.classList.toggle("line-through");

    });

    let delBtn = document.createElement("button");
    delBtn.innerText = "🗑️";
    delBtn.addEventListener("click", () => {
        taskDiv.remove();

    });

    taskDiv.appendChild(tNamePara);
    taskDiv.appendChild(tPara);
    taskDiv.appendChild(doneBtn);
    taskDiv.appendChild(delBtn);

    area2.appendChild(taskDiv);

    input.value = "";

}