let birthYear = prompt("Введите ваш год рождения:");

if (!isNaN(birthYear) && birthYear > 0) {
    
    let currentYear = new Date().getFullYear();
    
    
    let age = currentYear - birthYear;

    
    console.log("Ваш возраст: " + age + " лет.");
} else {
    console.log("Пожалуйста, введите корректный год рождения.");
}
