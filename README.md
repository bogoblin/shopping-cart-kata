# Shopping Cart Kata

This file will act a bit like a blog post which I will update as I work on the task.
I've pasted the task verbatim underneath, so I can refer to it.

## The Task

*You are implementing a simple checkout system, there are four products available, each with a price per unit. Some
products have a special price when bought in certain quantities (e.g. 3 of product A costs 140, not 150). Implement a
checkout system that consumes a data source like this, and returns the sub total when queried.

Make sure your solution includes everything that it would in a production environment, i.e. verifying results,
documentation.*

## Initial thoughts and approach

On the surface this is not a very difficult problem, and it would be very easy to write a quick
program that would solve this adequately. In fact, I'll do that now.

The complexity comes from when you start thinking about
how you would write this system to be extensible in the future. For instance, currently the
special prices are very simple - there is one per product, and the conditions for the discount
follow a simple formula. But what if we wanted a deal such as "buy 2 B and an A for just 100",
"buy any 3 products and get the cheapest free", or "buy a prime numbered amount of D and get the
natural log of the total cost off the Cs in your cart".

