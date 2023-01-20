const canvasChart = document.getElementById('myChart');

document.querySelectorAll('.btn-check').forEach(btn => {
    btn.addEventListener('click', e => {
        geraGrafico[e.target.dataset.type]();
    });
});

let cores = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)'
];



/*
* types charts
    bar, bubble, doughnut, pie, line, polarArea, radar, scatter
*/
const geraGrafico = {
    criaGrafico: function (type) {
        if (window.myChart instanceof Chart) {
            window.myChart.destroy();
        }

        window.myChart = new Chart(canvasChart, type);
    },
    bar: function () {
        this.criaGrafico({
            type: 'bar',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
                datasets: [{
                        label: 'Vendas',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        borderWidth: 1
                    },
                    {
                        label: 'Compras',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        borderWidth: 1
                    }

                ]
            },
        });

    },
    bubble: function () {
        this.criaGrafico({
            type: 'bubble',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [{
                        x: 10,
                        y: 20,
                        r: 5
                    }, {
                        x: 15,
                        y: 10,
                        r: 10
                    }, {
                        x: 20,
                        y: 6,
                        r: 15
                    }, {
                        x: 25,
                        y: 12,
                        r: 20
                    }, {
                        x: 30,
                        y: 18,
                        r: 25
                    }, {
                        x: 35,
                        y: 30,
                        r: 30
                    }],
                    borderWidth: 1
                }]
            },
        });
    },
    doughnut: function () {
        this.criaGrafico({
            type: 'doughnut',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
                }]
            },
        });
    },
    line: function () {
        this.criaGrafico({
            type: 'line',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderWidth: 1
                }]
            },
            options: {
                animations: {
                    tension: {
                        duration: 30000,
                        easing: 'linear',
                        from: .2,
                        to: 0,
                        loop: true
                    }
                },
            }
        });
    },
    area: function () {
        this.criaGrafico({
            type: 'polarArea',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
                }]
            },
        });
    },
    radar: function () {
        this.criaGrafico({
            type: 'radar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: cores,
                    borderColor: cores,
                    borderWidth: 1
                }]
            },
        });
    },
    scatter: function () {
        this.criaGrafico({
            type: 'scatter',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [{
                        x: 10,
                        y: 20,
                        r: 5
                    }, {
                        x: 15,
                        y: 10,
                        r: 10
                    }, {
                        x: 20,
                        y: 6,
                        r: 15
                    }, {
                        x: 25,
                        y: 12,
                        r: 20
                    }, {
                        x: 30,
                        y: 18,
                        r: 25
                    }, {
                        x: 35,
                        y: 30,
                        r: 30
                    }],
                    borderWidth: 1
                }]
            },
        });
    },

    pie: function () {
        this.criaGrafico({
            type: 'pie',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
                }],
                hoverOffset: 4
            },

        });
    }
}