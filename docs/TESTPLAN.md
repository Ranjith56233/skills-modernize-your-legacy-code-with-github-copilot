# COBOL Student Account Management Test Plan

This test plan covers all business logic implemented in the COBOL application. Use this plan to validate the system with business stakeholders and as a basis for future unit and integration tests in Node.js.

| Test Case ID | Test Case Description                | Pre-conditions                | Test Steps                                                                 | Expected Result                                 | Actual Result | Status (Pass/Fail) | Comments         |
|--------------|--------------------------------------|-------------------------------|----------------------------------------------------------------------------|-------------------------------------------------|--------------|--------------------|------------------|
| TC01         | View current balance                 | Initial balance = 1000.00     | 1. Start app<br>2. Select 'View Balance'                                   | Displays balance: 1000.00                       |              |                    |                  |
| TC02         | Credit account with valid amount     | Balance >= 0                  | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter 200.00              | Displays new balance: 1200.00                   |              |                    |                  |
| TC03         | Debit account with sufficient funds  | Balance >= debit amount       | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter 300.00               | Displays new balance: 900.00                    |              |                    |                  |
| TC04         | Debit account with insufficient funds| Balance < debit amount        | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter 2000.00              | Displays error: "Insufficient funds for this debit." |              |                    |                  |
| TC05         | Invalid menu selection               | App running                   | 1. Start app<br>2. Enter invalid menu option (e.g., 5)                     | Displays error: "Invalid choice, please select 1-4." |              |                    |                  |
| TC06         | Exit application                     | App running                   | 1. Start app<br>2. Select 'Exit'                                            | Displays exit message and terminates app         |              |                    |                  |
| TC07         | Multiple credit and debit operations | App running                   | 1. Start app<br>2. Credit 100.00<br>3. Debit 50.00<br>4. View Balance      | Balance reflects all operations correctly        |              |                    |                  |

> Fill in Actual Result, Status, and Comments during testing.
