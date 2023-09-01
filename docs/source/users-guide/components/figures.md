# Figures

Images with captions are created with the **figure** directive in both, [MyST Parser's Markdown](https://myst-parser.readthedocs.io/en/latest/syntax/images_and_figures.html#figures-images-with-captions), and [docutil's reStructureText](https://docutils.sourceforge.io/docs/ref/rst/directives.html#figure).

## Figure directive

The figure directive has one mandatory argument, the **image URI**, several optional arguments, the figure's caption and the figure's legend.

Take a look at the official documentation of docutils or MyST Parser to know more about the directive and their available arguments. The documentation of Nefertiti for Sphinx shows examples of the most frequent combination of arguments.

One particular detail of Nefertiti for Sphinx is that when the figure receives either a `scale`, a `width` or `height` the total width of the generated HTML figure element is adapted to the calculated width of the image displayed in the figure. This is done via the JavaScript plugin. The consequence is that caption's and legend's width is reduced to match the width of the image.

:::{tip}
It is not recommend to use ``width`` or ``height`` in combination with ``scale``, as the resulting image does not maintain the original aspect ratio.
:::

### A sample figure

An example of a figure without optional arguments (no change of dimensions, no change of alignment), makes the image cover the available width, displaying the caption and the legend centered below the image:

::::{tab-set}
:::{tab-item} Markdown
:sync: md
:class-content: only-code-tab

``````markdown
```{figure} /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg

This is the caption of the figure.

This is considered the legend of the figure.

And this is also part of the legend.
```
``````
:::
:::{tab-item} reStructuredText
:sync: rst
:class-content: only-code-tab

``````reStructuredText
.. figure:: /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg

    This is the caption of the figure.

    This is considered the legend of the figure.

    And this is also part of the legend.
``````
:::
::::

```{figure} /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg

This is the caption of the figure.

This is considered the legend of the figure.

And this is also part of the legend.
```

## Figure dimensions

To adapt figure's size you can provide either the `width` or `height` and the other dimension will adapt to keep the aspect ratio. Alternatively you can pass the `scale` argument followed by an integer from 0 to 100 representing the percentage with respect to the width of the main documentation area.

### Setting figure's width

The following example displays a figure at half of its width, and aligned to the center. The width dimension can be expressed in the following units: `em`, `ex`, `px`, `in`, `cm`, `mm`, `pt`, `pc`, `%`.

::::{tab-set}

:::{tab-item} Markdown
:sync: md
:class-content: only-code-tab

``````markdown
```{figure} /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
:alt: Watercolour painting by Mong kyaw sing marma
:width: 50%
:align: center

Watercolor painting by *Mong kyaw sing marma*.
```
``````
:::
:::{tab-item} reStructuredText
:sync: rst
:class-content: only-code-tab

``````reStructuredText
.. figure:: /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
    :alt: Watercolour painting by Mong kyaw sing marma
    :width: 50%
    :align: center

    Watercolor painting by **Mong kyaw sing marma**.
``````
:::
::::

```{figure} /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
:alt: Watercolour painting by Mong kyaw sing marma
:width: 50%
:align: center

Watercolor painting by *Mong kyaw sing marma*.
```

### Setting figure's height

The following example displays an image centered and with a height of `500px`. The original height dimension is `600px`. The height dimension can be expressed in the following units: `em`, `ex`, `px`, `in`, `cm`, `mm`, `pt`, `pc`, but not in percentage.

::::{tab-set}
:::{tab-item} Markdown
:sync: md
:class-content: only-code-tab

``````markdown
```{figure} /landscape-nature-trees-house-sunset-painting.jpg
:alt: Landscape nature trees house sunset painting
:height: 500px
:align: center

Unknown author.
Source: [pxhere.com](https://pxhere.com/en/photo/1603256>).
CC0 Public Domain. Free for personal and commercial use.
No attribution required.
```
``````
:::
:::{tab-item} reStructuredText
:sync: rst
:class-content: only-code-tab

``````reStructuredText
.. figure:: /landscape-nature-trees-house-sunset-painting.jpg
    :alt: Landscape nature trees house sunset painting
    :height: 500px
    :align: center

    Unknown author.
    Source: `pxhere.com <https://pxhere.com/en/photo/1603256>`_.
    CC0 Public Domain. Free for personal and commercial use.
    No attribution required.
``````
:::
::::

```{figure} /_static/img/landscape-nature-trees-house-sunset-painting.jpg
:alt: Landscape nature trees house sunset painting
:height: 500px
:align: center

Unknown author.
Source: [pxhere.com](https://pxhere.com/en/photo/1603256>).
CC0 Public Domain. Free for personal and commercial use.
No attribution required.
```

## Figure aligment

The previous examples show how to display figures scaled and centered. Alignment with the `figure` directive works just like with the `image` directive. When the figure is aligned to the center, it acts as a block and text can not surround the image, however when the alignment is `left` or `right` the text will surround the image.

### Figure left aligned

::::{tab-set}
:::{tab-item} Markdown
:sync: md
:class-content: only-code-tab

``````markdown
```{figure} /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
:alt: Watercolour painting by Mong kyaw sing marma
:width: 50%
:align: left

Watercolor painting by **Mong kyaw sing marma**.
Source: `Wikimedia Commons`_. Licensed under the Creative Commons
Attribution-Share Alike 4 International.
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
fermentum, lectus tortor fermentum justo, a finibus lectus
ipsum a leo. Nunc ultrices sapien mi, et tempor risus vestibulum
vel. Cras egestas diam vel massa vestibulum, ut faucibus elit porta.
``````
:::
:::{tab-item} reStructuredText
:sync: rst
:class-content: only-code-tab

``````reStructuredText
.. figure:: /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
    :alt: Watercolour painting by Mong kyaw sing marma
    :width: 50%
    :align: left

    Watercolor painting by **Mong kyaw sing marma**.
    Source: `Wikimedia Commons`_. Licensed under the Creative Commons
    Attribution-Share Alike 4 International.

Nunc accumsan enim ac rutrum dignissim. In sed erat urna. In turpis
erat, iaculis non nibh nec, suscipit convallis ante. Fusce
ullamcorper magna semper libero laoreet, sed faucibus ligula
venenatis. Nunc justo leo, faucibus at turpis eget, dapibus pharetra tortor.

Morbi commodo ut quam eget ultricies. Nam porta condimentum erat,
in vehicula dui congue vitae. Cras fringilla faucibus faucibus.
Phasellus vitae efficitur arcu. Sed mollis elementum nisl, ac
mattis ex feugiat vitae. Donec augue lectus, viverra molestie mi
nec, volutpat auctor purus. Duis viverra, ante quis lobortis
fermentum, lectus tortor fermentum justo, a finibus lectus ipsum
a leo. Nunc ultrices sapien mi, et tempor risus vestibulum vel.
Cras egestas diam vel massa vestibulum, ut faucibus elit porta.
``````
:::
::::

```{figure} /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
:alt: Watercolour painting by Mong kyaw sing marma
:width: 50%
:align: left

Watercolor painting by **Mong kyaw sing marma**.
Source: `Wikimedia Commons`_. Licensed under the Creative Commons
Attribution-Share Alike 4 International.
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
fermentum, lectus tortor fermentum justo, a finibus lectus
ipsum a leo. Nunc ultrices sapien mi, et tempor risus vestibulum
vel. Cras egestas diam vel massa vestibulum, ut faucibus elit porta.


### Figure right aligned

::::{tab-set}
:::{tab-item} Markdown
:sync: md
:class-content: only-code-tab

``````markdown
```{figure} /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
:alt: Watercolour painting by Mong kyaw sing marma
:width: 50%
:align: right

Watercolor painting by **Mong kyaw sing marma**.
Source: `Wikimedia Commons`_. Licensed under the Creative Commons
Attribution-Share Alike 4 International.
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
fermentum, lectus tortor fermentum justo, a finibus lectus
ipsum a leo. Nunc ultrices sapien mi, et tempor risus vestibulum
vel. Cras egestas diam vel massa vestibulum, ut faucibus elit porta.
``````
:::

:::{tab-item} reStructuredText
:sync: rst
:class-content: only-code-tab

``````reStructuredText
.. figure:: /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
    :alt: Watercolour painting by Mong kyaw sing marma
    :width: 50%
    :align: right

    Watercolor painting by **Mong kyaw sing marma**.
    Source: `Wikimedia Commons`_. Licensed under the Creative Commons
    Attribution-Share Alike 4 International.

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
fermentum, lectus tortor fermentum justo, a finibus lectus
ipsum a leo. Nunc ultrices sapien mi, et tempor risus vestibulum
vel. Cras egestas diam vel massa vestibulum, ut faucibus elit porta.
``````
:::
::::

```{figure} /_static/img/Watercolour_by_Mong_kyaw_sing_marma.jpg
:alt: Watercolour painting by Mong kyaw sing marma
:width: 50%
:align: right

Watercolor painting by **Mong kyaw sing marma**.
Source: `Wikimedia Commons`_. Licensed under the Creative Commons
Attribution-Share Alike 4 International.
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
fermentum, lectus tortor fermentum justo, a finibus lectus
ipsum a leo. Nunc ultrices sapien mi, et tempor risus vestibulum
vel. Cras egestas diam vel massa vestibulum, ut faucibus elit porta.
