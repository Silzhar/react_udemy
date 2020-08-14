function sumaPura (a, b) {
    return a + b
}

function sumaImpura (a, b) {
    return a + b + Math.random()
}

let ext = 2
function sumaImpura2 (a, b, ext) {
    ext = a + b 
    return ext
}