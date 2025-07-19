
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    return true;
}

 function checkPrime() {
            const input = document.getElementById('primeInput');
            const result = document.getElementById('primeResult');
            const n = parseInt(input.value);
            
            if (!n || n < 1) {
                result.className = 'result error';
                result.innerHTML =  'Vui lòng nhập một số nguyên dương!';
                return;
            }
            
            const isPrimeResult = isPrime(n);
            result.className = isPrimeResult ? 'result success' : 'result error';
            
            if (isPrimeResult) {
                result.innerHTML = ` Số <span class="highlight">${n}</span> là số nguyên tố!`;
            } else {
                result.innerHTML = ` Số <span class="highlight">${n}</span> không phải là số nguyên tố.`;
            }
        }

function sumOddNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) { 
            sum += i;
        }
    }
    return sum;
}
 function calculateOddSum() {
            const input = document.getElementById('oddSumInput');
            const result = document.getElementById('oddSumResult');
            const n = parseInt(input.value);
            
            if (!n || n < 1) {
                result.className = 'result error';
                result.innerHTML = 'Vui lòng nhập một số nguyên dương!';
                return;
            }
            
            const sum = sumOddNumbers(n);
            const oddNumbers = [];
            for (let i = 1; i <= n; i++) {
                if (i % 2 !== 0) oddNumbers.push(i);
            }
            
            result.className = 'result success';
            result.innerHTML = `
                Các số lẻ từ 1 đến ${n}: <span class="highlight">${oddNumbers.join(', ')}</span><br>
                Tổng = <span class="highlight">${sum}</span>
            `;
        }

function processArray() {
            const input = document.getElementById('arrayInput');
            const result = document.getElementById('arrayResult');
            
            if (!input.value.trim()) {
                result.className = 'result error';
                result.innerHTML = 'Vui lòng nhập mảng số!';
                return;
            }
            
            try {
                const numbers = input.value.split(',').map(num => {
                    const parsed = parseInt(num.trim());
                    if (isNaN(parsed)) throw new Error('Số không hợp lệ');
                    return parsed;
                });
                
                const evenNumbers = numbers.filter(num => num % 2 === 0);
                
                const maxNumber = Math.max(...numbers);

                const positiveNumbers = numbers.filter(num => num > 0);
                
                result.className = 'result success';
                result.innerHTML = `
                    <div class="array-display">Mảng gốc: [${numbers.join(', ')}]</div>
                    
                    <strong> Các số chẵn:</strong> 
                    <span class="highlight">[${evenNumbers.length > 0 ? evenNumbers.join(', ') : 'Không có'}]</span><br><br>
                    
                    <strong> Số lớn nhất:</strong> 
                    <span class="highlight">${maxNumber}</span><br><br>
                    
                    <strong> Các số dương:</strong> 
                    <span class="highlight">[${positiveNumbers.length > 0 ? positiveNumbers.join(', ') : 'Không có'}]</span>
                `;
                
            } catch (error) {
                result.className = 'result error';
                result.innerHTML = 'Lỗi: Vui lòng nhập các số hợp lệ, cách nhau bởi dấu phẩy!';
            }
        }