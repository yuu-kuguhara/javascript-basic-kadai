let num = 225;
console.log(num);

if (num % 15 == 0) {
    console.log('3と5の倍数です');
}

else if (num % 3 == 0) {
    console.log('3の倍数です');
}

else if (num % 5 == 0) {
    console.log('5の倍数です');
}
// それ以外→numを出力
else {
    console.log(num);
}