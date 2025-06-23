
import java.util.Arrays;
import java.util.Comparator;

public class TestSearch {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shirt", "Clothing"),
            new Product(103, "Book", "Stationery"),
            new Product(104, "Phone", "Electronics")
        };

        // Linear Search
        Product result1 = SearchAlgorithms.linearSearch(products, "Phone");
        System.out.println("Linear Search Result: " + result1);

        // Sort before binary search
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        // Binary Search
        Product result2 = SearchAlgorithms.binarySearch(products, "Phone");
        System.out.println("Binary Search Result: " + result2);
    }
}

