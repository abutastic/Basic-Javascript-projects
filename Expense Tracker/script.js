document.addEventListener("DOMContentLoaded", () => {
  const expenseFrom = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const expenseTotalDisplay = document.getElementById("total-amount");

  let expensesContainer = JSON.parse(localStorage.getItem('expenses')) || [];
  let totalAmount = calculateTotal();

  renderExpenses()

  expenseFrom.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());

    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newExpenseObj = {
        id: Date.now(),
        name: name,
        amount: amount,
      };

      expensesContainer.push(newExpenseObj);
      saveExpensesToLocal()
      renderExpenses()
      updateTotal()

      //clear input
      expenseNameInput.value = '';
      expenseAmountInput.value = '';
    }
  });

  function renderExpenses(){
    expenseList.innerHTML = "";
    expensesContainer.forEach(expense => {
        const li = document.createElement('li')
        li.innerHTML = `
        ${expense.name} - ${expense.amount}
        <button Data-id="${expense.id}">Delete</button>
        `;

        expenseList.appendChild(li)
    })
  }

  function calculateTotal() {
    return expensesContainer.reduce((sum, expense)=> (sum + expense.amount), 0)
  }

  function saveExpensesToLocal(){
    localStorage.setItem('expenses', JSON.stringify(expensesContainer))
  }

  function updateTotal(){
    totalAmount = calculateTotal()

    expenseTotalDisplay.textContent = totalAmount.toFixed()
  }

  expenseList.addEventListener('click', (e)=> {
    if(e.target.tagName === 'BUTTON'){
        const expenseId = parseInt(e.target.getAttribute('Data-id'));
        expensesContainer = expensesContainer.filter((expense) => expense.id !== expenseId)

        saveExpensesToLocal()
        renderExpenses()
        updateTotal()
    }
  })
});
