Jekyll theme
=========================

Slick Material Design theme for [Jekyll](https://jekyllrb.com/) powered by [Material Design Lite v.1.2.1](https://getmdl.io/components/index.html).

## 使用方法
 - 在_posts文件夹下创建新的post。 post都为markdown格式，具体模板如下:
```
    ---
    layout: post
    title:  "作品名"
    date:   2015-10-23
    members: [成员1,成员2,成员3,成员4]
    categories: jekyll update
    image: destkop-image-sample.jpg
    description: This is the first Demo post. Click to see full content.
    ---
    作品描述：
    
    You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.
    
    To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.
    
    作品亮点:
    
    {% highlight markdown %}
    亮点描述：｛描述内容为。。。｝
    {% endhighlight %}
    
    [作品主页][MainPage] [代码链接][CodeBase]
    
    [CodeBase]: http://jekyllrb.com
    [MainPage]: https://github.com/jekyll/jekyll
```
 - 每一个模板对应页面上一个project，也就是portfolio板块下的东西，
 模板可以修改，可以添加自己想要的field
 
## Demo
[模板连接](https://evan-leee.github.io/tech-contest)

## 本地的启服务的方式
 - 安装好jekyll后 在文件目录下执行 `jekyll serve --baseurl '' `可以在本地`4000`端口查看模板内容
  