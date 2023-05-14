const tabBtn = $('.tab-button');
const tabContent = $('.tab-content');  

tabBtn.eq(0).on('click',function(){
    tabBtn.removeClass('orange');
    tabBtn.eq(0).addClass('orange');
    tabContent.removeClass('show');
    tabContent.eq(0).addClass('show');
})

tabBtn.eq(1).on('click',function(){
    tabBtn.removeClass('orange');
    tabBtn.eq(1).addClass('orange');
    tabContent.removeClass('show');
    tabContent.eq(1).addClass('show');
})

tabBtn.eq(2).on('click',function(){
    tabBtn.removeClass('orange');
    tabBtn.eq(2).addClass('orange');
    tabContent.removeClass('show');
    tabContent.eq(2).addClass('show');
})