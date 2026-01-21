window.addEventListener("message", (event) => {
    localStorage.setItem('style', event.data.styleSignal);
    localStorage.setItem('shadershidden', false);
    setTimeout(() => { location.reload(); }, 100);
});
