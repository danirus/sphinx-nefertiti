# Math in Markdown

MyST-Parser offers full support for mathematical expressions. Check out the [Math and equations](https://myst-parser.readthedocs.io/en/latest/syntax/math.html) page in the MyST-Parser documentation.

This page reproduces the examples found in the official documentation, with the purpose to show how math expressions are displayed when using Befertiti for Sphinx.

## Math role

Using the `{math}` role it is possible to insert mathematical expressions in the flow of a paragraph.

``````markdown
Since Pythagoras, we know that {math}`a^2 + b^2 = c^2` represents the
relationship among three sides of a right triangle.
``````

Since Pythagoras, we know that {math}`a^2 + b^2 = c^2` represents the relationship among three sides of a right triangle.


## Math directive

The ``math`` directive allows you to display the mathematical expression as a block, and to refer to it from other places of your documentation.

```{math}
:label: mymath
(a + b)^2 = a^2 + 2ab + b^2

(a + b)^2  &=  (a + b)(a + b) \\
           &=  a^2 + 2ab + b^2
```

The equation {eq}`mymath` is a quadratic equation.

## Dollar delimited math

MyST-Parser has support for dollar delimited math expressions, which can be used to write inline or block expressions. Read the [official documentation](https://myst-parser.readthedocs.io/en/latest/syntax/math.html#dollar-delimited-math).

``````markdown
$$
(a + b)^2  &=  (a + b)(a + b) \\
           &=  a^2 + 2ab + b^2
$$ (mymath2)

The equation {eq}`mymath2` is also a quadratic equation.
``````

$$
(a + b)^2  &=  (a + b)(a + b) \\
           &=  a^2 + 2ab + b^2
$$ (mymath2)

The equation {eq}`mymath2` is also a quadratic equation.

## Direct LaTeX Math

It is possible to use LaTeX by adding the [amsmath](https://ctan.org/pkg/amsmath) extension in ``myst_enable_extensions``:

``````markdown
\begin{equation}\label{e:barwq}\begin{split}
H_c&=\frac{1}{2n} \sum^n_{l=0}(-1)^{l}(n-{l})^{p-2}
\sum_{l _1+\dots+ l _p=l}\prod^p_{i=1} \binom{n_i}{l _i}\\
&\quad\cdot[(n-l )-(n_i-l _i)]^{n_i-l _i}\cdot
\Bigl[(n-l )^2-\sum^p_{j=1}(n_i-l _i)^2\Bigr].
\end{split}\end{equation}
``````

\begin{equation}\label{e:barwq}\begin{split}
H_c&=\frac{1}{2n} \sum^n_{l=0}(-1)^{l}(n-{l})^{p-2}
\sum_{l _1+\dots+ l _p=l}\prod^p_{i=1} \binom{n_i}{l _i}\\
&\quad\cdot[(n-l )-(n_i-l _i)]^{n_i-l _i}\cdot
\Bigl[(n-l )^2-\sum^p_{j=1}(n_i-l _i)^2\Bigr].
\end{split}\end{equation}


