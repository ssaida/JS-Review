console.log('Foor loop:');
for(let i=0;i<5;i++){
    console.log(i);
}
const names = ['Samer Saida','Omar Saida','Omar Assi'];
for(let i = 0;i < names.length;i++){
    let html = `<p>${names[i]}</p>`;
    console.log(html);
}
console.log('While loop:');
let i = 0;
while(i < 5){
    console.log(i);
    i++;
}
i = 0;
while(i < names.length){
    let html = `<p>${names[i]}</p>`;
    console.log(html);
    i++;
}