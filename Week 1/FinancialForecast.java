public class FinancialForecast {

    // Recursive method to calculate future value
    public static double predictFutureValue(double principal, double growthRate, int years) {
        // Base Case: If no years left, return the current principal
        if (years == 0) {
            return principal;
        }

        // Recursive Case: Apply growth rate and call for remaining years
        return predictFutureValue(principal * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double principal = 10000.0;     // Initial investment
        double growthRate = 0.07;       // 7% annual growth
        int years = 5;                  // Forecast for 5 years

        double futureValue = predictFutureValue(principal, growthRate, years);
        System.out.printf("Predicted Future Value after %d years: %.2f\n", years, futureValue);
    }
}
