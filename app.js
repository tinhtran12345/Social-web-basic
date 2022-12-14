const menuItems = document.querySelectorAll('.menu-item');
const message = document.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search');








const changeActiveItem = () =>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id !=='notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display ='none';

        }
    })
})




// const searchMessage = ()=>{
//     const val = messageSearch.value.toLowerCase();
//     console.log(val);
//     message.forEach(chat => {
//         let name = chat.querySelectorAll('h5').textContent.toLowerCase();
//         if(name.indexOf(val)!==-1){
//             chat.style.display = 'flex';
//         } else{
//             chat.style.display = 'none';
//         }


//     })
// }

// messageSearch.addEventListener('keyup', searchMessage);


// Theme 

const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')

const openThemeModal = ()=>{
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) =>{
    if(e.target.classList.contains('card')){
        themeModal.style.display = 'none';
    }
}

theme.addEventListener('click', openThemeModal);
theme.addEventListener('click', closeThemeModal);


const fontSizes = document.querySelectorAll('.choose-size');
console.log(fontSizes)

fontSizes.forEach(size =>{
    let fontSize;
    if(size.classList.contains('font-size-1')){
        fontSize='10px';
    }

    document.querySelector('html').style.fontsize = fontSize;

})
