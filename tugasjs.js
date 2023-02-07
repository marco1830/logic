// Soal1

// let nilaiSantri = (prompt('berapa nilai MU'))

// if (nilaiSantri>=90 && nilaiSantri<=100) {
//     alert('Selamat Nilai Anda A')
// }else if (nilaiSantri>=80 && nilaiSantri<90) {
//     alert ('Selamat Nilai Anda B')
// }else if (nilaiSantri>=70 && nilaiSantri<80) {
//     alert ('Selamat Nilai Anda C')
// }else if (nilaiSantri>=60 && nilaiSantri<70) {
//     alert('Selamat Nilai Anda D')
// }else if  (nilaiSantri>=0 && nilaiSantri<60) {
//     alert('Anda Remedial')
// }else {
//     alert('coba lagi')
// }
    


// Soal2

// let menuMakanan =prompt('sunda, jawa, padang, bali')

// switch (menuMakanan) {
//     case "sunda":
//     alert ('Nasi Tutug Oncom, Nasi Timbel, Kupat Tahu');
//     break

//     case "jawa":
//     alert ('lumpia Semarang, Tahu Petis, Telur Asin');
//     break

//     case "padang":
//     alert ('Rendang, Ikan Asin Jambal, Ikan Siam Sambal Bawang');
//     break

//     case "bali":
//     alert ('Ayam Betutu, Bebek Betutu, Nasi Yasa');
//     break

//     default:
//     alert ('tidak ada dalam pencarian')
// }

// soal3

// let warungMakan = prompt('menu pilihan:Bakso, Mie, Seblak')
// if (warungMakan == 'bakso') {
//     let bakso = prompt('urat, sapi, keju')
//     alert('Tunggu Sebentar...')
// }
// if (warungMakan == 'mie') {
//     let mie =prompt ('Goreng, Kuah, Nyemek')
//     alert('Tunggu Sebentar...')
// }
// if (warungMakan=='seblak') {
//     let seblak = prompt('Ceker, Makaroni, Mie')
//     alert('Tunggu Sebentar...')
// }else {
//     alert('LIHAT MENU LISTNYA!!!')
// }





// latihan-1.js 
for (let n=0; n<9; n++ ){
        document.write('' +n *2)
    }
    document.write('<br><br>')
    
// latihan-2.js
for (let n=1; n<10; n++ ) {
    document.write('' +n*2 -1 )
}
document.write('<br>')
        
// latihan-3.js
for (let x =0; x<=5; x++){
        for (y=1; y<=x; y++){
                if (x+y) {
            document.write(y, '')
        }
    }document.write('<br>')
    
}
    document.write('<br>')

// latihan-4.js
for (let x = 0; x <9; x++) {
    for (let y = 0; y <9; y++) {
        if (x % 2 ==1) {
            document.write('+&nbsp')
        }else {
            document.write('-&nbsp' ,` `)
        }
    }document.write('<br>')
}
    document.write('<br>')

// latihan-5.js
let n = 9
for (let x =0; x < n; x++){
    for (let y =0; y < n; y++){
        if (y % 2 == 0){
            document.write('+ &nbsp') 
        }else {
        document.write('- &nbsp')
    }
         
    } document.write('<br>')
} 
    document.write('<br>')

// latihan-6.js
for (let x = 0; x <9; x++) {
    for (let y = 0; y < 9; y++) {
        if (x == y) {
            document.write('+&nbsp')
        }else {
            document.write('-&nbsp', ` `)
        }
    }document.write('<br>')
    
}
    document.write('<br>')

// latihan 7
for (let x = 1; x <=9; x++) {
    for (let y = 1; y <= 9; y++) {
        if (x+y ==10) {
            document.write('+ &nbsp')
        }else {
            document.write('- &nbsp')
        }
        
    }document.write('<br>')
}
    document.write('<br>')

// latihan 8
for (let x = 1; x <=9; x++) {
    for (let y = 1; y <= 9; y++) {
        if (x+y ==10) {
            document.write('+ &nbsp ')
        }else if (x == y) {
            document.write('+ &nbsp')
        } else {
            document.write('- &nbsp')
        }
        
    }document.write('<br>')
    
}
    document.write('<br>')


// latihan 9
for (let x = 0; x <9; x++) {
    for (let y = 0; y < 9; y++) {
        if (x >= y) {
            document.write('+&nbsp')
        }else {
            document.write('-&nbsp', ` `)
            }
        }document.write('<br>')
        
}
        document.write('<br>')

// latihan 10
for (let x = 0; x <9; x++) {
    for (let y = 0; y < 9; y++) {
        if (x <= y) {
            document.write('+&nbsp')
        }else {
            document.write('-&nbsp', ` `)
        }
        }document.write('<br>')
                
}
    document.write('<br>')
        


