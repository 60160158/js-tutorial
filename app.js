// console.log('before')
// setTimeout(() => {
//     console.log("3sec")
// }, 3000);
// console.log("after")
function a() {
    console.log('before')

} function b() {
    setTimeout(() => {
        console.log("3sec")
    }, 3000);
} function c() {
    console.log("after")

}
callbackpond(a,b,c)
function callbackpond(a, b, c) {
    b()
    a()
    c()
}



