// factorial usando el comando break

let num = 10;
let i = num - 1;

buclefactorial: while (true) {

    num = num * i;
    if (i <= 1) {
        console.log(num)
        break buclefactorial;
    }
    i--
}
