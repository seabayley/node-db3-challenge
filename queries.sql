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

-- Stretch

-- Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT
  CategoryName,
  COUNT(*) AS `Total`
FROM
  Products as p
 JOIN Categories as c
 	on p.CategoryId = c.CategoryId
GROUP BY
  p.CategoryId

  -- For the above query I'm only getting 9 records instead of 9 and W3 Schools shows only 8 different categories?


  -- Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

SELECT OrderID as 'Order ID', 
SUM (quantity) as 'Total Products Ordered' 
FROM OrderDetails
GROUP BY OrderID