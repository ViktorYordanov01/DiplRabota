document.addEventListener('DOMContentLoaded', () => {
    const elements = [
      { number: 1, symbol: 'H', name: 'Hydrogen', x: 1, y: 1 },
      { number: 2, symbol: 'He', name: 'Helium', x: 18, y: 1 },
      { number: 3, symbol: 'Li', name: 'Lithium', x: 1, y: 2 },
      { number: 4, symbol: 'Be', name: 'Beryllium', x: 2, y: 2 },
      { number: 5, symbol: 'B', name: 'Beryllium', x: 13, y: 2 },
      { number: 6, symbol: 'C', name: 'Beryllium', x: 14, y: 2 },
      { number: 7, symbol: 'N', name: 'Beryllium', x: 15, y: 2 },
      { number: 8, symbol: 'O', name: 'Beryllium', x: 16, y: 2 },
      { number: 9, symbol: 'F', name: 'Beryllium', x: 17, y: 2 },
      { number: 10, symbol: 'Ne', name: 'Beryllium', x: 18, y: 2 },
      { number: 11, symbol: 'Na', name: 'Beryllium', x: 1, y: 3 },
      { number: 12, symbol: 'Mg', name: 'Beryllium', x: 2, y: 3 },
      { number: 13, symbol: 'Al', name: 'Beryllium', x: 13, y: 3 },
      { number: 14, symbol: 'Si', name: 'Beryllium', x: 14, y: 3 },
      { number: 15, symbol: 'P', name: 'Beryllium', x: 15, y: 3 },
      { number: 16, symbol: 'S', name: 'Beryllium', x: 16, y: 3 },
      { number: 17, symbol: 'Cl', name: 'Beryllium', x: 17, y: 3 },
      { number: 18, symbol: 'Ar', name: 'Beryllium', x: 18, y: 3 },
      { number: 19, symbol: 'K', name: 'Hydrogen', x: 1, y: 4 },
      { number: 20, symbol: 'Ca', name: 'Helium', x: 2, y: 4 },
      { number: 21, symbol: 'Sc', name: 'Lithium', x: 3, y: 4 },
      { number: 22, symbol: 'Ti', name: 'Beryllium', x: 4, y: 4 },
      { number: 23, symbol: 'V', name: 'Beryllium', x: 5, y: 4 },
      { number: 24, symbol: 'Cr', name: 'Beryllium', x: 6, y: 4 },
      { number: 25, symbol: 'Mn', name: 'Beryllium', x: 7, y: 4 },
      { number: 26, symbol: 'Fe', name: 'Beryllium', x: 8, y: 4 },
      { number: 27, symbol: 'Co', name: 'Beryllium', x: 9, y: 4 },
      { number: 28, symbol: 'Ni', name: 'Beryllium', x: 10, y: 4 },
      { number: 29, symbol: 'Cu', name: 'Beryllium', x: 11, y: 4 },
      { number: 30, symbol: 'Zn', name: 'Beryllium', x: 12, y: 4 },
      { number: 31, symbol: 'Ga', name: 'Beryllium', x: 13, y: 4 },
      { number: 32, symbol: 'Ge', name: 'Beryllium', x: 14, y: 4 },
      { number: 33, symbol: 'As', name: 'Beryllium', x: 15, y: 4 },
      { number: 34, symbol: 'Se', name: 'Beryllium', x: 16, y: 4 },
      { number: 35, symbol: 'Br', name: 'Beryllium', x: 17, y: 4 },
      { number: 36, symbol: 'Kr', name: 'Beryllium', x: 18, y: 4 },
      { number: 37, symbol: 'Rb', name: 'Hydrogen',x: 1, y: 5 },
      { number: 38, symbol: 'Sr', name: 'Helium', x: 2, y: 5 },
      { number: 39, symbol: 'Y', name: 'Lithium', x: 3, y: 5 },
      { number: 40, symbol: 'Zr', name: 'Beryllium', x: 4, y: 5 },
      { number: 41, symbol: 'Nb', name: 'Beryllium', x: 5, y: 5 },
      { number: 42, symbol: 'Mo', name: 'Beryllium', x: 6, y: 5 },
      { number: 43, symbol: 'Tc', name: 'Beryllium', x: 7, y: 5 },
      { number: 44, symbol: 'Ru', name: 'Beryllium', x: 8, y: 5 },
      { number: 45, symbol: 'Rh', name: 'Beryllium', x: 9, y: 5 },
      { number: 46, symbol: 'Pd', name: 'Beryllium', x: 10, y: 5 },
      { number: 47, symbol: 'Ag', name: 'Beryllium', x: 11, y: 5 },
      { number: 48, symbol: 'Cd', name: 'Beryllium', x: 12, y: 5 },
      { number: 49, symbol: 'In', name: 'Beryllium', x: 13, y: 5 },
      { number: 50, symbol: 'Sn', name: 'Beryllium', x: 14, y: 5 },
      { number: 51, symbol: 'Sb', name: 'Beryllium', x: 15, y: 5 },
      { number: 52, symbol: 'Te', name: 'Beryllium', x: 16, y: 5 },
      { number: 53, symbol: 'I', name: 'Beryllium', x: 17, y: 5 },
      { number: 54, symbol: 'Xe', name: 'Beryllium', x: 18, y: 5 },
      { number: 55, symbol: 'Cs', name: 'Beryllium', x: 1, y: 6 },
      { number: 56, symbol: 'Ba', name: 'Beryllium', x: 2, y: 6 },
      { number: '57-71', symbol: '', name: 'Beryllium', x: 3, y: 6 },
      { number: 72, symbol: 'Hf', name: 'Beryllium', x: 4, y: 6 },
      { number: 73, symbol: 'Ta', name: 'Beryllium', x: 5, y: 6 },
      { number: 74, symbol: 'W', name: 'Beryllium', x: 6, y: 6 },
      { number: 75, symbol: 'Re', name: 'Beryllium', x: 7, y: 6 },
      { number: 76, symbol: 'Os', name: 'Beryllium', x: 8, y: 6 },
      { number: 77, symbol: 'Ir', name: 'Beryllium', x: 9, y: 6 },
      { number: 78, symbol: 'Pt', name: 'Beryllium', x: 10, y: 6 },
      { number: 79, symbol: 'Au', name: 'Beryllium', x: 11, y: 6 },
      { number: 80, symbol: 'Hg', name: 'Beryllium', x: 12, y: 6 },
      { number: 81, symbol: 'Tl', name: 'Beryllium', x: 13, y: 6 },
      { number: 82, symbol: 'Pb', name: 'Beryllium', x: 14, y: 6 },
      { number: 83, symbol: 'Bi', name: 'Beryllium', x: 15, y: 6 },
      { number: 84, symbol: 'Po', name: 'Beryllium', x: 16, y: 6 },
      { number: 85, symbol: 'At', name: 'Beryllium', x: 17, y: 6 },
      { number: 86, symbol: 'Rn', name: 'Beryllium', x: 18, y: 6 },
      { number: 87, symbol: 'Fr', name: 'Beryllium', x: 1, y: 7 },
      { number: 88, symbol: 'Ra', name: 'Beryllium', x: 2, y: 7 },
      { number: '89-103', symbol: '', name: 'Beryllium', x: 3, y: 7 },
      { number: 104, symbol: 'Rf', name: 'Beryllium', x: 4, y: 7 },
      { number: 105, symbol: 'Db', name: 'Beryllium', x: 5, y: 7 },
      { number: 106, symbol: 'Sg', name: 'Beryllium', x: 6, y: 7 },
      { number: 107, symbol: 'Bh', name: 'Beryllium', x: 7, y: 7 },
      { number: 108, symbol: 'Hs', name: 'Beryllium', x: 8, y: 7 },
      { number: 109, symbol: 'Mt', name: 'Beryllium', x: 9, y: 7 },
      { number: 110, symbol: 'Ds', name: 'Beryllium', x: 10, y: 7 },
      { number: 111, symbol: 'Rg', name: 'Beryllium', x: 11, y: 7 },
      { number: 112, symbol: 'Cn', name: 'Beryllium', x: 12, y: 7 },
      { number: 113, symbol: 'Nh', name: 'Beryllium', x: 13, y: 7 },
      { number: 114, symbol: 'FI', name: 'Beryllium', x: 14, y: 7 },
      { number: 115, symbol: 'Mc', name: 'Beryllium', x: 15, y: 7 },
      { number: 116, symbol: 'Lv', name: 'Beryllium', x: 16, y: 7 },
      { number: 117, symbol: 'Ts', name: 'Beryllium', x: 17, y: 7 },
      { number: 118, symbol: 'Og', name: 'Beryllium', x: 18, y: 7 },
      { number: 57, symbol: 'La', name: 'Beryllium', x: 3, y: 8 },
      { number: 58, symbol: 'Ce', name: 'Beryllium', x: 4, y: 8 },
      { number: 59, symbol: 'Pr', name: 'Beryllium', x: 5, y: 8 },
      { number: 60, symbol: 'Nd', name: 'Beryllium', x: 6, y: 8 },
      { number: 61, symbol: 'Pm', name: 'Beryllium', x: 7, y: 8 },
      { number: 62, symbol: 'Sm', name: 'Beryllium', x: 8, y: 8 },
      { number: 63, symbol: 'Eu', name: 'Beryllium', x: 9, y: 8 },
      { number: 64, symbol: 'Gd', name: 'Beryllium', x: 10, y: 8 },
      { number: 65, symbol: 'Tb', name: 'Beryllium', x: 11, y: 8 },
      { number: 66, symbol: 'Dy', name: 'Beryllium', x: 12, y: 8 },
      { number: 67, symbol: 'Ho', name: 'Beryllium', x: 13, y: 8 },
      { number: 68, symbol: 'Er', name: 'Beryllium', x: 14, y: 8 },
      { number: 69, symbol: 'Tm', name: 'Beryllium', x: 15, y: 8 },
      { number: 70, symbol: 'Yb', name: 'Beryllium', x: 16, y: 8 },
      { number: 71, symbol: 'Lu', name: 'Beryllium', x: 17, y: 8 },
      { number: 89, symbol: 'Ac', name: 'Beryllium', x: 3, y: 9 },
      { number: 90, symbol: 'Th', name: 'Beryllium', x: 4, y: 9 },
      { number: 91, symbol: 'Pa', name: 'Beryllium', x: 5, y: 9 },
      { number: 92, symbol: 'U', name: 'Beryllium', x: 6, y: 9 },
      { number: 93, symbol: 'Np', name: 'Beryllium', x: 7, y: 9 },
      { number: 94, symbol: 'Pu', name: 'Beryllium', x: 8, y: 9 },
      { number: 95, symbol: 'Am', name: 'Beryllium', x: 9, y: 9 },
      { number: 96, symbol: 'Cm', name: 'Beryllium', x: 10, y: 9 },
      { number: 97, symbol: 'Bk', name: 'Beryllium', x: 11, y: 9 },
      { number: 98, symbol: 'Cf', name: 'Beryllium', x: 12, y: 9 },
      { number: 99, symbol: 'Es', name: 'Beryllium', x: 13, y: 9 },
      { number: 100, symbol: 'Fm', name: 'Beryllium', x: 14, y: 9 },
      { number: 101, symbol: 'Md', name: 'Beryllium', x: 15, y: 9 },
      { number: 102, symbol: 'No', name: 'Beryllium', x: 16, y: 9 },
      { number: 103, symbol: 'Lr', name: 'Beryllium', x: 17, y: 9 },
    ];
  
    const table = document.getElementById('periodic-table');
    const modal = document.getElementById('element-modal');
    const closeModal = document.getElementsByClassName('close')[0];
    const elementName = document.getElementById('element-name');
    const elementDetails = document.getElementById('element-details');
  
    elements.forEach(element => {
      const el = document.createElement('div');
      el.classList.add('element');
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
    };
  
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  
    function showElementDetails(element) {
      elementName.textContent = element.name;
      elementDetails.textContent = `Symbol: ${element.symbol}\nAtomic Number: ${element.number}\nDetails: ${element.details}`;
      modal.style.display = 'block';
    }
  });
  
  