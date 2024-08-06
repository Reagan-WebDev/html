const cars = [{make: "Nissan", model: "Dayz", year: 2017},
                {make: "Mazda", model: "Atenza", year: 2023},
                {make: "Honda", model: "Fit", year: 2018},
                {make: "Toyota", model: "Passo", year: 2021}
]
cars.sort((a, b) => a.year - b.year);
cars.sort((a, b) => a.make.localeCompare(b.make));
console.log(cars);
console.log(cars);