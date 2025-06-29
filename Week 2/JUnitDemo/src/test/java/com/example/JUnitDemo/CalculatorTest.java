package com.example.JUnitDemo;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    private Calculator calculator;

    @BeforeEach
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup: Calculator created.");
    }

    @AfterEach
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown: Calculator cleaned up.");
    }

    @Test
    public void testAddition() {
        int a = 2;
        int b = 3;

        int result = calculator.add(a, b);

        assertEquals(5, result, "2 + 3 should be 5");
    }

    @Test
    public void testAdditionWithNegativeNumbers() {
        int a = -4;
        int b = 7;
        int result = calculator.add(a, b);
        assertEquals(3, result, "-4 + 7 should be 3");
    }
}
