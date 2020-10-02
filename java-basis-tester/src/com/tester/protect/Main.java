package com.tester.protect;

import com.tester.protect.family.child.Child;

public class Main {
    public static void main(String[] args) {
        Child child = new Child();
        child.disturb();
//        child.hello();  // won't compile unless Main will be in the same package as Parent.class
    }
}
