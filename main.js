let wrapper = document.querySelector('.wrapper')


let arr = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];


let Getsums = (arr) => {
    return arr.map((v)=> {
        let p = document.createElement('p')
        p.style.textAlign = 'center'
        p.innerHTML = v
        wrapper.appendChild(p)
        if (v>50 ) {
            p.style.backgroundColor = 'green'

        }
        else {
            p.style.backgroundColor = 'red'

        }
    })

}
Getsums(arr)