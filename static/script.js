document.addEventListener('DOMContentLoaded', () => {
    // Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = content.classList.contains('active');

            // Close all other accordions
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.classList.remove('active');
                item.style.maxHeight = null;
                // Reset icon if you have one
                item.previousElementSibling.querySelector('.icon').textContent = '+';
            });

            if (!isActive) {
                content.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
                header.querySelector('.icon').textContent = '-';
            }
        });
    });


    // Population Chart
    const ctx = document.getElementById('populationChart');
    if (ctx) {
        const populationData = [
            { year: 1950, pop: 513000 }, { year: 1951, pop: 535000 }, { year: 1952, pop: 557000 }, { year: 1953, pop: 581000 }, { year: 1954, pop: 605000 },
            { year: 1955, pop: 631000 }, { year: 1956, pop: 658000 }, { year: 1957, pop: 685000 }, { year: 1958, pop: 714000 }, { year: 1959, pop: 745000 },
            { year: 1960, pop: 776000 }, { year: 1961, pop: 810000 }, { year: 1962, pop: 845000 }, { year: 1963, pop: 881000 }, { year: 1964, pop: 919000 },
            { year: 1965, pop: 959000 }, { year: 1966, pop: 1001000 }, { year: 1967, pop: 1044000 }, { year: 1968, pop: 1089000 }, { year: 1969, pop: 1136000 },
            { year: 1970, pop: 1182000 }, { year: 1971, pop: 1220000 }, { year: 1972, pop: 1260000 }, { year: 1973, pop: 1301000 }, { year: 1974, pop: 1343000 },
            { year: 1975, pop: 1386000 }, { year: 1976, pop: 1431000 }, { year: 1977, pop: 1478000 }, { year: 1978, pop: 1526000 }, { year: 1979, pop: 1575000 },
            { year: 1980, pop: 1625000 }, { year: 1981, pop: 1673000 }, { year: 1982, pop: 1722000 }, { year: 1983, pop: 1773000 }, { year: 1984, pop: 1826000 },
            { year: 1985, pop: 1879000 }, { year: 1986, pop: 1935000 }, { year: 1987, pop: 1992000 }, { year: 1988, pop: 2051000 }, { year: 1989, pop: 2111000 },
            { year: 1990, pop: 2184000 }, { year: 1991, pop: 2292000 }, { year: 1992, pop: 2406000 }, { year: 1993, pop: 2525000 }, { year: 1994, pop: 2650000 },
            { year: 1995, pop: 2781000 }, { year: 1996, pop: 2919000 }, { year: 1997, pop: 3064000 }, { year: 1998, pop: 3215000 }, { year: 1999, pop: 3375000 },
            { year: 2000, pop: 3522000 }, { year: 2001, pop: 3613000 }, { year: 2002, pop: 3706000 }, { year: 2003, pop: 3802000 }, { year: 2004, pop: 3900000 },
            { year: 2005, pop: 4001000 }, { year: 2006, pop: 4104000 }, { year: 2007, pop: 4210000 }, { year: 2008, pop: 4319000 }, { year: 2009, pop: 4430000 },
            { year: 2010, pop: 4544000 }, { year: 2011, pop: 4661000 }, { year: 2012, pop: 4782000 }, { year: 2013, pop: 4905000 }, { year: 2014, pop: 5032000 },
            { year: 2015, pop: 5162000 }, { year: 2016, pop: 5295000 }, { year: 2017, pop: 5432000 }, { year: 2018, pop: 5572000 }, { year: 2019, pop: 5689000 },
            { year: 2020, pop: 5803000 }, { year: 2021, pop: 5911000 }, { year: 2022, pop: 6013000 }, { year: 2023, pop: 6106000 }, { year: 2024, pop: 6193000 },
            { year: 2025, pop: 6272000 }
        ];

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: populationData.map(d => d.year),
                datasets: [{
                    label: 'Atlanta Metro Population',
                    data: populationData.map(d => d.pop),
                    borderColor: '#0476B3', // MARTA Blue
                    backgroundColor: 'rgba(4, 118, 179, 0.1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHoverRadius: 4,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            font: {
                                family: "'Helvetica Neue', Helvetica, Arial, sans-serif"
                            }
                        }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += new Intl.NumberFormat('en-US').format(context.parsed.y);
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            maxTicksLimit: 10
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            callback: function(value, index, values) {
                                return value / 1000000 + 'M';
                            }
                        }
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                }
            }
        });
    }


    // Scroll Reveal for Solution Cards
    // Removed previous observer logic as the new layout is full-screen and always visible
});
