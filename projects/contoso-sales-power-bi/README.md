# Contoso Sales — Power BI Report

A four-page Power BI report built on the Contoso retail sample (factSales, dimProduct, dimCustomer, dimStore). Full write-up: https://michaelchow38.github.io/#project/contoso-sales-power-bi

The report was built in the Power BI web service ("My workspace"), so it can't be shared by link. The screenshots in this folder show each page.

## Pages

1. **Data model**: star schema with factSales in the center
2. **What are the most profitable product categories?**
3. **Which age groups spend the most, and what do they buy?**
4. **Which genders spend the most, and where do they live?**

Every page has a single-select **Currency** slicer (amounts are never added across currencies) and a **Store Type** slicer (Online vs. Physical).

## Calculated columns

```DAX
-- dimStore
Store Type = IF(CONTAINSSTRING(dimStore[Description], "Online"), "Online", "Physical")

-- dimCustomer
Age Group =
SWITCH(TRUE(),
    dimCustomer[Age] < 25, "18–24",
    dimCustomer[Age] < 35, "25–34",
    dimCustomer[Age] < 45, "35–44",
    dimCustomer[Age] < 55, "45–54",
    dimCustomer[Age] < 65, "55–64",
    "65+")

Age Group Sort =
SWITCH(TRUE(),
    dimCustomer[Age] < 25, 1,
    dimCustomer[Age] < 35, 2,
    dimCustomer[Age] < 45, 3,
    dimCustomer[Age] < 55, 4,
    dimCustomer[Age] < 65, 5,
    6)

Gender Label = UPPER(LEFT(dimCustomer[Gender], 1)) & MID(dimCustomer[Gender], 2, 20)
```

## Measures

```DAX
Total Sales        = SUMX(factSales, factSales[Quantity] * factSales[NetPrice])
Total Cost         = SUMX(factSales, factSales[Quantity] * factSales[UnitCost])
Total Profit       = [Total Sales] - [Total Cost]
Profit Margin %    = DIVIDE([Total Profit], [Total Sales])
Customers          = DISTINCTCOUNT(factSales[CustomerKey])
Sales per Customer = DIVIDE([Total Sales], [Customers])
Selected Currency  = SELECTEDVALUE(factSales[CurrencyCode], "Pick one currency")
```

## Screenshots

| File | Shows |
| --- | --- |
| 01-star-schema.png | Star schema |
| 02-dax-measures.png | Model view with measures |
| 03–06 | Q1: profit and margin by category, top subcategories (online / physical, USD) |
| 07–10 | Q2: spend by age group and category heatmap (online / physical, USD) |
| 11–14 | Q3: gender and location, Colorado (USD) and Berlin (EUR) |
