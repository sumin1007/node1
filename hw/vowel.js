let a = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";

for(let i = 0; i < a.length; i++){
    if ((a.charAt(i) == 'a') || (a.charAt(i) == 'e') || (a.charAt(i) == 'i') || (a.charAt(i) == 'o') || (a.charAt(i) == 'u') ||
    (a.charAt(i) == 'A') || (a.charAt(i) == 'E') || (a.charAt(i) == 'I') || (a.charAt(i) == 'O') || (a.charAt(i) == 'U')
    ){
        console.log(i);
    }
}