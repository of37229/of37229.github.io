window.addEventListener("message", (event) => {
    //debugger;
    if (event.orign == 'dglight.neocities.org'){
        localStorage.setItem('style', event.data.styleSignal);
        localStorage.setItem('shadershidden', false);
        setTimeout(() => { location.reload(); }, 100);
    }
});
