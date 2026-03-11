// Unit tests for Node.js accounting app
const fs = require('fs');
const path = require('path');
const BALANCE_FILE = path.join(__dirname, '../balance.json');

// Helper functions to simulate app logic
function loadBalance() {
    if (!fs.existsSync(BALANCE_FILE)) {
        fs.writeFileSync(BALANCE_FILE, JSON.stringify({ balance: 1000.00 }));
    }
    const data = fs.readFileSync(BALANCE_FILE);
    return JSON.parse(data).balance;
}

function saveBalance(balance) {
    fs.writeFileSync(BALANCE_FILE, JSON.stringify({ balance }));
}

function creditAccount(amount) {
    let balance = loadBalance();
    balance += amount;
    saveBalance(balance);
    return balance;
}

function debitAccount(amount) {
    let balance = loadBalance();
    if (balance >= amount) {
        balance -= amount;
        saveBalance(balance);
        return { balance, success: true };
    } else {
        return { balance, success: false };
    }
}

function resetBalance() {
    saveBalance(1000.00);
}

describe('Accounting App Business Logic', () => {
    beforeEach(() => {
        resetBalance();
    });

    test('TC01: View current balance', () => {
        expect(loadBalance()).toBeCloseTo(1000.00);
    });

    test('TC02: Credit account with valid amount', () => {
        const newBalance = creditAccount(200.00);
        expect(newBalance).toBeCloseTo(1200.00);
    });

    test('TC03: Debit account with sufficient funds', () => {
        creditAccount(300.00); // Ensure enough funds
        const result = debitAccount(300.00);
        expect(result.success).toBe(true);
        expect(result.balance).toBeCloseTo(1000.00);
    });

    test('TC04: Debit account with insufficient funds', () => {
        const result = debitAccount(2000.00);
        expect(result.success).toBe(false);
        expect(result.balance).toBeCloseTo(1000.00);
    });

    test('TC07: Multiple credit and debit operations', () => {
        creditAccount(100.00);
        debitAccount(50.00);
        expect(loadBalance()).toBeCloseTo(1050.00);
    });
});
