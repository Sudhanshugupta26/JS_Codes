function fn1(callback) {
    
    callback()
    console.log("1st")
}
function fn2(callback) {
    
    callback()
    console.log("2nd")
}
function fn3(callback) {
    
    callback()
    console.log("3rd")
}
function fn4(callback) {
    
    callback()
    console.log("4th")
}
fn4(()=>{
    fn3(()=>{
        fn2(()=>{
            fn1(()=>{
                console.log("End")
            })
        })
    })
})