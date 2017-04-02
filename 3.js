console.assert(generate.tagName === 'BUTTON')
generate.onclick = function () {
    var w1 = word1.value
    var w2 = word2.value
    var w3 = word3.value
    var w4 = word4.value
    var w5 = word5.value
    var w6 = word6.value
    var w7 = word7.value

    p1.innerText = w1
    p2.innerText = w2
    p3.innerText = w3
    p4.innerText = w4
    p5.innerText = w5
    p6.innerText = w6
    p7.innerText = w7
}
console.log("done")
