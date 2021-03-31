// array

const dataMahasiswa = [
    {
        nama : 'Deva Aji Saputra',
        npm : '19421075',
        prodi : 'informatika'
    },
    {
        nama : 'Anangga',
        npm : '19421088',
        prodi : 'Akuintansi'  
    }
]
    for (let i in dataMahasiswa){
        console.log(dataMahasiswa[i].nama + '-' + dataMahasiswa[i].npm + '-' + dataMahasiswa[i].prodi)
    }