const player = document.getElementById('player');

const handleKeyDown = ({key}) => {
    if (key === 'ArrowUp') {
        player.classList.add('jump');
        setTimeout(() => player.classList.remove('jump'), 1000)
    } else if (key === 'ArrowRight') {
        player.style.left = +(player.style.left.replace('px', '')) + 20 + 'px'
    } else if (key === 'ArrowLeft') {
        player.style.left = +(player.style.left.replace('px', '')) - 20 + 'px'
    } else if (key === 'ArrowDown') {
        player.style.bottom = '-30px'
    }};

const handleKeyUp = ({key}) => {
    if (key === 'ArrowDown') {
        player.style.bottom = '0'
    }
};



document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
