-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select p.ProductName, c.CategoryName
from Product as p
join Category as c
	on p.CategoryId = c.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select id, ShipName
from 'Order'
where orderdate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select p.ProductName, o.Quantity
from OrderDetail as o
join product as p
where orderid = 10251 AND p.id = o.productId
order by p.productName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select o.Id as 'Order Id',
 c.companyName as 'Company',
 e.lastName as 'Employee Name'
from 'Order' as o
join customer as c
	on c.Id = o.CustomerId
join employee as e
	on e.Id = o.EmployeeId