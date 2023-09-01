# Images

Support for including images is provided by Sphinx, with [docutils][docutils] (for reStructuredText) and [myst-parser][myst-parser] (for Markdown).

## Image directive

To display an image using the **MyST-parser** extension you can use the standard **Markdown** syntax. To display an image using **reStructuredText** you only need to use the `image` directive. In both cases, the styling of Nefertiti places the image aligned to the left, and adjust the size when the width is larger than the width of the container.

### A sample image

An example of the simplest way to insert an image:

::::{tab-set}
:::{tab-item} Markdown
:sync: md

```markdown
![great_sphinx_of_giza](/_static/img/great_sphinx_of_giza.jpeg)
```

![great_sphinx_of_giza](/_static/img/great_sphinx_of_giza.jpeg)
:::

:::{tab-item} reStructuredText
:sync: rst

```reStructuredText
.. image:: /_static/img/great_sphinx_of_giza.jpeg
```

![great_sphinx_of_giza](/_static/img/great_sphinx_of_giza.jpeg)
:::
::::

## Image dimensions

To adapt images' size you can provide either the ``width`` or ``height`` and the other dimension will adapt to keep the aspect ratio. Alternatively you can pass the ``scale`` argument followed by an integer from 0 to 100 representing the percentage with respect to the width of the main documentation area.

:::{tip}
It is not recommend to use `width` or `height` in combination with `scale`, as the resulting image does not maintain the original aspect ratio.
:::

### Setting image's width

The following example adds an image at half of its width, and display it aligned to the center. The width dimension can be expressed in the following units: `em`, `ex`, `px`, `in`, `cm`, `mm`, `pt`, `pc`, `%`.

::::{tab-set}
:::{tab-item} Markdown
:sync: md

``````markdown
```{image} /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
:alt: Watercolour painting by Mong kyaw sing marma
:width: 75%
:align: center
```
``````

```{image} /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
:alt: Watercolour painting by Mong kyaw sing marma
:width: 75%
:align: center
```
:::

:::{tab-item} reStructuredText
:sync: rst

```reStructuredText
.. image:: /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
    :width: 75%
    :align: center
```

```{image} /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
:alt: Watercolour painting by Mong kyaw sing marma
:width: 75%
:align: center
```
:::
::::

### Setting image's height

The following example displays an image centered and with a height of `350px`. The original height dimension is `600px`. The height dimension can be expressed in the following units: `em`, `ex`, `px`, `in`, `cm`, `mm`, `pt`, `pc`, but not in percentage.

::::{tab-set}
:::{tab-item} Markdown
:sync: md

``````markdown
```{image} /_static/img/landscape-nature-trees-house-sunset-painting.jpg
:height: 500px
:align: center
```
``````

```{image} /_static/img/landscape-nature-trees-house-sunset-painting.jpg
:height: 500px
:align: center
```
:::

:::{tab-item} reStructuredText
:sync: rst

```reStructuredText
.. image:: /_static/img/landscape-nature-trees-house-sunset-painting.jpg
    :height: 500px
    :align: center
```

```{image} /_static/img/landscape-nature-trees-house-sunset-painting.jpg
:height: 500px
:align: center
```
:::
::::

## Image alignment

In the previous section we have seen how to center the image. When the image is centered, it acts as a block and text can not surround the image. However when images are given an `:align: left` or `:align: right` attribute, text can surround the image.

### Image left aligned

The following example in Markdown and reStructuredText inserts an image left aligned with enough text to surround the image.

::::{tab-set}
:::{tab-item} Markdown
:sync: md

``````markdown
```{image} /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
:alt: Watercolour painting by Mong kyaw sing marma
:width: 50%
:align: left
```

Nunc accumsan enim ac rutrum dignissim. In sed erat urna. In turpis
erat, iaculis non nibh nec, suscipit convallis ante. Fusce ullamcorper
magna semper libero laoreet, sed faucibus ligula venenatis. Nunc justo
leo, faucibus at turpis eget, dapibus pharetra tortor.

Morbi commodo ut quam eget ultricies. Nam porta condimentum erat, in
vehicula dui congue vitae. Cras fringilla faucibus faucibus. Phasellus
vitae efficitur arcu. Sed mollis elementum nisl, ac mattis ex feugiat
vitae. Donec augue lectus, viverra molestie mi nec, volutpat auctor
purus. Duis viverra, ante quis lobortis fermentum, lectus tortor
fermentum justo, a finibus lectus ipsum a leo.
``````

```{image} /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
:alt: Watercolour painting by Mong kyaw sing marma
:width: 50%
:align: left
```

Nunc accumsan enim ac rutrum dignissim. In sed erat urna. In turpis
erat, iaculis non nibh nec, suscipit convallis ante. Fusce ullamcorper
magna semper libero laoreet, sed faucibus ligula venenatis. Nunc justo
leo, faucibus at turpis eget, dapibus pharetra tortor.

Morbi commodo ut quam eget ultricies. Nam porta condimentum erat, in
vehicula dui congue vitae. Cras fringilla faucibus faucibus. Phasellus
vitae efficitur arcu. Sed mollis elementum nisl, ac mattis ex feugiat
vitae. Donec augue lectus, viverra molestie mi nec, volutpat auctor
purus. Duis viverra, ante quis lobortis fermentum, lectus tortor
fermentum justo, a finibus lectus ipsum a leo.
:::

:::{tab-item} reStructuredText
:sync: rst

