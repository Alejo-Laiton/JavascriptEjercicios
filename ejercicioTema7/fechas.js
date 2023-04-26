const today = new Date();
console.log(today)

const birthDay = new Date("16 january 1997");
console.log(birthDay)

const isAfter = (today > birthDay);
console.log(isAfter)

function dayNames (fecha){
    const daysWeek = {
        0: 'Domingo',
        1: 'Lunes',
        2: 'Martes',
        3: 'Miercoles',
        4: 'Jueves',
        5: 'Viernes',
        6: 'Sábado'

    }; 
    
    return daysWeek[fecha.getDay()]
}

const dayName = dayNames(birthDay)
console.log(dayName)

const day = birthDay.getDate();
console.log(day)

const month = birthDay.getMonth() + 1;
console.log(month)

const year = birthDay.getFullYear();
console.log(year)