let myLeads = ["www.somafm.com", "www.google.com", "www.blackcoffee.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")

console.log(ulEl)

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
})

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}