    // Contador animado de miembros activos
    let counter = 0;
    const interval = setInterval(() => {
      if (counter >= 500) clearInterval(interval);
      $('#counter').text(++counter);
    }, 20);