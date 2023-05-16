const tabBtn = $('.tab-button');
const tabContent = $('.tab-content');  
const tabLength = $('.tab-button').length;

// for (let i = 0; i < tabLength; i++){
//     tabBtn.eq(i).on('click',function(){
//         tabBtn.removeClass('orange');
//         tabBtn.eq(i).addClass('orange');
//         tabContent.removeClass('show');
//         tabContent.eq(i).addClass('show');
//     })
// }

function openTab(num){
    tabBtn.removeClass('orange');
    tabBtn.eq(num).addClass('orange');
    tabContent.removeClass('show');
    tabContent.eq(num).addClass('show');
}


$('.list').click(function(e){

    openTab(e.target.dataset.id);

});
