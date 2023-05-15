const tabBtn = $('.tab-button');
const tabContent = $('.tab-content');  


for (let i = 0; i < 3; i++){
    tabBtn.eq(i).on('click',function(){
    tabBtn.removeClass('orange');
    tabBtn.eq(i).addClass('orange');
    tabContent.removeClass('show');
    tabContent.eq(i).addClass('show');
    })
}