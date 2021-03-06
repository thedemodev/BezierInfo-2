# 序言

我们通常用线条来绘制2D图形，大致分为两种线条：直线和曲线。不论我们动手还是用电脑，都能很容易地画出第一种线条。只要给电脑起点和终点，砰！直线就画出来了。没什么好疑问的。

然而，绘制曲线却是个大问题。虽然我们可以很容易地徒手画出曲线，但除非给出描述曲线的数学函数，不然计算机无法画出曲线。实际上，画直线时也需要数学函数，但画直线所需的方程式很简单，我们在这里不去考虑。在计算机看来，所有线条都是“函数”，不管它们是直线还是曲线。然而，这就表示我们需要找到能在计算机上表现良好的曲线方程。这样的曲线有很多种，在本文我们主要关注一类特殊的、备受关注的函数，基本上任何画曲线的地方都会用到它：贝塞尔曲线。

它们是以[Pierre Bézier](https://en.wikipedia.org/wiki/Pierre_B%C3%A9zier)命名的，尽管他并不是第一个，或者说唯一“发明”了这种曲线的人，但他让世界知道了这种曲线十分适合设计工作（在1962年为Renault工作并发表了他的研究）。有人也许会说数学家[Paul de Casteljau](https://en.wikipedia.org/wiki/Paul_de_Casteljau)是第一个发现这类曲线特性的人，在Citroën工作时，他提出了一种很优雅的方法来画这些曲线。然而，de Casteljau没有发表他的工作，这使得“谁先发现”这一问题很难有一个确切的答案。
贝塞尔曲线本质上是伯恩斯坦多项式，这是[Sergei Natanovich Bernstein](https://en.wikipedia.org/wiki/Sergei_Natanovich_Bernstein)研究的一种数学函数，关于它们的出版物至少可以追溯到1912年。无论如何，这些都只是一些冷知识，你可能更在意的是这些曲线很方便：你可以连接多条贝塞尔曲线，并且连接起来的曲线看起来就像是一条曲线。甚至，在你在Photoshop中画“路径”或使用一些像Flash、Illustrator和Inkscape这样的矢量绘图程序时，所画的曲线都是贝塞尔曲线。

那么，要是你自己想编程实现它们呢？有哪些陷阱？你怎么画它们？包围盒是怎么样的，怎么确定交点，怎么拉伸曲线，简单来说：你怎么对曲线做一切你想做的事？这就是这篇文章想说的。准备好学习一些数学吧!

—Pomax (推特账号, [@TheRealPomax](https://twitter.com/TheRealPomax))

<div class="note">

## 注意：几乎所有的贝塞尔图形都是可交互的。

这个页面使用了基于[Bezier.js](https://pomax.github.io/bezierjs/) 的可交互例子。

<!-- The following is no longer true
，还有一些用[MathJax](https://MathJax.org) 排版的“真正的”数学（LaTeX形式）。这个页面是用Webpack离线生成的React应用，这便让加入“查看源码”选项更具挑战性了。我仍然试图将它们添加回来，但跟前几年的版本相比，不觉得它能够支撑部署这个更新。
-->

## 这本书是开源的。

这本书是开源的软件项目，现有两个github仓库。第一个[https://github.com/pomax/bezierinfo]( https://github.com/pomax/bezierinfo )，它是你现在在看的这个，纯粹用来展示的版本。另外一个[https://github.com/pomax/BezierInfo-2]( https://github.com/pomax/BezierInfo-2 )，是带有所有html, javascript和css的开发版本。你可以fork任意一个，随便做些什么，当然除了把它当作自己的作品来商用。 =)

## 用到的数学将有多复杂？

这份入门读物用到的大部分数学知识都是高中所学的。如果你理解基本的计算并能看懂英文的话，就能上手这份材料。有时候会用到*复杂*一点的数学，但如果你不想深究它们，可以选择跳过段落里的“详解”部分，或者直接跳到章节末尾，避开那些看起来很深入的数学。章节的末尾往往会列出一些结论，因此你可以直接利用这些结论。

## 问题，评论：

如果你有对于新章节的一些建议，点击 [Github issue tracker](https://github.com/pomax/BezierInfo-2/issues) （也可以点右上角的repo链接）。如果你有关于材料的一些问题，由于我现在在做改写工作，目前没有评论功能，但你可以用issue跟踪来发表评论。一旦完成重写工作，我会把评论功能加上，或者会有“选择文字段落，点击‘问题’按钮来提问”的系统。到时候我们看看。

## 给我买杯咖啡？

如果你很喜欢这本书，或发现它对你要做的事很有帮助，或者你想知道怎么表达自己对这本书的感激，你可以 [给我买杯咖啡](https://www.paypal.com/donate/?token=4OeU2bI9WLfex_fYcraxmooLUcJ_WDTn8AofsN1WYchMI7RB5Jq6CSZuAWNQTekJGyOh3G) ，所少钱取决于你。这份工作持续了很多年，从一份小小的简要到70多页关于贝塞尔曲线的读物，在完成它的过程中倾注了很多咖啡。我从未后悔花在这上面的每一分钟，但如果有更多咖啡的话，我可以坚持写下去!

</div>
