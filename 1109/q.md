下面来走一个 Git 本地工作流的 Demo

首先，我们先来创建一个项目：

mkdir trygit
然后进入项目，开始添加一个 index.html 文件

cd trygit
atom .
现在我们来把一个普通项目编程一个仓库 ，需要执行

git init
init 是英文 initialization （初始化）的缩写。运行这个命令之后，如果我们敲

ls
会看到没有任何变化。因为，命令创建的 .git 文件夹是一个隐藏文件夹（所有以点开头的文件或者文件夹在 Linux 系统下都是隐藏的）。

要查看隐藏文件夹，可以敲

ls -a
这样可以看到输出中包含 .git 文件夹了。

.git 文件夹是 Git 仓库的心脏，未来所有的版本历史都会保存在 .git 文件夹中。所以

仓库 == 项目 + .git/改版历史
注：仓库 ，英文是 Repo ，是我们使用 Git，Github 必须要了解的一个概念。

如果要制作一个版本，一共分两步：添加修改和制作版本。

首先来添加修改到 git ：

git add -A
注： -A 的意思是添加“所有当前修改内容”

要想把添加的内容制作成版本，还需要执行

git commit -m"I add a file"
注： commit 的意思是”做一件很重要的事”，但是在 git 这里，它的意思就是版本 。-m 就是 message 的简写，后面的内容是再版留言 。

问题来了，新用户首次执行上面的命令，会看到下面的报错信息

please tell me who you are
解决方法是，运行下面的命令

git config --global user.name  "Peter Wang"
git config --global user.email  happypeter1983@gmail.com
来设置用户名和邮箱。这样再次执行

$ git commit -m"I add a file"
[master (root-commit) dcb0329] I add index.html
 1 file changed, 1 insertion(+)
 create mode 100644 index.html
就可以成功制作一个版本了。也就是 Git 本地工作流就完成了一个完整的循序。

后续如果再做第二第三个版本，就是只需要：

修改内容用 atom
git add -A
git commit -m"msg"
即可。

查看改版历史

改版历史中，会包含多个版本。每个版本中起码要包含4个 W （ Who When What Why ）。

那么如何来查看改版历史呢？

git log -p
log 是日志的意思。-p 是 patch （补丁，也就是修改内容）的缩写。

![](https://raw.githubusercontent.com/happypeter/digicity/master/img/4w-git.png)

小技巧：q 可以退出 git log -p 的界面，敲 j 可以往下翻，敲 k 可以往上翻。

什么是“改版历史”？

改版历史（ revision history ）就是由新老各个版本组成的一条线。如下图
![]()
