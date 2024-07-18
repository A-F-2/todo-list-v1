let $ = document

let inputElem = $.querySelector("#input")

let deletorElem = $.querySelectorAll(".fa.fa-trash-o.delete")

let ulElem = $.querySelector("#ul")

let formElem = $.querySelector("#form")

formElem.addEventListener("submit" , function (event) {
    event.preventDefault()
})

inputElem.addEventListener("keydown" , function (event) {
    if(inputElem.value !="") {
            if (event.key === "Enter") {
                let spanElem = $.createElement("span")
                let iElem = $.createElement("i")
                let liElem = $.createElement("li")
                iElem.setAttribute("class" , "fa fa-trash-o delete")
                liElem.setAttribute("class" , "list-group-item d-flex justify-content-between align-items-center")
                iElem.addEventListener("click" , function (event) {
            event.target.parentElement.remove()
                })
                spanElem.innerHTML = inputElem.value
                liElem.append(spanElem)
                liElem.append(iElem)
                ulElem.append(liElem)
                inputElem.value = ""
            }
    }   else {
        inputElem.value = ""
    }
})

deletorElem.forEach(function (deletor) {
    deletor.addEventListener("click" , function (event) {
        event.target.parentElement.remove()
    })
})