## 注册验证插件

用原生js封装的表单注册验证插件，仿制了一下腾讯的样式，供参考学习

![demo](https://raw.githubusercontent.com/jf-wang/register/master/img/demo.png)

[演示地址](https://jf-wang.github.io/register/register.html)
####安装及使用方法

1.将要验证的表单元素添加响应的id属性
```html
<input type="text" name="uesrname" id="user" class="input_st"/>
<input type="password" id="password" name="password" class="input_st"/>
```
2.在页面底部引入js文件

```javascript
<script src="js/reStp.js"></script>
插件内有初始化提示的信息
如果想自定义提示信息
在js文件中写入响应代码如用户名输入框:
$verify.username ={
initial:"请输入匿名", //初始提示
error:"不能为空、只能用汉字、字母、数字组成、下划线、长度6-10位",//错误提示
reg:/^[a-zA-Z0-9\w]{6,10}$/,//格式判断表达式
passStyle:"green", //通过验证的提示样式
errorStyle:"red" //错误的提示样式
             };
```
本插件还有很多不足的地方希望大家一起讨论学习，如需使用请自行扩展和修改


