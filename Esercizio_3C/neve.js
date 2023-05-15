function createSnowflake() {
	const snowflake = document.createElement('div');
	snowflake.classList.add('snowflake');
	snowflake.style.left = Math.random() * window.innerWidth + 'px';
	snowflake.style.bottom = window.innerHeight + 20 + 'px';
	snowflake.style.animationDelay = Math.random() * 5 + 's';
	document.body.appendChild(snowflake);
	setTimeout(() => {
		snowflake.remove();
	}, 5000);
}

setInterval(createSnowflake, 100);

function createBlizzard() {
    setInterval(() => {
        for (let i = 0; i < 50; i++) {
            createSnowflake();
        }
    }, 250);
}

createBlizzard();
