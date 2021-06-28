# tasks

# task1

You are given an integer array prices where prices[k] is the price of a given stock on the kth day, and an integer k. Find the maximum profit you can achieve. You may complete at most k transactions.
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again). The input for prices and k will be given by the use
Example 1:
Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.

Example 2:
Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.

Constraints:
0 <= k <= 100
0 <= prices.length <= 1000
0 <= prices[i] <= 1000

## solution of task1 is in the stockPriceProblem folder where I have used jest for testing purpose.

# task2

problem:- Use the APIs from the Covid Tracking Project to create a new endpoint where an API returns the following data

States sorted in descending order for the number of positive cases
Response from the API should include
state
positive
totalTestResults
notes
covid19Site

## solution of this task is in the covidTrackingProject.

In the solution I have madea new api and have used two remote apis provided by covid tracking for fetching the respective data:-

1> States Current API
2> the States Info API
which is giving the result in a descending order according to the total number of positive cases.
