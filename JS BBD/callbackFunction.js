function fn1() {
    console.log("First")
}
function fn2(callback) {
    console.log("Second")
    callback()
}
fn2(fn1)
