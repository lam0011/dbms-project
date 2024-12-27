// Sample data
const customers = [
    { id: 1, name: "John Doe", phone: "123-456-7890", email: "john@example.com", address: "123 Main St" },
    { id: 2, name: "Jane Smith", phone: "987-654-3210", email: "jane@example.com", address: "456 Elm St" }
  ];
  
  const employees = [
    { id: 1, name: "Alice Johnson", shift: "Morning" },
    { id: 2, name: "Bob Williams", shift: "Evening" }
  ];
  
  const stores = [
    { name: "Main Store" }
  ];
  
  const vendors = [
    { id: 1, name: "Vendor A", phone: "111-222-3333", address: "789 Oak St" },
    { id: 2, name: "Vendor B", phone: "444-555-6666", address: "456 Pine St" }
  ];
  
  const items = [
    { id: 1, name: "Pizza", price: 10, type: "Entree" },
    { id: 2, name: "Burger", price: 8, type: "Entree" },
    { id: 3, name: "Salad", price: 6, type: "Appetizer" }
  ];
  
  const orders = [
    { id: 1, cookingTime: "15 minutes", customerId: 1, employeeId: 1 },
    { id: 2, cookingTime: "20 minutes", customerId: 2, employeeId: 2 }
  ];
  
  // Function to display customers
  function displayCustomers() {
    const customerList = document.getElementById("customer-list");
    customers.forEach(customer => {
      const listItem = document.createElement("li");
      listItem.textContent = `ID: ${customer.id} - Name: ${customer.name} - Phone: ${customer.phone} - Email: ${customer.email} - Address: ${customer.address}`;
      customerList.appendChild(listItem);
    });
  }
  
  // Function to display employees
  function displayEmployees() {
    const employeeList = document.getElementById("employee-list");
    employees.forEach(employee => {
      const listItem = document.createElement("li");
      listItem.textContent = `ID: ${employee.id} - Name: ${employee.name} - Shift: ${employee.shift}`;
      employeeList.appendChild(listItem);
    });
  }
  
  // Function to display vendors
  function displayVendors() {
    const vendorList = document.getElementById("vendor-list");
    vendors.forEach(vendor => {
      const listItem = document.createElement("li");
      listItem.textContent = `ID: ${vendor.id} - Name: ${vendor.name} - Phone: ${vendor.phone} - Address: ${vendor.address}`;
      vendorList.appendChild(listItem);
    });
  }
  
  // Function to display items
  function displayItems() {
    const itemList = document.getElementById("item-list");
    items.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = `ID: ${item.id} - Name: ${item.name} - Price: $${item.price} - Type: ${item.type}`;
      itemList.appendChild(listItem);
    });
  }
  
  // Function to display orders
  function displayOrders() {
    const orderList = document.getElementById("order-list");
    orders.forEach(order => {
      const listItem = document.createElement("li");
      listItem.textContent = `Order ID: ${order.id} - Cooking Time: ${order.cookingTime} - Customer ID: ${order.customerId} - Employee ID: ${order.employeeId}`;
      orderList.appendChild(listItem);
    });
  }
  
  // Display data when the page loads
  window.onload = function() {
    displayCustomers();
    displayEmployees();
    displayVendors();
    displayItems();
    displayOrders();
  };
  