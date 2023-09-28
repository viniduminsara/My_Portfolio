const items = $('.item');
const start = $('.start');
const stop = $('.stop');
const count = 7;
let lightCount = 0;
let direction = 'Right';
let intervalId;

let style = {
    background: 'red',
    boxShadow: '0px 0px 20px red'
}

let style2 = {
    background: 'white',
    boxShadow: 'none'
}

start.on('click', () => {

    intervalId = setInterval(() => {
        $('#audio')[0].play();
        items.css(style2);

        if (direction === 'Right') {
            lightCount++
            items.eq(lightCount-1).css('background', 'hotpink');
            items.eq(lightCount).css(style);
            items.eq(lightCount+1).css('background', 'hotpink');
            if (lightCount === count - 1){
                direction = 'Left';
            }
        }else{
            lightCount--
            if (lightCount === 0){
                direction = 'Right';
                items.eq(lightCount + 1).css('background', 'hotpink');
                items.eq(lightCount).css(style);
            }else {
                items.eq(lightCount + 1).css('background', 'hotpink');
                items.eq(lightCount).css(style);
                items.eq(lightCount - 1).css('background', 'hotpink');
            }
        }
    },100);

});

stop.on('click', () => {
    clearInterval(intervalId);
    $('#audio')[0].pause();
});