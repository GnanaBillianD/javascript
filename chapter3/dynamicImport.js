element.addEventListener('click', async() => {
    const module = await import('./api-scripts/click.js');
    module.clickEvent();
});