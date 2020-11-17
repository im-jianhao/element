# button组件

支持`type`、`plain`、`round`、`circle`和`text`属性来定义 Button 的样式。

支持传入`icon="el-icon-edit"`属性定义定义button按钮内部的图标，也可以通过如下方式使用 slot 定义图标样式
````
<el-button type="primary">
  上传
  <i class="el-icon-upload el-icon--right"></i>
</el-button>
````

可以通过`disabled`属性定义按钮是否禁用

支持 **分组** 类似胶囊的形式

```
<el-button-group>
  <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
  <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>
```

- css小技巧

````
<el-button-group>
  <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
  <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>
<el-button-group>
  <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
  <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>
<el-button-group>
  <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
  <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>
// 多个 el-button-group 之前通过 margin-left:10px 区分一个间隙，但是第一个el-button-group也会有10px的间隙可以通过css选择器 + 来去除这种现象
.el-button-group + .el-button-group{
	margin-left: 10px
}
````

可以通过 `loading`  来让按钮显示 加载的效果

通过`medium`、`small`、`mini`，设置`size`属性来配置它们。

`autofocus` 按钮是否显示高亮