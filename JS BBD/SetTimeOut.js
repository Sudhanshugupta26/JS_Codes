function fn1() {
    
    console.log("First")

}

function fn2() {
    
    console.log("Second")
    fn1()
}

function fn3() {

setTimeout(() => {
    console.log("Hello")
}, 3000)
fn2()
}
fn3()