```reStructuredText
.. image:: /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
    :width: 50%
    :align: left

Nunc accumsan enim ac rutrum dignissim. In sed erat urna. In turpis
erat, iaculis non nibh nec, suscipit convallis ante. Fusce
ullamcorper magna semper libero laoreet, sed faucibus ligula
venenatis. Nunc justo leo, faucibus at turpis eget, dapibus
pharetra tortor.

Morbi commodo ut quam eget ultricies. Nam porta condimentum erat,
in vehicula dui congue vitae. Cras fringilla faucibus faucibus.
Phasellus vitae efficitur arcu. Sed mollis elementum nisl, ac
mattis ex feugiat vitae. Donec augue lectus, viverra molestie mi
nec, volutpat auctor purus. Duis viverra, ante quis lobortis
fermentum, lectus tortor fermentum justo, a finibus lectus ipsum a
leo.
```

```{image} /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
:alt: Watercolour painting by Mong kyaw sing marma
:width: 50%
:align: left
```

Nunc accumsan enim ac rutrum dignissim. In sed erat urna. In turpis
erat, iaculis non nibh nec, suscipit convallis ante. Fusce ullamcorper
magna semper libero laoreet, sed faucibus ligula venenatis. Nunc justo
leo, faucibus at turpis eget, dapibus pharetra tortor.

Morbi commodo ut quam eget ultricies. Nam porta condimentum erat, in
vehicula dui congue vitae. Cras fringilla faucibus faucibus. Phasellus
vitae efficitur arcu. Sed mollis elementum nisl, ac mattis ex feugiat
vitae. Donec augue lectus, viverra molestie mi nec, volutpat auctor
purus. Duis viverra, ante quis lobortis fermentum, lectus tortor
fermentum justo, a finibus lectus ipsum a leo.
:::
::::

### Image right aligned

The following example in Markdown and reStructuredText inserts an image right aligned with enough text to surround the image.

::::{tab-set}
:::{tab-item} Markdown
:sync: md

``````markdown
```{image} /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
:alt: Watercolour painting by Mong kyaw sing marma
:width: 50%
:align: right
```

Nunc accumsan enim ac rutrum dignissim. In sed erat urna. In turpis
erat, iaculis non nibh nec, suscipit convallis ante. Fusce
ullamcorper magna semper libero laoreet, sed faucibus ligula
venenatis. Nunc justo leo, faucibus at turpis eget, dapibus
pharetra tortor.

Morbi commodo ut quam eget ultricies. Nam porta condimentum erat,
in vehicula dui congue vitae. Cras fringilla faucibus faucibus.
Phasellus vitae efficitur arcu. Sed mollis elementum nisl, ac
mattis ex feugiat vitae. Donec augue lectus, viverra molestie mi
nec, volutpat auctor purus. Duis viverra, ante quis lobortis
fermentum, lectus tortor fermentum justo, a finibus lectus ipsum
a leo.
``````

```{image} /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
:alt: Watercolour painting by Mong kyaw sing marma
:width: 50%
:align: right
```

Nunc accumsan enim ac rutrum dignissim. In sed erat urna. In turpis
erat, iaculis non nibh nec, suscipit convallis ante. Fusce
ullamcorper magna semper libero laoreet, sed faucibus ligula
venenatis. Nunc justo leo, faucibus at turpis eget, dapibus
pharetra tortor.

Morbi commodo ut quam eget ultricies. Nam porta condimentum erat,
in vehicula dui congue vitae. Cras fringilla faucibus faucibus.
Phasellus vitae efficitur arcu. Sed mollis elementum nisl, ac
mattis ex feugiat vitae. Donec augue lectus, viverra molestie mi
nec, volutpat auctor purus. Duis viverra, ante quis lobortis
fermentum, lectus tortor fermentum justo, a finibus lectus ipsum
a leo.
:::
:::{tab-item} reStructuredText
:sync: rst

``````reStructuredText
.. image:: /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
    :width: 50%
    :align: right

Nunc accumsan enim ac rutrum dignissim. In sed erat urna. In turpis
erat, iaculis non nibh nec, suscipit convallis ante. Fusce
ullamcorper magna semper libero laoreet, sed faucibus ligula
venenatis. Nunc justo leo, faucibus at turpis eget, dapibus
pharetra tortor.

Morbi commodo ut quam eget ultricies. Nam porta condimentum erat,
in vehicula dui congue vitae. Cras fringilla faucibus faucibus.
Phasellus vitae efficitur arcu. Sed mollis elementum nisl, ac
mattis ex feugiat vitae. Donec augue lectus, viverra molestie mi
nec, volutpat auctor purus. Duis viverra, ante quis lobortis
fermentum, lectus tortor fermentum justo, a finibus lectus ipsum
a leo.
``````

```{image} /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
:alt: Watercolour painting by Mong kyaw sing marma
:width: 50%
:align: right
```

Nunc accumsan enim ac rutrum dignissim. In sed erat urna. In turpis
erat, iaculis non nibh nec, suscipit convallis ante. Fusce
ullamcorper magna semper libero laoreet, sed faucibus ligula
venenatis. Nunc justo leo, faucibus at turpis eget, dapibus
pharetra tortor.

Morbi commodo ut quam eget ultricies. Nam porta condimentum erat,
in vehicula dui congue vitae. Cras fringilla faucibus faucibus.
Phasellus vitae efficitur arcu. Sed mollis elementum nisl, ac
mattis ex feugiat vitae. Donec augue lectus, viverra molestie mi
nec, volutpat auctor purus. Duis viverra, ante quis lobortis
fermentum, lectus tortor fermentum justo, a finibus lectus ipsum
a leo.
:::
::::

[docutils]: https://docutils.sourceforge.io/
[myst-parser]: https://myst-parser.readthedocs.io/
