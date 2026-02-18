const allCourses = document.querySelector('.all--product')
const curse = document.querySelector('.cours')
const courseMenu = document.querySelectorAll('.cours__menu')

allCourses.addEventListener('mouseenter', () => {
    curse.classList.add('active--cours')
})

courseMenu.forEach((menu) => {
    menu.addEventListener('mouseenter', () => {
        const courseItems = menu.querySelectorAll('.cours__item')
        console.log(courseItems);
        courseItems.forEach((item) => {
            item.classList.add('active--cours')
        })
    })
})

courseMenu.forEach((menu) => {
    menu.addEventListener('mouseleave', () => {
        const courseItems = menu.querySelectorAll('.cours__item')
        courseItems.forEach((item) => {
            item.classList.remove('active--cours')
        })
    })
})

