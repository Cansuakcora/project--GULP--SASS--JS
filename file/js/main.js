//! ----- SPEAKERS SHOW/HIDE ----- //!
let btnagenda1 = document.querySelector('#btn-agenda-list-1');
let btnagenda2 = document.querySelector('#btn-agenda-list-2');
let agendaGroup1 = document.querySelector('#agenda-group-1');
let agendaGroup2 = document.querySelector('#agenda-group-2');

btnagenda1.addEventListener('click', function () {
    // Button class
    btnagenda2.classList.remove('schedule__date-buttons--active');
    btnagenda1.classList.add('schedule__date-buttons--active');

    // Speaker group
    agendaGroup2.classList.add('speakers__hide');
    agendaGroup2.classList.remove('speakers__show');

    setTimeout(function () {
        agendaGroup2.classList.add('d-none');
    }, 500);

    agendaGroup1.classList.remove('speakers__hide');
    agendaGroup1.classList.add('speakers__show');

    setTimeout(function () {
        agendaGroup1.classList.remove('d-none');
    }, 500);
});

btnagenda2.addEventListener('click', function () {
    // Button class

    btnagenda1.classList.remove('schedule__date-buttons--active');
    btnagenda2.classList.add('schedule__date-buttons--active');

    // Speaker group
    agendaGroup1.classList.remove('speakers__show');
    agendaGroup1.classList.add('speakers__hide');

    setTimeout(function () {
        agendaGroup1.classList.add('d-none');
    }, 300);

    agendaGroup2.classList.remove('speakers__hide');
    agendaGroup2.classList.add('speakers__show');

    setTimeout(function () {
        agendaGroup2.classList.remove('d-none');
    }, 300);
});


//! ----- SPEAKERS SHOW/HIDE ----- //!