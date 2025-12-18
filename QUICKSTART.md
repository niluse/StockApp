# Quick Start Guide

## Setup (5 minutes)

1. **Install dependencies**

```bash
npm install
```

2. **Configure environment**

```bash
cp .env.example .env
```

Edit `.env` and set your API URL:

```
REACT_APP_BASE_URL=https://your-api-url.com/api
```

3. **Start the app**

```bash
npm start
```

Visit: http://localhost:3000

## First Time Usage

### 1. Register an Account

- Click "Do you have not an account?" on login page
- Fill in all required fields
- Password must contain:
  - At least 8 characters
  - One uppercase letter
  - One lowercase letter
  - One number
  - One special character (@$!%\*?&)

### 2. Login

- Use your registered email and password
- You'll be redirected to the dashboard

### 3. Add Your First Firm

- Navigate to "Firms" from the sidebar
- Click "New Firm" button
- Fill in: Name, Phone, Address, Image URL
- Click "Add Firm"

### 4. Add Your First Brand

- Navigate to "Brands"
- Click "New Brand"
- Fill in: Name, Image URL
- Click "Add Brand"

### 5. Add Your First Product

- Navigate to "Products"
- Click "New Product"
- Select: Category, Brand
- Enter: Product Name
- Click "Add Product"

### 6. Record a Purchase

- Navigate to "Purchases"
- Click "New Purchase"
- Select: Firm, Brand, Product
- Enter: Quantity, Price
- Click "Add Purchase"
- Stock quantity will increase automatically

### 7. Record a Sale

- Navigate to "Sales"
- Click "New Sale"
- Select: Brand, Product
- Enter: Quantity, Price
- Click "Add New Sale"
- Stock quantity will decrease automatically

### 8. View Dashboard

- Navigate to "Dashboard" (home icon)
- See KPIs: Total Sales, Profit, Total Purchases
- View charts showing trends over time

## Common Tasks

### Edit an Item

- Click the edit icon (pencil) on any card or table row
- Modify the fields
- Click "Update" button

### Delete an Item

- Click the delete icon (trash) on any card or table row
- Item will be removed immediately

### Logout

- Click "Logout" button in the top right
- You'll be redirected to login page

## Troubleshooting

### "Login işlemi başarisiz oldu" (Login failed)

- Check your email and password
- Ensure backend API is running
- Verify REACT_APP_BASE_URL in .env

### "Veriler çekilemedi" (Data fetch failed)

- Check internet connection
- Verify backend API is accessible
- Check browser console for errors

### Form won't submit

- Ensure all required fields are filled
- Check for validation error messages
- Verify numeric fields have valid numbers

### Charts not showing

- Ensure you have sales/purchases data
- Check that dates are valid
- Refresh the page

## Tips

- Use the search and filter in tables (click toolbar icon)
- Export data using the table toolbar
- All forms validate before submission
- Stock quantities update automatically with sales/purchases
- Session persists in browser storage

## Need Help?

Check the full README.md for detailed documentation and technical information.
