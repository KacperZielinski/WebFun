package com.tester.equals;

import java.util.Objects;

public class Main {

    public static void main(String[] args) {
        Money income = new Money(55, "USD");
        Money expenses = new Money(55, "USD");
        System.out.println(income.hashCode());
        System.out.println(expenses.hashCode());
        System.out.println(income.equals(expenses));

        // missing hashCode, issues with HashMap's..
    }

    private static class Money {
        int amount;
        String currencyCode;

        public Money(int amount, String currencyCode) {
            this.amount = amount;
            this.currencyCode = currencyCode;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Money money = (Money) o;
            return amount == money.amount &&
                    Objects.equals(currencyCode, money.currencyCode);
        }
    }
}

