document.addEventListener('DOMContentLoaded', () => {
    const elements = [
      { number: 1, symbol: 'H', name: 'Hydrogen', type: 'non-metal',x: 1, y: 1 },{ number: 2, symbol: 'He', name: 'Helium', type: 'noble-gas',x: 18, y: 1 },{ number: 3, symbol: 'Li', name: 'Lithium', type: 'alkali-metal',x: 1, y: 2 },{ number: 4, symbol: 'Be', name: 'Beryllium', type: 'alkaline-earth',x: 2, y: 2 },{ number: 5, symbol: 'B', name: 'Boron', type: 'semi-metal',x: 13, y: 2 }, { number: 6, symbol: 'C', name: 'Carbon', type: 'non-metal',x: 14, y: 2 },{ number: 7, symbol: 'N', name: 'Nitrogen', type: 'non-metal',x: 15, y: 2 },{ number: 8, symbol: 'O', name: 'Oxygen', type: 'non-metal',x: 16, y: 2 }, { number: 9, symbol: 'F', name: 'Fluorine', type: 'halogen',x: 17, y: 2 }, { number: 10, symbol: 'Ne', name: 'Neon', type: 'noble-gas',x: 18, y: 2 }, { number: 11, symbol: 'Na', name: 'Sodium',  type: 'alkali-metal',x: 1, y: 3 }, { number: 12, symbol: 'Mg', name: 'Magnesium', type: 'alkaline-earth',x: 2, y: 3 }, { number: 13, symbol: 'Al', name: 'Aluminium', type: 'basic-metal',x: 13, y: 3 }, { number: 14, symbol: 'Si', name: 'Silicon', type: 'semi-metal',x: 14, y: 3 }, { number: 15, symbol: 'P', name: 'Phosphorus', type: 'non-metal',x: 15, y: 3 }, { number: 16, symbol: 'S', name: 'Sulfur', type: 'non-metal',x: 16, y: 3 }, { number: 17, symbol: 'Cl', name: 'Chlorine', type: 'halogen',x: 17, y: 3 }, { number: 18, symbol: 'Ar', name: 'Argon', type: 'noble-gas',x: 18, y: 3 }, { number: 19, symbol: 'K', name: 'Potassium',  type: 'alkali-metal',x: 1, y: 4 }, { number: 20, symbol: 'Ca', name: 'Calcium', type: 'alkaline-earth',x: 2, y: 4 }, { number: 21, symbol: 'Sc', name: 'Scandium', type: 'transition-metal',x: 3, y: 4 }, { number: 22, symbol: 'Ti', name: 'Titanium', type: 'transition-metal',x: 4, y: 4 }, { number: 23, symbol: 'V', name: 'Vanadium', type: 'transition-metal',x: 5, y: 4 }, { number: 24, symbol: 'Cr', name: 'Chromium', type: 'transition-metal',x: 6, y: 4 }, { number: 25, symbol: 'Mn', name: 'Manganese', type: 'transition-metal',x: 7, y: 4 }, { number: 26, symbol: 'Fe', name: 'Iron', type: 'transition-metal',x: 8, y: 4 }, { number: 27, symbol: 'Co', name: 'Cobalt', type: 'transition-metal',x: 9, y: 4 }, { number: 28, symbol: 'Ni', name: 'Nickel', type: 'transition-metal',x: 10, y: 4 }, { number: 29, symbol: 'Cu', name: 'Copper', type: 'transition-metal',x: 11, y: 4 }, { number: 30, symbol: 'Zn', name: 'Zink', type: 'transition-metal',x: 12, y: 4 },{ number: 31, symbol: 'Ga', name: 'Gallium', type: 'basic-metal',x: 13, y: 4 }, { number: 32, symbol: 'Ge', name: 'Germanium', type: 'semi-metal',x: 14, y: 4 }, { number: 33, symbol: 'As', name: 'Arsenic', type: 'semi-metal',x: 15, y: 4 }, { number: 34, symbol: 'Se', name: 'Selenium', type: 'non-metal',x: 16, y: 4 }, { number: 35, symbol: 'Br', name: 'Bromine', type: 'halogen',x: 17, y: 4 }, { number: 36, symbol: 'Kr', name: 'Krypton', type: 'noble-gas',x: 18, y: 4 }, { number: 37, symbol: 'Rb', name: 'Rubidium', type: 'alkali-metal',x: 1, y: 5 }, { number: 38, symbol: 'Sr', name: 'Strontium', type: 'alkaline-earth',x: 2, y: 5 },{ number: 39, symbol: 'Y', name: 'Yttrium', type: 'transition-metal',x: 3, y: 5 }, { number: 40, symbol: 'Zr', name: 'Zirconium', type: 'transition-metal',x: 4, y: 5 }, { number: 41, symbol: 'Nb', name: 'Niobium', type: 'transition-metal',x: 5, y: 5 }, { number: 42, symbol: 'Mo', name: 'Molybdenum', type: 'transition-metal',x: 6, y: 5 }, { number: 43, symbol: 'Tc', name: 'Technetium', type: 'transition-metal',x: 7, y: 5 }, { number: 44, symbol: 'Ru', name: 'Ruthenium', type: 'transition-metal',x: 8, y: 5 }, { number: 45, symbol: 'Rh', name: 'Rhodium', type: 'transition-metal',x: 9, y: 5 }, { number: 46, symbol: 'Pd', name: 'Palladium', type: 'transition-metal',x: 10, y: 5 }, { number: 47, symbol: 'Ag', name: 'Silver', type: 'transition-metal',x: 11, y: 5 }, { number: 48, symbol: 'Cd', name: 'Cadmium', type: 'transition-metal',x: 12, y: 5 }, { number: 49, symbol: 'In', name: 'Indium', type: 'basic-metal',x: 13, y: 5 }, { number: 50, symbol: 'Sn', name: 'Tin', type: 'basic-metal',x: 14, y: 5 }, { number: 51, symbol: 'Sb', name: 'Antimony', type: 'semi-metal',x: 15, y: 5 }, { number: 52, symbol: 'Te', name: 'Tellurium', type: 'semi-metal',x: 16, y: 5 }, { number: 53, symbol: 'I', name: 'Iodine', type: 'halogen', x: 17, y: 5 }, { number: 54, symbol: 'Xe', name: 'Xenon', type: 'noble-gas',x: 18, y: 5 }, { number: 55, symbol: 'Cs', name: 'Cesium',  type: 'alkali-metal',x: 1, y: 6 }, { number: 56, symbol: 'Ba', name: 'Barium', type: 'alkaline-earth',x: 2, y: 6 }, { number: '57-71', symbol: '', name: 'Beryllium', type: 'lanthanide',x: 3, y: 6 }, { number: 72, symbol: 'Hf', name: 'Hafnium', type: 'transition-metal',x: 4, y: 6 }, { number: 73, symbol: 'Ta', name: 'Tantalum', type: 'transition-metal',x: 5, y: 6 }, { number: 74, symbol: 'W', name: 'Tungsten', type: 'transition-metal',x: 6, y: 6 }, { number: 75, symbol: 'Re', name: 'Rhenium', type: 'transition-metal',x: 7, y: 6 }, { number: 76, symbol: 'Os', name: 'Osmium', type: 'transition-metal',x: 8, y: 6 }, { number: 77, symbol: 'Ir', name: 'Iridium', type: 'transition-metal',x: 9, y: 6 }, { number: 78, symbol: 'Pt', name: 'Platinum', type: 'transition-metal',x: 10, y: 6 }, { number: 79, symbol: 'Au', name: 'Gold', type: 'transition-metal',x: 11, y: 6 }, { number: 80, symbol: 'Hg', name: 'Mercury', type: 'transition-metal',x: 12, y: 6 }, { number: 81, symbol: 'Tl', name: 'Thallium', type: 'basic-metal',x: 13, y: 6 }, { number: 82, symbol: 'Pb', name: 'Lead', type: 'basic-metal',x: 14, y: 6 }, { number: 83, symbol: 'Bi', name: 'Bismuth', type: 'basic-metal',x: 15, y: 6 }, { number: 84, symbol: 'Po', name: 'Polonium', type: 'semi-metal',x: 16, y: 6 }, { number: 85, symbol: 'At', name: 'Astatine', type: 'halogen',x: 17, y: 6 }, { number: 86, symbol: 'Rn', name: 'Radon', type: 'noble-gas',x: 18, y: 6 }, { number: 87, symbol: 'Fr', name: 'Francium',  type: 'alkali-metal',x: 1, y: 7 }, { number: 88, symbol: 'Ra', name: 'Radium', type: 'alkaline-earth',x: 2, y: 7 }, { number: '89-103', symbol: '', name: 'Beryllium', type: 'actinide',x: 3, y: 7 }, { number: 104, symbol: 'Rf', name: 'Rutherfordium', type: 'transition-metal',x: 4, y: 7 }, { number: 105, symbol: 'Db', name: 'Dubnium', type: 'transition-metal',x: 5, y: 7 }, { number: 106, symbol: 'Sg', name: 'Seaborgium', type: 'transition-metal',x: 6, y: 7 }, { number: 107, symbol: 'Bh', name: 'Bohrium', type: 'transition-metal',x: 7, y: 7 }, { number: 108, symbol: 'Hs', name: 'Hassium', type: 'transition-metal',x: 8, y: 7 }, { number: 109, symbol: 'Mt', name: 'Meitnerium', type: 'transition-metal',x: 9, y: 7 }, { number: 110, symbol: 'Ds', name: 'Darmstadtium', type: 'transition-metal',x: 10, y: 7 }, { number: 111, symbol: 'Rg', name: 'Roentgenium', type: 'transition-metal',x: 11, y: 7 }, { number: 112, symbol: 'Cn', name: 'Copernicium', type: 'transition-metal',x: 12, y: 7 }, { number: 113, symbol: 'Nh', name: 'Nihonium', type: 'basic-metal',x: 13, y: 7 }, { number: 114, symbol: 'FI', name: 'Flerovium', type: 'basic-metal',x: 14, y: 7 }, { number: 115, symbol: 'Mc', name: 'Moscovium', type: 'basic-metal',x: 15, y: 7 }, { number: 116, symbol: 'Lv', name: 'Livermorium', type: 'basic-metal',x: 16, y: 7 }, { number: 117, symbol: 'Ts', name: 'Tennessine', type: 'halogen',x: 17, y: 7 }, { number: 118, symbol: 'Og', name: 'Oganesson', type: 'noble-gas',x: 18, y: 7 }, { number: 57, symbol: 'La', name: 'Lanthanum', type: 'lanthanide',x: 3, y: 8 }, { number: 58, symbol: 'Ce', name: 'Cerium', type: 'lanthanide',x: 4, y: 8 }, { number: 59, symbol: 'Pr', name: 'Praseodymium', type: 'lanthanide',x: 5, y: 8 }, { number: 60, symbol: 'Nd', name: 'Neodymium', type: 'lanthanide',x: 6, y: 8 }, { number: 61, symbol: 'Pm', name: 'Promethium', type: 'lanthanide',x: 7, y: 8 }, { number: 62, symbol: 'Sm', name: 'Samarium', type: 'lanthanide',x: 8, y: 8 }, { number: 63, symbol: 'Eu', name: 'Europium', type: 'lanthanide',x: 9, y: 8 }, { number: 64, symbol: 'Gd', name: 'Gadolinium', type: 'lanthanide',x: 10, y: 8 }, { number: 65, symbol: 'Tb', name: 'Terbium', type: 'lanthanide',x: 11, y: 8 }, { number: 66, symbol: 'Dy', name: 'Dysprosium', type: 'lanthanide',x: 12, y: 8 }, { number: 67, symbol: 'Ho', name: 'Holmium', type: 'lanthanide',x: 13, y: 8 }, { number: 68, symbol: 'Er', name: 'Erbium', type: 'lanthanide',x: 14, y: 8 }, { number: 69, symbol: 'Tm', name: 'Thulium', type: 'lanthanide',x: 15, y: 8 }, { number: 70, symbol: 'Yb', name: 'Ytterbium', type: 'lanthanide',x: 16, y: 8 }, { number: 71, symbol: 'Lu', name: 'Lutetium', type: 'lanthanide',x: 17, y: 8 }, { number: 89, symbol: 'Ac', name: 'Actinium', type: 'actinide',x: 3, y: 9 }, { number: 90, symbol: 'Th', name: 'Thorium', type: 'actinide',x: 4, y: 9 }, { number: 91, symbol: 'Pa', name: 'Protactinium', type: 'actinide',x: 5, y: 9 }, { number: 92, symbol: 'U', name: 'Uranium',type: 'actinide', x: 6, y: 9 }, { number: 93, symbol: 'Np', name: 'Neptunium',type: 'actinide', x: 7, y: 9 }, { number: 94, symbol: 'Pu', name: 'Plutonium', type: 'actinide',x: 8, y: 9 }, { number: 95, symbol: 'Am', name: 'Americium', type: 'actinide',x: 9, y: 9 }, { number: 96, symbol: 'Cm', name: 'Curium', type: 'actinide',x: 10, y: 9 }, { number: 97, symbol: 'Bk', name: 'Berkelium', type: 'actinide',x: 11, y: 9 }, { number: 98, symbol: 'Cf', name: 'Californium', type: 'actinide',x: 12, y: 9 }, { number: 99, symbol: 'Es', name: 'Einsteinium', type: 'actinide',x: 13, y: 9 }, { number: 100, symbol: 'Fm', name: 'Fermium', type: 'actinide',x: 14, y: 9 }, { number: 101, symbol: 'Md', name: 'Mendelevium', type: 'actinide',x: 15, y: 9 },{ number: 102, symbol: 'No', name: 'Nobelium', type: 'actinide',x: 16, y: 9 }, { number: 103, symbol: 'Lr', name: 'Lawrencium', type: 'actinide',x: 17, y: 9 },
    ];
  
    const table = document.getElementById('periodic-table');
            const modal = document.getElementById('element-modal');
            const closeModal = document.getElementsByClassName('close')[0];
            const elementName = document.getElementById('element-name');
            const elementDetails = document.getElementById('element-details');
            const wikipediaIframe = document.getElementById('wikipedia-iframe');
         

            elements.forEach(element => {
              const el = document.createElement('div');
              el.classList.add('element', element.type);
              el.style.gridColumn = element.x;
              el.style.gridRow = element.y;
              el.innerHTML = `
                <div class="number">${element.number}</div>
                <div class="symbol">${element.symbol}</div>
              `;
              el.addEventListener('click', () => showElementDetails(element));
              table.appendChild(el);
            });
          
            closeModal.onclick = () => {
              modal.style.display = 'none';
              wikipediaIframe.src = ''; // Clear the iframe content
            };
          
            window.onclick = (event) => {
              if (event.target === modal) {
                modal.style.display = 'none';
                wikipediaIframe.src = ''; // Clear the iframe content
              }
            };
          
            function showElementDetails(element) {
              elementName.textContent = element.name;
              wikipediaIframe.src = `https://en.wikipedia.org/wiki/${element.name}`;
              modal.style.display = 'block';
            }
          });


          document.addEventListener('DOMContentLoaded', () => {
            const legendItems = document.querySelectorAll('.legend-table tr');
            
            legendItems.forEach(item => {
                item.addEventListener('click', () => {
                    const category = item.getAttribute('data-category');
                    highlightElements(category);
                });
            });
        
            function highlightElements(category) {
                const allElements = document.querySelectorAll('.element');
                allElements.forEach(el => {
                    el.classList.remove('highlight');
                    if (el.classList.contains(category)) {
                        el.classList.add('highlight');
                    }
                });
        
                
                setTimeout(() => {
                    allElements.forEach(el => {
                        el.classList.remove('highlight');
                    });
                }, 5000); 
            }
        });