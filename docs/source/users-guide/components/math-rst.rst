Math in reStructuredText
########################

reStructuredText has complete support to write math expressions using the inline ``:math:`` role, and the ``math`` directive. Check out the docutils documentation about `LaTeX syntax for Mathematics <https://docutils.sourceforge.io/docs/ref/rst/mathematics.html>`_.

Math role
*********

Use the ``:math:`` role to insert inline mathematical expressions in a paragraph.

.. code-block:: reStructuredText

    An inline mathematical expression: :math:`\psi(r) = \exp(-2r)`

An inline mathematical expression: :math:`\psi(r) = \exp(-2r)`


Math directive
**************

The ``math`` directive allows you to display the mathematical expression as a block, and to refer to it from other places of your documentation.

.. code-block:: reStructuredText

    .. math::
       :name: Fourier transform

       (\mathcal{F}f)(y)
        = \frac{1}{\sqrt{2\pi}^{\ n}}
          \int_{\mathbb{R}^n} f(x)\,
          e^{-\mathrm{i} y \cdot x} \,\mathrm{d} x.

    The ``:name:`` option puts a label on the equation that can be linked to
    by hyperlink references. In this case, you could link back to the previous
    math equation using the `Fourier transform`_ hyperlink reference.

.. math::
   :name: Fourier transform

   (\mathcal{F}f)(y)
    = \frac{1}{\sqrt{2\pi}^{\ n}}
      \int_{\mathbb{R}^n} f(x)\,
      e^{-\mathrm{i} y \cdot x} \,\mathrm{d} x.

The ``:name:`` option puts a label on the equation that can be linked to by hyperlink references. In this case, you could link back to the previous math equation using the `Fourier transform`_ hyperlink reference.
