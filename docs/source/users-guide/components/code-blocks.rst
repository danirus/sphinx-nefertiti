.. _code-blocks:

Code blocks
###########

Nefertiti uses Pygments to color code blocks for many programming languages.

.. note::

    The following selection of languages is based on the `top languages used in 2022 <https://octoverse.github.com/2022/top-programming-languages>`_, published by GitHub.

Feel free to clone Nefertiti for Sphinx, change the Pygments styles settings, as explained in :ref:`customize-pygments` in the Customization section of this documentation, and rebuid the docs to see how these code blocks change according to your style choices.

JavaScript
==========

A JavaScript code-block example:

.. code-block:: javascript

    function *fibonacci(n) {
        const infinite = !n && n !== 0;
        let current = 0;
        let next = 1;

        while (infinite || n--) {
            yield current;
            [current, next] = [next, current + next];
        }
    }

Python
======

A Python code-block example:

.. code-block:: python

    class Fibonacci:
        def __init__(self):
            self.cache = [0, 1]

        def __call__(self, n):
            # Validate the value of n
            if not (isinstance(n, int) and n >= 0):
                raise ValueError(f'Positive integer number expected, got "{n}"')

            # Check for computed Fibonacci numbers
            if n < len(self.cache):
                return self.cache[n]
            else:
                # Compute and cache the requested Fibonacci number
                fib_number = self(n - 1) + self(n - 2)
                self.cache.append(fib_number)

            return self.cache[n]

Java
====

A Java code-block example:

.. code-block:: java

    class Main {
        public static void main(String[] args) {
            int n = 10, firstTerm = 0, secondTerm = 1;
            System.out.println("Fibonacci Series till " + n + " terms:");

            for (int i = 1; i <= n; ++i) {
                System.out.print(firstTerm + ", ");

                // compute the next term
                int nextTerm = firstTerm + secondTerm;
                firstTerm = secondTerm;
                secondTerm = nextTerm;
            }
        }
    }

TypeScript
==========

A TypeScript code-block example:

.. code-block:: typescript

    type Eagle = {
        kind: 'eagle';
        fly: () => 'fly';
    };

    type Duck = {
        kind: 'duck';
        quack: () => 'quack';
    };

    type Bird = {
        kind: 'bird';
    };

    type Animal = Eagle | Duck | Bird;

    const doSomething = (animal: Animal): string => {
        switch (animal.kind) {
            case 'eagle':
                return animal.fly();
            case 'duck':
                return animal.quack();
            case 'bird':
                return "animal.quack()";
        }
    }

C#
==

A C# code-block example:

.. code-block:: c#

    using System.Reflection;  // reflection namespace

    // get all public static properties of MyClass type
    PropertyInfo[] propertyInfos;
    propertyInfos = typeof(MyClass).GetProperties(BindingFlags.Public |
                                                  BindingFlags.Static);
    // sort properties by name
    Array.Sort(propertyInfos,
            delegate(PropertyInfo propertyInfo1, PropertyInfo propertyInfo2)
            { return propertyInfo1.Name.CompareTo(propertyInfo2.Name); });

    // write property names
    foreach (PropertyInfo propertyInfo in propertyInfos)
    {
        Console.WriteLine(propertyInfo.Name);
    }

C++
===

A C++ code-block example:

.. code-block:: c++

    #include <iostream>

    using namespace std;

    int fib(int x) {
        if((x==1) || (x==0)) {
            return x;
        } else {
            return fib(x-1) + fib(x-2);
        }
    }

    int main() {
        int x, i=0;
        cout << "Enter the number of terms of series : ";
        cin >> x;
        cout << "\nFibonnaci Series : ";
        while(i < x) {
            cout << " " << fib(i);
            i++;
        }
        return 0;
    }


PHP
===

A PHP code-block example:

.. code-block:: php

    <?php

    function is_bot($system) {

        // Bots list
        $bot_list = array(
            'Googlebot', 'Baiduspider', 'ia_archiver',
            'R6_FeedFetcher', 'NetcraftSurveyAgent',
            'Sogou web spider', 'bingbot', 'Yahoo! Slurp',
            'facebookexternalhit', 'PrintfulBot', 'msnbot',
            'Twitterbot', 'UnwindFetchor', 'urlresolver'
        );

        // If it is search engine bot
        // returns true, else returns false
        foreach($bot_list as $bl) {
            if( stripos( $system, $bl ) !== false )
                return true;
        }

        return false;
    }

    echo is_bot('Googlebot');

    ?>

Shell
=====

A Bash shell code-block example:

.. code-block:: shell

    #!/bin/bash

    echo "Enter your lucky number"
    read n

    if [ $n -eq 101 ];
    then
    echo "You got 1st prize"
    elif [ $n -eq 510 ];
    then
    echo "You got 2nd prize"
    elif [ $n -eq 999 ];
    then
    echo "You got 3rd prize"
    else
    echo "Sorry, try for the next time"
    fi

C
=

A C code-block example:

.. code-block:: c

    // C Program to print the Fibonacci series using recursion
    #include <stdio.h>

    // first two values
    int prev1 = 1;
    int prev2 = 0;

    // recursive function to print the fibonacci series
    void fib(int n)
    {
        if (n < 3) {
            return;
        }
        int fn = prev1 + prev2;
        prev2 = prev1;
        prev1 = fn;
        printf("%d ", fn);
        return fib(n - 1);
    }

Ruby
====

A Ruby code-block example:

.. code-block:: ruby

    def fibonacci(n)
        a = 0
        b = 1

        # Compute Fibonacci number in the desired position.
        n.times do
            temp = a
            a = b
            # Add up previous two numbers in sequence.
            b = temp + b
        end

        return a
    end

    # Write first 15 Fibonacci numbers in sequence.
    15.times do |n|
        result = fibonacci(n)
        puts result
    end

Rust
====

Rust appears 2nd in the list of fastest growing languages, after `HCL <https://github.com/hashicorp/hcl>`_.

A Rust code-block example:

.. code-block:: rust

    pub fn fibonacci(n: i32) -> u64 {
        if n < 0 {
            panic!("{} is negative!", n);
        } else if n == 0 {
            panic!("zero is not a right argument to fibonacci()!");
        } else if n == 1 {
            return 1;
        }

        let mut sum = 0;
        let mut last = 0;
        let mut curr = 1;
        for _i in 1..n {
            sum = last + curr;
            last = curr;
            curr = sum;
        }
        sum
    }
